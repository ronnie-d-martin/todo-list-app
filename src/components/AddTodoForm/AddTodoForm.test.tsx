import { render, screen, fireEvent } from "@testing-library/react";
import { AddTodoForm, IAddTodoForm } from "./AddTodoForm";

describe("AddTodoForm Component", () => {
    const mockOnSubmit = jest.fn();

    const renderForm = (props: Partial<IAddTodoForm> = {}) => {
        const defaultProps: IAddTodoForm = {
            onSubmit: mockOnSubmit,
        };
        return render(<AddTodoForm {...defaultProps} {...props} />);
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders the form correctly", () => {
        renderForm();

        // Check if the input and button are rendered
        expect(screen.getByPlaceholderText("Enter todo")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
    });

    it("updates the input value when the user types", () => {
        renderForm();

        const input = screen.getByPlaceholderText("Enter todo") as HTMLInputElement;

        fireEvent.change(input, { target: { value: "New Todo" } });

        expect(input.value).toBe("New Todo");
    });

    it("calls onSubmit with the input value when the form is submitted", () => {
        renderForm();

        const input = screen.getByPlaceholderText("Enter todo");
        const button = screen.getByRole("button", { name: /add/i });

        fireEvent.change(input, { target: { value: "New Todo" } });

        // Simulate form submission
        fireEvent.click(button);

        // Check if onSubmit was called with the correct value
        expect(mockOnSubmit).toHaveBeenCalledWith("New Todo");
    });
});