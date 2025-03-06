import { useState } from "react";
import { Todo } from "../context";

export interface TodoItemProps {
	todo: Todo;
	deleteTodo: (id: number) => void;
	updateTodo: (updateTodo: Todo) => void;
}

export const TodoItem = ({ todo, deleteTodo, updateTodo }: TodoItemProps) => {
	const [isEditing, setIsEditing] = useState(false);
	const [newText, setNewText] = useState(todo.text);

	const handleSave = () => {
		updateTodo({ ...todo, text: newText });
		setIsEditing(false);
	};

	return (
		<li className="p-3 bg-white shadow-md flex justify-between items-center rounded-md">
			{isEditing ? (
				<input
					type="text"
					value={newText}
					onChange={(e) => setNewText(e.target.value)}
					className="border p-1 rounded"
				/>
			) : (
				<span>{todo.text}</span>
			)}
			<div>
				{isEditing ? (
					<button
						onClick={handleSave}
						className="text-green-500 mr-2 cursor-pointer"
					>
						Save
					</button>
				) : (
					<button
						onClick={() => setIsEditing(true)}
						className="text-blue-500 mr-2 cursor-pointer"
					>
						Edit
					</button>
				)}
				<button
					onClick={() => deleteTodo(todo.id)}
					className="text-red-500 cursor-pointer"
				>
					Delete
				</button>
			</div>
		</li>
	);
};
