import { AppSidebar } from "@/components/sidebar-content";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { useDarkMode } from "../../hooks/useDarkMode";
import { ProjectsGrid } from "./projects-grid";

export function Projects() {
	const [isDark, setIsDark] = useDarkMode();

	return (
		<SidebarProvider defaultOpen={true}>
			<AppSidebar isDark={isDark} setIsDark={setIsDark} />
			<SidebarInset>
				<SidebarTrigger
					className="fixed top-4 left-4 z-50 md:hidden bg-background dark:bg-background hover:bg-accent rounded-lg p-2"
					aria-label="Toggle sidebar"
				/>
				<section className="transition-all duration-300 ease-in-out">
					<ProjectsGrid />
				</section>
			</SidebarInset>
		</SidebarProvider>
	);
}
