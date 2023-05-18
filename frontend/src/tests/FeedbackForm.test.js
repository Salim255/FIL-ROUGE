import { screen, render } from "@testing-library/react";
import FeedbackForm from "../components/FeedbackForm";
describe("Test related to feedback Form", () => {
  test("On load condtion of form", () => {
    render(<FeedbackForm />);

    const textbox = screen.getByRole("textbox");
    expect(textbox).toBeInTheDocument();

    const checkBox = screen.getByLabelText("I accept the terms and Condtions", {
      exact: false,
    });
    expect(checkBox).toBeInTheDocument();

    const btn = screen.getByRole("button", {
      name: "Add Feedback",
      exact: false,
    });
    expect(btn).toBeInTheDocument();
    expect(btn).toBeDisabled();
  });

  test("Button enabled only if input and checkbox have values", () => {
    render(<FeedbackForm />);
    const textbox = screen.getByPlaceholderText("Enter your Feedback here");
    const checkBox = screen.getByLabelText("I accept the terms and Condtions", {
      exact: false,
    });
    const btn = screen.getByRole("button", {
      name: "Add Feedback",
      exact: false,
    });
  });
});
