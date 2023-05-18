import { logRoles, render, screen } from "@testing-library/react";
import App from "./App";

//it("example, test two", () => {}); Same us test(...)
test.skip("example test one", () => {
  render(<App />);
  logRoles(screen.getByTestId("parent-container")); //we use this to get an element role

  //Test whether button exist or not,
  //1 get the button
  const btnElement = screen.getByRole("button", {
    name: "Click here",
    exact: false,
  });

  //Perform assertion
  expect(btnElement).toBeInTheDocument();
});
