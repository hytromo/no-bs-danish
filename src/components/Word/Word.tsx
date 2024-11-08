import { useStore } from "@nanostores/react";
import { useRef } from "react";
import { $currentTheme, THEMES } from "../../utils/theme";
import Bracket from "./Bracket";
import WordCss from "./Word.module.css";

const COLOR = {
  dark: { class: "text-white", hex: "#fff" },
  white: { class: "text-black", hex: "#000" },
};

export default function Word({
  className,
  children,
  explanation,
  bottomExplanation,
  bottomColor,
}: {
  children: string;
  explanation: string;
  bottomExplanation?: string;
  bottomColor?: { class: string; hex: string };
  className?: string;
}) {
  const theme = useStore($currentTheme);
  const explanationDiv = useRef<HTMLDivElement>(null);
  const childrenDiv = useRef<HTMLDivElement>(null);
  const bottomExplanationDiv = useRef<HTMLDivElement>(null);

  const colorChoice = (theme === THEMES.dark) ? COLOR.dark : COLOR.white;

  return (
    <div
      style={{ width: "max-content" }}
      className={`flex flex-col items-center ${className ? className : ""}`}
    >
      <div className={colorChoice.class} ref={explanationDiv}>
        {explanation}
      </div>
      <Bracket rotate={false} color={colorChoice.hex} />

      <div
        className={`${WordCss.Word} ${colorChoice.class} font-bold text-xl`}
        ref={childrenDiv}
      >
        {children}
      </div>

      {bottomExplanation && (
        <>
          <Bracket rotate color={bottomColor?.hex || colorChoice.hex} />
          <div
            className={bottomColor?.class || colorChoice.class}
            ref={bottomExplanationDiv}
          >
            {bottomExplanation}
          </div>
        </>
      )}
    </div>
  );
}
