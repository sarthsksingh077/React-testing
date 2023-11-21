import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("skills", () => {
  const skills = ["HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "REACT"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listEle = screen.getByRole("list");
    expect(listEle).toBeInTheDocument();
  });

  test("renders list of skills", () => {
    render(<Skills skills={skills} />);

    const listItemEle = screen.getAllByRole("listitem");
    expect(listItemEle).toHaveLength(skills.length);
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  test("Start Learning button is not rendered", () => {
    render(<Skills skills={skills} />);
    const StartLearningButton = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(StartLearningButton).not.toBeInTheDocument();
  });
});
