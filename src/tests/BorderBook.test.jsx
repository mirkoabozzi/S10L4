import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import { expect } from "vitest";

describe("Border Book", () => {
  it("Border Book change color", () => {
    render(<App />);
    const cards = screen.getAllByTestId("cards");
    const card = cards[0];

    fireEvent.click(card);

    expect(card).toHaveStyle({ border: "3px solid blue" });
  });
});
