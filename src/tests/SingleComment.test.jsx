import { render, screen } from "@testing-library/react";
import App from "../App";
import { expect } from "vitest";

describe("SingleComment", () => {
  it("Check Singol comment element at page loaded", () => {
    render(<App />);

    const alert = screen.getByRole("alert");
    // console.log(alert);

    expect(alert).toBeInTheDocument();
  });
});
