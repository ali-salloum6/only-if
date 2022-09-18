import { render, screen } from "@testing-library/react";
import App from "./App";

test("Navbar should be in the app", () => {
  render(<App />);
  const navBarElement = screen.getByTestId("navbar");
  expect(navBarElement).toBeInTheDocument();
});
