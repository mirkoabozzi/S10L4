import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

describe("Welcome mount", () => {
  it("Render welcome componetn", () => {
    render(<Welcome />);
    const h1 = screen.getByText(/Tutti i libri che cerchi nel tuo shop preferito!/i);

    expect(h1).toBeInTheDocument();
  });
});
