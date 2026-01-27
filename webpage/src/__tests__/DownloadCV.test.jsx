import { expect, describe, beforeEach, afterEach, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import fs from "fs";
import puppeteer from "puppeteer";
import path from "path";

import App from "../App";

let page;
let browser;

const DOWNLOAD_DIR = path.resolve("src", "__tests__", "downloads");
const TODAY = new Date();
const EXPECTED_FILENAME = `CV_${TODAY.getFullYear()}${(TODAY.getMonth() + 1).toString().padStart(2, "0")}.pdf`;

describe("Download CV test", () => {
  beforeEach(async () => {
    //    if (fs.existsSync(DOWNLOAD_DIR)) {
    //      fs.rmSync(DOWNLOAD_DIR, { recursive: true, force: true });
    //    }
    fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });
    render(<App />);
    browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    page = await browser.newPage();
    const client = await page.target().createCDPSession();

    await client.send("Page.setDownloadBehavior", {
      behavior: "allow",
      downloadPath: DOWNLOAD_DIR,
    });
  });

  afterEach(async () => {
    await browser.close();
  });
  it("Go to CV page and Download", { timeout: 10000 }, async () => {
    const button = screen.getByRole("button", { name: "CV" });
    await userEvent.click(button);
    await page.goto("https://yuhsuanyang.github.io/CV/");

    // const files = fs.readdirSync(DOWNLOAD_DIR);
    // console.log(files);
    const result = await waitForDownload();
    // expect(result).toMatch(/\.pdf$/);
    expect(result).toEqual(EXPECTED_FILENAME);
    expect(fs.statSync(path.join(DOWNLOAD_DIR, result)).size).toBeGreaterThan(
      0,
    );
  });
});

function waitForDownload() {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    var count = 0;
    setInterval(() => {
      const files = fs.readdirSync(DOWNLOAD_DIR);
      count++;
      console.log(`Check for ${count} times`);
      const pdfFile = files.find((f) => {
        //        return f.endsWith(".pdf");
        return f == EXPECTED_FILENAME;
      });
      if (pdfFile) {
        resolve(pdfFile);
        clearInterval();
      }
      if (Date.now() - start > 5000) {
        reject(
          `Download Timeout. Cannot find ${EXPECTED_FILENAME} in test folder`,
        );
        clearInterval();
      }
    }, 1000);
  });
}
