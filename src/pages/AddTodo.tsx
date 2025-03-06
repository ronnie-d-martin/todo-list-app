import { useNavigate } from "react-router-dom";
import { AddTodoForm } from "../components";
import { useTodosContext } from "../hooks";

export const AddTodo = () => {
	const { addTodo } = useTodosContext();
	const navigate = useNavigate();

	const onAddTodoFormSubmit = (text: string) => {
		addTodo({ id: Date.now(), text });
		navigate("/todos");
	};

	return (
		<div className="max-w-lg mx-auto mt-5">
			<h1 className="text-xl font-bold mb-4">Add Todo</h1>
			<AddTodoForm onSubmit={onAddTodoFormSubmit}></AddTodoForm>
		</div>
	);
};
