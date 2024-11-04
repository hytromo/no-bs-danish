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


			{/* <ComputerDesktopIcon />
			{theme} */}
			{/* <svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
			</svg> */}
		</button>
	)
}


export default function ThemeSwitcher() {
	const [currentTheme, setCurrentTheme] = useState(() => window.localStorage.getItem("theme") || "");

	const setThemeWrap = (theme: string, dataTheme?: string) => {
		setCurrentTheme(theme);
		window.localStorage.setItem("theme", theme);
		document.documentElement.setAttribute("data-theme", dataTheme || theme);
	}

	return (
		// let's make this a flex component with a max width of 100px
		<div className="flex max-w-[100px] space-x-2">
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
			{/* <button className={"btn" + currentTheme === "forest" ? " btn-active" : ""} data-set-theme="" data-act-class="btn-active">""</button>
			<button className={"btn" + currentTheme === "forest" ? " btn-active" : ""} data-set-theme="forest" data-act-class="btn-active">forest</button>
			<button className={"btn" + currentTheme === "lemonade" ? " btn-active" : ""} data-set-theme="lemonade" data-act-class="btn-active">lemonade</button> */}
		</div>
	);
}
