
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Greet from "./Greet";

/**
 * Greet should render the text Hello, and if a name is passed into the component, it should render the name as well.
 */


test("Greet renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
});

test("Greet renders correctly with name", () => {
    render(<Greet name="Faris" />);
    const textElement = screen.getByText("Hello Faris");
    expect(textElement).toBeInTheDocument();
});