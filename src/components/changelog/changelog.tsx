import { useDarkMode } from "../../hooks/useDarkMode";
import { AppSidebar } from "@/components/sidebar-content";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";

export function ChangeLog() {
	const [isDark, setIsDark] = useDarkMode();

	return (
		<SidebarProvider defaultOpen={true}>
			<AppSidebar isDark={isDark} setIsDark={setIsDark} />
			<SidebarInset>
				<SidebarTrigger
					className="fixed top-4 left-4 z-50 md:hidden bg-background dark:bg-background hover:bg-accent rounded-lg p-2"
					aria-label="Toggle sidebar"
				/>
				<section className="transition-all duration-300 ease-in-out mt-20 w-[80%] mx-auto lg:w-full">
					<div className="flex flex-col items-center justify-center lg:mt-10 text-center">
						<h2 className="text-2xl font-bold lg:text-3xl">Changelog</h2>
						<ol className="mt-36 text-lg">
							<li>
								<strong>2.0.1</strong>
								<span className="italic opacity-80"> (13/12/2024)</span> - Added
								CV and Changelog to the sidebar.
							</li>
						</ol>
						<div className="mt-36 text-lg">
							<h3 className="font-bold text-xl">Planned Changes</h3>
							<ul className="mt-5">
								<li>• Rewrite the entire website in either NextJS or Astro.</li>
							</ul>
						</div>
					</div>
				</section>
			</SidebarInset>
		</SidebarProvider>
	);
}
