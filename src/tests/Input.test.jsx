import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe("Input", () => {
  it("Filter Book", async () => {
    render(<App />);
    const inputField = screen.getByTestId("inputField");

    const user = userEvent.setup();

    await user.type(inputField, "born");

    const filteredBookLists = await screen.getAllByText(/compra/i);

    // expect(filteredBookLists).toHaveLength(2);

    expect(filteredBookLists.length).toBeGreaterThan(0);
  });
});
