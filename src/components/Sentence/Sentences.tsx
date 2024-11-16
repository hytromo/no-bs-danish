import Word from "../Word/Word";
import { Fragment } from "react";

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
    <div className="flex flex-col items-center overflow-x-auto bg-info-content rounded-lg py-10 gap-y-10">
      {sentences.map((example, index1) => (
        <Fragment key={index1}>
          <div className="inline-flex gap-x-5 p-5 max-w-full px-8">
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
          {/* {index1 !== sentences.length - 1 && <div className="divider" />} */}
          {/* let's make the divider have the full width of this horizontally scrollable container: */}
          {index1 !== sentences.length - 1 && (
            <div
              style={{
                flexBasis: "100%",
                flexShrink: "0",
              }}
              className="divider"
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}
