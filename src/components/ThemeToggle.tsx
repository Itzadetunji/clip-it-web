import { Moon, Sun } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Button } from "#/components/ui/button";

type ThemeMode = "light" | "dark";

function getInitialMode(): ThemeMode {
	if (typeof window === "undefined") {
		return "light";
	}

	const stored = window.localStorage.getItem("theme");
	if (stored === "light" || stored === "dark") {
		return stored;
	}

	return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyThemeMode(mode: ThemeMode) {
	document.documentElement.classList.remove("light", "dark");
	document.documentElement.classList.add(mode);
	document.documentElement.setAttribute("data-theme", mode);
	document.documentElement.style.colorScheme = mode;
}

export default function ThemeToggle() {
	const [mode, setMode] = useState<ThemeMode>("light");

	useEffect(() => {
		const initialMode = getInitialMode();
		setMode(initialMode);
		applyThemeMode(initialMode);
	}, []);

	function toggleMode() {
		const nextMode: ThemeMode = mode === "light" ? "dark" : "light";
		setMode(nextMode);
		applyThemeMode(nextMode);
		window.localStorage.setItem("theme", nextMode);
	}

	const label = mode === "dark" ? "Switch to light mode" : "Switch to dark mode";

	return (
		<Button
			type="button"
			variant="outline"
			size="icon"
			onClick={toggleMode}
			aria-label={label}
			title={label}
		>
			{mode === "dark" ? <Sun weight="regular" /> : <Moon weight="regular" />}
		</Button>
	);
}
