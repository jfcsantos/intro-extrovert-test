import { screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Form from "../pages/Form";
import { render } from "../test-utils";

describe("Form tests", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  test("renders Form page", async () => {
    await act(async () => {
      render(<Form />);
    });
    await screen.findByText(/Question/i, { exact: false });
  });
});
