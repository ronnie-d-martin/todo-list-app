import { render, screen } from "@testing-library/react";
import { Navigation } from "./Navigation";
import { MemoryRouter, useLocation } from "react-router-dom";

// Mock useLocation
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: jest.fn(),
}));

describe("Navigation Component", () => {
    const renderNavigation = (initialRoute = "/") => {
        return render(
            <MemoryRouter initialEntries={[initialRoute]}>
                <Navigation />
            </MemoryRouter>
        );
    };

    it("renders navigation links correctly", () => {
        // Mock useLocation to return the home route
        (useLocation as jest.Mock).mockReturnValue({ pathname: "/" });

        renderNavigation();

        // Check if all links are rendered
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Todos")).toBeInTheDocument();
        expect(screen.getByText("Add Todo")).toBeInTheDocument();
    });

    it("applies active styles to the Home link when on the home route", () => {
        // Mock useLocation to return the home route
        (useLocation as jest.Mock).mockReturnValue({ pathname: "/" });

        renderNavigation();

        const homeLink = screen.getByText("Home");
        expect(homeLink).toHaveClass("underline font-bold");
    });

    it("applies active styles to the Todos link when on the todos route", () => {
        // Mock useLocation to return the todos route
        (useLocation as jest.Mock).mockReturnValue({ pathname: "/todos" });

        renderNavigation("/todos");

        const todosLink = screen.getByText("Todos");
        expect(todosLink).toHaveClass("underline font-bold");
    });

    it("applies active styles to the Add Todo link when on the add route", () => {
        // Mock useLocation to return the add route
        (useLocation as jest.Mock).mockReturnValue({ pathname: "/add" });

        renderNavigation("/add");

        const addTodoLink = screen.getByText("Add Todo");
        expect(addTodoLink).toHaveClass("underline font-bold");
    });

    it("applies hover styles to inactive links", () => {
        // Mock useLocation to return the home route
        (useLocation as jest.Mock).mockReturnValue({ pathname: "/" });

        renderNavigation();

        const todosLink = screen.getByText("Todos");
        const addTodoLink = screen.getByText("Add Todo");

        // Check if inactive links have hover styles
        expect(todosLink).toHaveClass("hover:underline");
        expect(addTodoLink).toHaveClass("hover:underline");
    });
});