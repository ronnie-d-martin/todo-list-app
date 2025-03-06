import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
	const location = useLocation();

	return (
		<nav className="bg-blue-500 p-4 text-white shadow-md">
			<ul className="flex space-x-4">
				<li>
					<Link
						to="/"
						className={
							location.pathname === "/"
								? "underline font-bold"
								: "hover:underline"
						}
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						to="/todos"
						className={
							location.pathname === "/todos"
								? "underline font-bold"
								: "hover:underline"
						}
					>
						Todos
					</Link>
				</li>
				<li>
					<Link
						to="/add"
						className={
							location.pathname === "/add"
								? "underline font-bold"
								: "hover:underline"
						}
					>
						Add Todo
					</Link>
				</li>
			</ul>
		</nav>
	);
};
