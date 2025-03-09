import { render, screen, fireEvent } from "@testing-library/react";
import { AddTodo } from "./AddTodo";
import { useTodosContext } from "../../hooks";
import { useNavigate } from "react-router-dom";

// Mock the hooks
jest.mock("../../hooks", () => ({
    useTodosContext: jest.fn()
}));

jest.mock("react-router-dom", () => ({
    useNavigate: jest.fn(),
}));

describe("AddTodo", () => {
    let addTodoMock: jest.Mock;
    let navigateMock: jest.Mock;

    beforeEach(() => {
        // Mock implementations
        addTodoMock = jest.fn();
        navigateMock = jest.fn();

        (useTodosContext as jest.Mock).mockReturnValue({
            addTodo: addTodoMock,
        });

        (useNavigate as jest.Mock).mockReturnValue(navigateMock);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should call addTodo and navigate when the form is submitted", () => {
        // Render the component
        render(<AddTodo />);

        // Find the input and submit button
        const input = screen.getByRole("textbox");
        const submitButton = screen.getByRole("button", { name: /Add/i });

        // Simulate user input and form submission
        fireEvent.change(input, { target: { value: "Test Todo" } });
        fireEvent.click(submitButton);

        // Check if addTodo was called with the correct arguments
        expect(addTodoMock).toHaveBeenCalledWith({
            id: expect.any(Number), // Since Date.now() is used, we can't predict the exact value
            text: "Test Todo",
        });

        // Check if navigate was called with the correct route
        expect(navigateMock).toHaveBeenCalledWith("/todos");
    });
});