export default function Header({ text, tooltip }: {
	text: string
	tooltip: string
}) {
	return (
		<section className="p-10 text-center cursor-default mt-40">
			<div className="tooltip" data-tip={tooltip}>
				<h1 className="text-5xl font-bold">{text}</h1>
			</div>
		</section>
	)
}