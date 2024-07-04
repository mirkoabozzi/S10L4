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

  it("Border Book remove color", () => {
    render(<App />);
    const cards = screen.getAllByTestId("cards");

    const firstCard = cards[0];
    const secondCard = cards[1];

    fireEvent.click(secondCard);

    expect(firstCard).not.toHaveStyle({ border: "3px solid blue" });
    expect(secondCard).toHaveStyle({ border: "3px solid blue" });
  });
});
