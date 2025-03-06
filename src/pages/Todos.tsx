import { TodoItem } from "../components";
import { useTodosContext } from "../hooks";

export const Todos = () => {
	const { todos, deleteTodo, updateTodo } = useTodosContext();

	return (
		<div className="max-w-lg mx-auto mt-5">
			<h1 className="text-xl font-bold mb-4">Todos</h1>
			<ul className="space-y-2">
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						deleteTodo={deleteTodo}
						updateTodo={updateTodo}
					/>
				))}
			</ul>
		</div>
	);
};
