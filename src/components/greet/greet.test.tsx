import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

test("Greet rendres correctly", () => {
  render(<Greet />);
  const textEle = screen.getByText(/hello/i);
  expect(textEle).toBeInTheDocument();
});

test("Greet renders with name", () => {
  render(<Greet name="Sarthak" />);
  const textEle = screen.getByText("Hello Sarthak");
  expect(textEle).toBeInTheDocument();
});
