import { render, screen } from "@testing-library/react";
import AppProviders from "../../providers/AppProviders";
import MuiMode from "./MuiMode";

describe("MuiMode", () => {
    test("renders correctly", () => {
        render(<MuiMode />, {
            wrapper: AppProviders
        });
        /**
         * The wrapper will wrap the <MuiMode /> in the AppProviders component before rendering it.
         */
        const headingElement = screen.getByRole("heading");
        expect(headingElement).toHaveTextContent("dark mode");
    })
});