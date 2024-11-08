import { AppSidebar } from "@/components/sidebar-content";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

function App() {
	return (
		<>
			<SidebarProvider>
				<AppSidebar />
				<SidebarInset>
					<div className="w-full h-screen flex items-center justify-center">
						<h1 className="text-3xl">hello world!!</h1>
					</div>
				</SidebarInset>
			</SidebarProvider>
		</>
	);
}

export default App;
