import { screen } from "@testing-library/react";
import { render } from "../test-utils";
import Home from "../pages/Home";

test("renders Home page", () => {
  render(<Home />);
  const titleElement = screen.getByText(/We've created a quiz that can answer this for you/i);
  expect(titleElement).toBeInTheDocument();
  const buttonElement = screen.getByText(/Take the quiz now/i);
  expect(buttonElement).toBeInTheDocument();
});
