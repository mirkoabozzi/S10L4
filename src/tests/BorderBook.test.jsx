import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import { expect } from "vitest";

describe("Border Book", () => {
  it("Border Book change color", () => {
    render(<App />);
    const cards = screen.queryAllByTestId("cards");

    fireEvent.click(cards);

    expect(cards).toHaveClass("btn-primary");
  });
});
