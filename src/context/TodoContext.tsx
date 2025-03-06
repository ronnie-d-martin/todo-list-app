import { createContext, useState, ReactNode } from "react";

export interface Todo {
	id: number;
	text: string;
}

export interface TodoContextType {
	todos: Todo[];
	addTodo: (todo: Todo) => void;
	updateTodo: (updatedTodo: Todo) => void;
	deleteTodo: (id: number) => void;
}

const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodo = (todo: Todo) => {
		setTodos([...todos, { ...todo, id: Date.now() }]);
	};

	const updateTodo = (updatedTodo: Todo) => {
		setTodos(
			todos.map((todo) =>
				todo.id === updatedTodo.id ? updatedTodo : todo
			)
		);
	};

	const deleteTodo = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return (
		<TodoContext.Provider
			value={{ todos, addTodo, updateTodo, deleteTodo }}
		>
			{children}
		</TodoContext.Provider>
	);
};

export default TodoContext;
