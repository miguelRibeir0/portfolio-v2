import { useEffect, useState } from "react";

export function useDarkMode() {
	const [isDark, setIsDark] = useState(() => {
		const stored = localStorage.getItem("isDark");
		return stored ? JSON.parse(stored) : true;
	});

	// Handling system preferences and localStorage
	useEffect(() => {
		const media = window.matchMedia("(prefers-color-scheme: dark)");

		// If we are at Stage 0 use system preferences
		if (!localStorage.getItem("isDark")) {
			setIsDark(media.matches);
		}

		const handler = (e: MediaQueryListEvent) => {
			setIsDark(e.matches);
		};

		media.addEventListener("change", handler);
		document.documentElement.classList.toggle("dark", isDark);
		localStorage.setItem("isDark", JSON.stringify(isDark));

		return () => media.removeEventListener("change", handler);
	}, [isDark]);

	return [isDark, setIsDark] as const;
}
