import Word from "../Word/Word";

export type SentencesType = Array<
  Array<{
    danish: string;
    explanation: string;
    bottomExplanation?: string;
    bottomColor?: { class: string; hex: string };
  }>
>;

export default function Sentences({
  sentences,
  wordClassName,
}: {
  sentences: SentencesType;
  wordClassName?: string;
}) {
  return (
    <div className="flex flex-col overflow-x-auto bg-info-content lg:items-center rounded-lg py-10 gap-y-10">
      {sentences.map((example, index1) => (
        <div
          style={{ width: "max-content" }}
          key={index1}>
          <div
            style={{ width: "max-content" }}
            className="inline-flex gap-x-5 p-5 px-8"
          >
            {example.map((word, index2) => (
              <Word
                key={`${index1}-${index2}`}
                className={wordClassName}
                explanation={word.explanation}
                bottomExplanation={word.bottomExplanation}
                bottomColor={word.bottomColor}
              >
                {word.danish}
              </Word>
            ))}
          </div>
          {index1 !== sentences.length - 1 && (
            <div className="divider w-full" />
          )}
        </div>
      ))}
    </div>
  );
}
