const ORIGINAL_WIDTH = 575;
const ORIGINAL_HEIGHT = 46;
const RATIO = ORIGINAL_WIDTH / ORIGINAL_HEIGHT;
const HEIGHT = 10;
const NEW_WIDTH = HEIGHT * RATIO;

export default function Bracket({ color, width, rotate }: { color: string, width: number, rotate: boolean }) {
	return (
		<div style={{ color, fontSize: '15px', lineHeight: '4px', transform: rotate ? 'rotate(180deg)' : undefined }}>
			{"^"}
		</div>
	)
}