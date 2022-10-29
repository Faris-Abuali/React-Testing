import { render, screen } from '@testing-library/react';
import Counter from './Counter';
import userEvent from '@testing-library/user-event';

describe('Counter', () => {
    it('should render', () => {
        render(<Counter />);
        const countElement = screen.getByRole('heading');
        expect(countElement).toBeInTheDocument();

        const incrementButton = screen.getByRole('button', {
            name: /increment/i,
        });
        expect(incrementButton).toBeInTheDocument();
    });

    it("should render a count of 0", () => {
        render(<Counter />);
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('0');
    });

    test("render a count of 1 after clicking the increment button", async () => {
        /**
         * Start a "session" with userEvent. All APIs returned by this function share an input device state and a default configuration:
         */
        userEvent.setup();

        render(<Counter />);
        const incrementButton = screen.getByRole('button', {
            name: /increment/i,
        });
        await userEvent.click(incrementButton);
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('1');
    });

    // test("renders a count of 2 after clicking the increment button twice", async () => {
    //     userEvent.setup();

    //     render(<Counter />);
    //     const incrementButton = screen.getByRole('button', {
    //         name: /increment/i,
    //     });
    //     const firstClick = userEvent.click(incrementButton);
    //     const secondClick = userEvent.click(incrementButton);
    //     await Promise.all([firstClick, secondClick]);
    //     const countElement = screen.getByRole('heading');
    //     expect(countElement).toHaveTextContent('2');
    // });


    test("renders a count of 2 after clicking the increment button twice", async () => {
        /**
         * Start a "session" with userEvent. All APIs returned by this function share an input device state and a default configuration:
         */
        userEvent.setup();

        render(<Counter />);
        const incrementButton = screen.getByRole('button', {
            name: /increment/i,
        });
        await userEvent.tripleClick(incrementButton);
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('3');
    });

    test("renders a count of 10 after clicking the set button", async () => {
        userEvent.setup();
        render(<Counter />);
        const amountInput = screen.getByRole("spinbutton");
        // For input of type `number`, the role is `spinbutton` instead of `textbox`.
        await userEvent.type(amountInput, "10");
        expect(amountInput).toHaveValue(10);

        // Now click the set button
        const setButton = screen.getByRole('button', {
            name: /set/i,
        });
        await userEvent.click(setButton);

        // Now find the heading element
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('10');
    });

    test("elements are focused in thr right order", async () => {
        userEvent.setup();
        render(<Counter />);
        const incrementButton = screen.getByRole('button', {name: /increment/i});
        const amountInput = screen.getByRole("spinbutton");
        const setButton = screen.getByRole('button', {name: /set/i});

        await userEvent.tab();
        expect(incrementButton).toHaveFocus();

        await userEvent.tab();
        expect(amountInput).toHaveFocus();

        await userEvent.tab();
        expect(setButton).toHaveFocus();
    });
});