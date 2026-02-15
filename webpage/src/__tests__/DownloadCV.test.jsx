import { expect, describe, beforeEach, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import fs from "fs";
import path from "path";

import App from "../App";

const DOWNLOAD_DIR = path.resolve("src", "__tests__", "downloads");
const TODAY = new Date();
const EXPECTED_FILENAME = `CV_${TODAY.getFullYear()}${(TODAY.getMonth() + 1).toString().padStart(2, "0")}.pdf`;

vi.mock("html2canvas", () => ({
  default: vi.fn(() =>
    Promise.resolve({
      toDataURL: () => "fake",
    }),
  ),
}));

const saveMock = vi.fn();

vi.mock("jspdf", () => {
  return {
    default: vi.fn().mockImplementation(() => ({
      addImage: vi.fn(),
      save: saveMock,
      internal: {
        pageSize: {
          getWidth: () => 210,
        },
      },
    })),
  };
});

function createMockIframe() {
  const iframe = document.createElement("iframe");
  iframe.id = "cv";

  const fakeDoc = document.implementation.createHTMLDocument("fake");

  // 建立一個 .cv 元素，放進 body
  const cvDiv = document.createElement("div");
  cvDiv.className = "cv";
  fakeDoc.body.appendChild(cvDiv);

  // 設定 body font size
  fakeDoc.body.style.fontSize = "16px";

  // 將 iframe.contentDocument 指向 fakeDoc
  Object.defineProperty(iframe, "contentDocument", {
    value: fakeDoc,
    writable: true,
  });

  document.body.appendChild(iframe);
}

describe("Download CV test", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    saveMock.mockClear();
    createMockIframe();

    render(<App />);
  });

  it("Go to CV page and Download", { timeout: 10000 }, async () => {
    const button = screen.getByRole("button", { name: "CV" });
    await userEvent.click(button);
    await waitFor(() => {
      expect(saveMock).toHaveBeenCalled();
    });

    expect(saveMock).toHaveBeenCalledWith(EXPECTED_FILENAME);
  });
});

