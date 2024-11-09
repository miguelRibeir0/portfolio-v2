import { useEffect, useState, useCallback } from "react";
import { AppSidebar } from "@/components/sidebar-content";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

function App() {
	const [isDark, setIsDark] = useState(() => {
		const stored = localStorage.getItem("isDark");
		return stored ? JSON.parse(stored) : false;
	});

	useEffect(() => {
		const stored = localStorage.getItem("isDark");
		if (stored && JSON.parse(stored) !== isDark) {
			setIsDark(JSON.parse(stored));
		}
	}, [isDark]);

	// The callback is a fix for a weird re-render
	const handleInput = useCallback(() => {
		setIsDark((prevIsDark: boolean) => {
			const newIsDark = !prevIsDark;
			localStorage.setItem("isDark", JSON.stringify(newIsDark));
			return newIsDark;
		});
	}, []);

	return (
		<>
			<div className={`${isDark ? "dark" : ""} transition-colors duration-300`}>
				<SidebarProvider>
					<AppSidebar isDark={isDark} setIsDark={handleInput} />
					<SidebarInset>
						<div className="w-full h-screen flex items-center justify-center">
							<h1 className="text-3xl">hello world!!</h1>
						</div>
					</SidebarInset>
				</SidebarProvider>
			</div>
		</>
	);
}

export default App;
