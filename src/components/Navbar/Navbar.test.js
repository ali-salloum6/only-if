import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

test("renders the logo in the Navbar", () => {
  render(<Navbar />);
  const logo = screen.getByTestId("logo");
  expect(logo).toBeInTheDocument();
});
