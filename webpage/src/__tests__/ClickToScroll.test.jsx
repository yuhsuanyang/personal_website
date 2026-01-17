import { beforeEach, it, vi, describe, expect, render } from "vitest";
import userEvent from "@testing-library/react";
import App from "../App";

const scroll = vi.fn();

vi.mock("@react-spring/parallax", () => {
  const React = require("react");
  return {
    Parallax: React.forwardRef((props, ref) => {
      React.useImperativeHandle(ref, () => ({ scrollTo: scroll })); // ref.current.scrollTo(1)
      return <div>{props.children}</div>;
    }),
    ParallaxLayer: ({ children }) => <div>{children}</div>,
  };
});

describe("Click and Scroll test", () => {
  beforeEach(() => {
    render(<App />);
  });
  it("Scroll down", async () => {
    const arrow = screen.getByTestId("down-arrow");
    await userEvent.click(arrow);
    expect(scroll).toHaveBeenCalledWith(1);
    await userEvent.click(arrow);
    expect(scroll).toHaveBeenCalledWith(2);
  });

  it("Scroll up", async () => {
    expect(scroll).toHaveBeenCalledWith(2);
    scroll.mockClear();
    const arrow = screen.getByTestId("up-arrow");
    await userEvent.click(arrow);
    expect(scroll).toHaveBeenCalledWith(1);
    await userEvent.click(arrow);
    expect(scroll).toHaveBeenCalledWith(0);
  });
});
