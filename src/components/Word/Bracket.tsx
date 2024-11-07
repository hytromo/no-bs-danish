export default function Bracket({ color, rotate }: { color: string, rotate: boolean }) {
	return (
		<div style={{ color, fontSize: '15px', lineHeight: '4px', transform: rotate ? 'rotate(180deg)' : undefined }}>
			{"^"}
		</div>
	)
}