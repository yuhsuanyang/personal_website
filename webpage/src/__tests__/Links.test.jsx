import { expect, describe, beforeEach, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import App from "../App";

describe("Links test", () => {
  beforeEach(() => {
    render(<App />);
  });
  it("Link Linkedin page", async () => {
    const button = screen.getByRole("link", { name: "Linkedin" });
    expect(button).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/darcy-yu-hsuan-yang/",
    );
  });

  it("Link Github page", async () => {
    const button = screen.getByRole("link", { name: "Github" });
    expect(button).toHaveAttribute("href", "https://github.com/yuhsuanyang");
  });

  it("Show Email Address", async () => {
    // const copiedTest = vi.fn(); // record function call
    // Object.assign(navigator, { clipboard: { copiedTest } });
    const button = screen.getByRole("link", { name: "Email" });
    await userEvent.click(button);
    expect(screen.getByText("sb0953330882@gmail.com")).toBeInTheDocument();
    // expect(copiedTest).toHaveBeenCalledWith("sb0953330882@gmail.com");
  });
});
