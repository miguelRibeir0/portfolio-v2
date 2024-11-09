import { useEffect, useState } from "react";

export function useDarkMode() {
	const [isDark, setIsDark] = useState(() => {
		// Checking system preferences first
		if (typeof window !== "undefined") {
			const stored = localStorage.getItem("isDark");
			if (stored !== null) return JSON.parse(stored);
			return window.matchMedia("(prefers-color-scheme: dark)").matches;
		}
		return false;
	});

	useEffect(() => {
		document.documentElement.classList.toggle("dark", isDark);
		localStorage.setItem("isDark", JSON.stringify(isDark));
	}, [isDark]);

	return [isDark, setIsDark] as const;
}
