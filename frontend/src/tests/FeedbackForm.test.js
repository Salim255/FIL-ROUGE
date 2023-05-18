import { screen, render } from "@testing-library/react";
import FeedbackForm from "../components/FeedbackForm";

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
