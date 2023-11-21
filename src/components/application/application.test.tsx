import { Application } from "./application";
import { render, screen } from "@testing-library/react";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const paragraphEle = screen.getByText("All fields are mandatory");
    expect(paragraphEle).toBeInTheDocument();

    const closeSpanEle = screen.getByTitle("close");
    expect(closeSpanEle).toBeInTheDocument();

    const nameElements = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElements).toBeInTheDocument();

    const bioElements = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElements).toBeInTheDocument();

    const jobLocationELement = screen.getByRole("combobox");
    expect(jobLocationELement).toBeInTheDocument();

    // const termsElement = screen.getByRole("checkbox");
    // expect(termsElement).toBeInTheDocument();

    const submitButtonEle = screen.getByRole("button");
    expect(submitButtonEle).toBeInTheDocument();

    const commentsEle = screen.getByPlaceholderText("Please add comments");
    expect(commentsEle).toBeInTheDocument();

    const termsAndConditionEle = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsAndConditionEle).toBeInTheDocument();
  });
});
