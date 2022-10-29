import { render, screen, logRoles } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
    const skills = ["HTML", "CSS", "JavaScript", "React", "Node", "MongoDB"];
    test("renders correctly", () => {
        render(<Skills skills={skills} />);

        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    });

    test("renders a list of skills", () => {
        render(<Skills skills={skills} />);

        const listItems = screen.getAllByRole("listitem");
        expect(listItems).toHaveLength(skills.length);
    });

    test("renders login button", () => {
        render(<Skills skills={skills} />);

        const loginButton = screen.getByRole("button", {
            name: "Login",
        });
        expect(loginButton).toBeInTheDocument();
    });

    test("start learning button is not rendered", () => {
        render(<Skills skills={skills} />);

        const startLearningButton = screen.queryByRole("button", {
            name: /Start learning/i,
        });
        expect(startLearningButton).not.toBeInTheDocument();
    });

    test("start learning button is eventually displayced", async () => {
        const view = render(<Skills skills={skills} />);
        // logRoles(view.container);
        // screen.debug();
        const startLearningButton = await screen.findByRole("button", {
            name: /Start learning/i,
            // name: "Start lean"
        }, {
            // default timeout is 1000ms
            timeout: 2000,
        });
        // screen.debug();

        expect(startLearningButton).toBeInTheDocument();
    });
});