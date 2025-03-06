import { useContext } from "react";
import TodoContext from "../context/TodoContext";

export const useTodosContext = () => {
	const context = useContext(TodoContext);
	if (!context)
		throw new Error("useTodos must be used within a TodoProvider");
	return context;
};
