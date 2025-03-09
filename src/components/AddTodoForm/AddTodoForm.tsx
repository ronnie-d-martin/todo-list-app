import { useState } from "react";

export interface IAddTodoForm {
	onSubmit: (text: string) => void;
}

export const AddTodoForm = ({ onSubmit }: IAddTodoForm) => {
	const [text, setText] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(text);
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-3">
			<input
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
				className="w-full p-2 border rounded"
				placeholder="Enter todo"
			/>
			<button
				type="submit"
				className="bg-blue-500 text-white p-2 rounded"
			>
				Add
			</button>
		</form>
	);
};
