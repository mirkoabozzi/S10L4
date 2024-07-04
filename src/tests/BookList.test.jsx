import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Bootsrap Cards", () => {
  it("Render Bootsrap Cards", () => {
    render(<App />);
    const cards = screen.getAllByText(/compra/i); //prendo il bottone presente su ogni card
    // console.log(cards);

    // expect(cards.length).toBeGreaterThan(0);
    expect(cards).toHaveLength(91);
  });
});
