import { Route, Routes } from "react-router-dom";
import { AddTodo, Home, Todos } from "./pages";

export const AppRoute = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/todos" element={<Todos />} />
			<Route path="/add" element={<AddTodo />} />
		</Routes>
	);
};
