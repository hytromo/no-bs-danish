import Word from "../Word/Word";

export type SentencesType = Array<Array<{
	danish: string;
	explanation: string;
	bottomExplanation?: string;
	bottomColor?: { class: string, hex: string }
}>>;

export default function Sentences({ sentences, wordClassName }: {
	sentences: SentencesType, wordClassName?: string
}) {
	return (
		<div className="flex flex-col items-center">
			{
				sentences.map((example) => (
					<div className="mb-10 inline-flex justify-center gap-x-10">
						{example.map((word) => (
							<Word
								className={wordClassName}
								explanation={word.explanation}
								bottomExplanation={word.bottomExplanation}
								bottomColor={word.bottomColor}
							>
								{word.danish}
							</Word>
						))}
					</div>
				))
			}
		</div>
	)
}