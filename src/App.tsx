import { useDarkMode } from "./hooks/useDarkMode";
import { AppSidebar } from "@/components/sidebar-content";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";

function App() {
	const [isDark, setIsDark] = useDarkMode();

	return (
		<SidebarProvider defaultOpen={true}>
			<AppSidebar isDark={isDark} setIsDark={setIsDark} />
			<SidebarInset>
				<SidebarTrigger
					className="fixed top-4 left-4 z-50 md:hidden bg-background dark:bg-background hover:bg-accent rounded-lg p-2"
					aria-label="Toggle sidebar"
				/>
				<div className="w-full h-screen flex items-center justify-center">
					<h1 className="text-3xl">hello world!!</h1>
				</div>
				<div
					className="w-full h-screen flex items-center justify-center"
					id="2"
				>
					<h1 className="text-3xl">hello world2!!</h1>
				</div>
				<div
					className="w-full h-screen flex items-center justify-center"
					id="3"
				>
					<h1 className="text-3xl">hello world3!!</h1>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}

export default App;
