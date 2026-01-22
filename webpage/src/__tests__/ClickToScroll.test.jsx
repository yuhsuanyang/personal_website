import { beforeEach, it, vi, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
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
    const arrow1 = screen.getByTestId("down-arrow1");
    await userEvent.click(arrow1);
    expect(scroll).toHaveBeenCalledWith(1);
    const arrow2 = screen.getByTestId("down-arrow2");
    await userEvent.click(arrow2);
    expect(scroll).toHaveBeenCalledWith(2);
  });

  it("Scroll up", async () => {
    // expect(scroll).toHaveBeenCalledWith(2);
    // scroll.mockClear();
    const arrow1 = screen.getByTestId("up-arrow1");
    await userEvent.click(arrow1);
    expect(scroll).toHaveBeenCalledWith(1);
    const arrow2 = screen.getByTestId("up-arrow2");
    await userEvent.click(arrow2);
    expect(scroll).toHaveBeenCalledWith(0);
  });
});
