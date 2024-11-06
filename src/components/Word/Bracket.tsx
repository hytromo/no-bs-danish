const ORIGINAL_WIDTH = 575;
const ORIGINAL_HEIGHT = 46;
const RATIO = ORIGINAL_WIDTH / ORIGINAL_HEIGHT;
const HEIGHT = 10;
const NEW_WIDTH = HEIGHT * RATIO;

export default function Bracket({ color, width, rotate }: { color: string, width: number, rotate: boolean }) {
	return (
		<svg
			style={{
				transform: `scaleX(${width / NEW_WIDTH}) rotate(${rotate ? 180 : 0}deg)`,
			}}
			height={`${HEIGHT}px`} fill={color} version="1.1" viewBox="0 0 184 14.959" xmlns="http://www.w3.org/2000/svg">
			<path d="m92 9.9717c8.2256-3.3155 27.643-3.3153 44-3.3153 24.8 0 44.746 0.12844 44.746-5.3555 0-1.0976 3.2542-1.5044 3.2542-0.40678 0 7.4087-26.614 7.4087-48 7.4087-24.8 0-43.797 0.27835-43.797 5.7623 0 1.0976-0.40678 1.2332-0.40678 0.1356 0-5.484-18.997-5.8979-43.797-5.8979-21.386 0-48 0-48-7.4087 0-1.0976 3.2542-1.2332 3.2542-0.1356 0 5.484 19.946 5.8979 44.746 5.8979 16.357 0 35.774-2e-4 44 3.3153z" strokeWidth=".45365" />
		</svg>
	)
}