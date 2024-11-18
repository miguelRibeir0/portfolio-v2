import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Landing } from "./components/landing/landing";
import { Projects } from "./components/projects/projects";
import { ContactMe } from "./components/contact-me/contact-me";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Number.POSITIVE_INFINITY,
		},
	},
});

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Landing />
			</>
		),
	},
	{
		path: "/projects",
		element: (
			<>
				<Projects />
			</>
		),
	},
	{
		path: "/contact-me",
		element: (
			<>
				<ContactMe />
			</>
		),
	},
]);
function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

export default App;
