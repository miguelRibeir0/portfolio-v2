import { Hero } from "./hero";
import { AboutMe } from "./about-me";
import { Tools } from "./tools";
import { Goals } from "./goals";
import { useDarkMode } from "../../hooks/useDarkMode";
import { AppSidebar } from "@/components/sidebar-content";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";

export function Landing() {
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
					<Hero />
					<AboutMe />
					<Tools />
					<Goals />
				</section>
			</SidebarInset>
		</SidebarProvider>
	);
}
