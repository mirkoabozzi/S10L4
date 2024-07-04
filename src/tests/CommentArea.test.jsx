import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Comment Area", () => {
  it("CommentArea Render", () => {
    render(<App />);

    const commentArea = screen.getByTestId("container"); //prendo il container dei commenti

    expect(commentArea).toHaveClass("container"); //verifico presenza classe sul container
  });
});
