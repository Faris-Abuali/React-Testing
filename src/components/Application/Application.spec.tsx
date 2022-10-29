import { render, screen } from '@testing-library/react';
import Application from './Application';

describe("Application", () => {
    test("renders correctly", () => {
        render(<Application />);

        const pageHeading = screen.getByRole("heading", {
            // name: "Job Application Form",
            level: 1,
        });
        expect(pageHeading).toBeInTheDocument();

        const closeElement = screen.getByTitle("close");
        expect(closeElement).toBeInTheDocument();

        const sectionHeading = screen.getByRole("heading", { level: 2 });
        expect(sectionHeading).toBeInTheDocument();

        const paragraphEelement = screen.getByText("All fields are mandatory");
        expect(paragraphEelement).toBeInTheDocument();
        
        const imageElement = screen.getByAltText("a person with a laptop");
        expect(imageElement).toBeInTheDocument();

        const customElement = screen.getByTestId("custom-element");
        expect(customElement).toBeInTheDocument();
        
        const nameElement = screen.getByRole("textbox", {
            name: 'Name',
        });
        const nameElement2 = screen.getByLabelText("Name");
        expect(nameElement2).toBeInTheDocument();

        const nameElement3 = screen.getByPlaceholderText("Fullname");
        expect(nameElement3).toBeInTheDocument();

        const nameElement4 = screen.getByDisplayValue("Faris");
        expect(nameElement4).toBeInTheDocument();

        const bioElement = screen.getByRole("textbox", {
            name: 'Bio',
        });
        expect(bioElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole("combobox");
        expect(jobLocationElement).toBeInTheDocument();

        // const termsElement = screen.getByRole("checkbox");
        // expect(termsElement).toBeInTheDocument();

        const termsElement = screen.getByLabelText("I agree to the terms and conditions");
        expect(termsElement).toBeInTheDocument();

        const submitButtonElement = screen.getByRole("button");
        expect(submitButtonElement).toBeInTheDocument();
    });
});