import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "./components/landing/Landing";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Landing />
			</>
		),
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
