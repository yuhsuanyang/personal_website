import { expect, describe, beforeEach, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import App from "../App";

describe("Links test", () => {
  beforeEach(() => {
    render(<App />);
  });
  it("Link Linkedin page", async () => {
    const link = screen.getByRole("link", { name: "Linkedin" });
    expect(link).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/darcy-yu-hsuan-yang/",
    );
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("Link Github page", async () => {
    const link = screen.getByRole("link", { name: "Github" });
    expect(link).toHaveAttribute("href", "https://github.com/yuhsuanyang");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("Show Email Address", async () => {
    const button = screen.getByRole("button", { name: "Email" });
    await userEvent.click(button);
    expect(screen.getByText("sb0953330882@gmail.com")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Copy" })).toBeInTheDocument();
  });
  it("Copy Email Address", async () => {
    const copiedTest = vi.fn(); // record function call
    Object.assign(navigator, { clipboard: { copiedTest } });
    const emailButton = screen.getByRole("button", { name: "Email" });
    await userEvent.click(emailButton);

    const copyButton = screen.getByRole("button", { name: "Copy" });
    await userEvent.click(copyButton);
    expect(copiedTest).toHaveBeenCalledWith("sb0953330882@gmail.com");
  });
});
