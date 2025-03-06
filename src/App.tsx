import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRoute } from "./AppRoute";
import { Navigation } from "./components";
import { TodoProvider } from "./context";

function App() {
	return (
		<BrowserRouter>
			<TodoProvider>
				<div className="bg-gray-100 min-h-screen">
					<Navigation />
					<div className="container mx-auto p-4">
						<AppRoute />
					</div>
				</div>
			</TodoProvider>
		</BrowserRouter>
	);
}

export default App;
