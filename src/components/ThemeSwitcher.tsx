import { ComputerDesktopIcon, MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useState } from "react";

const getSystemTheme = () => {
	const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "forest" : "lemonade";
	return systemTheme;
}

function ThemeButton({ theme, isSelected, setCurrentTheme, children }: { theme: string, isSelected: boolean, setCurrentTheme: (theme: string) => void, children: React.ReactNode }) {
	return (
		<button
			onClick={() => {
				setCurrentTheme(theme);
			}}
			className={"btn btn-circle" + (isSelected ? " btn-active" : "")}>
			{children}
		</button>
	)
}


export default function ThemeSwitcher() {
	const [currentTheme, setCurrentTheme] = useState(() => window.localStorage.getItem("theme") || "");

	const setThemeWrap = (theme: string, themeToApply?: string) => {
		setCurrentTheme(theme);
		window.localStorage.setItem("theme", theme);
		document.documentElement.setAttribute("data-theme", themeToApply || theme);
	}

	return (
		// let's send this to the right:
		<div className="flex">
			<div className="inline-flex ml-auto space-x-2">
				<ThemeButton theme={"BOBOBOBO"} setCurrentTheme={() => {
					setThemeWrap("", getSystemTheme());
				}} isSelected={currentTheme === ""}>
					<ComputerDesktopIcon className="size-4" />
				</ThemeButton>

				<ThemeButton theme="forest" setCurrentTheme={setThemeWrap} isSelected={currentTheme === "forest"}>
					<MoonIcon className='size-4' />
				</ThemeButton>

				<ThemeButton theme="lemonade" setCurrentTheme={setThemeWrap} isSelected={currentTheme === "lemonade"}>
					<SunIcon className='size-4' />
				</ThemeButton>
			</div>
		</div>
	);
}
