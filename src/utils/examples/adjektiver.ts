import type { SentencesType } from "../../components/Sentence/Sentences";
import { COLORS } from "../fixedColors";

export const pluralWordExamples: SentencesType = [
  [
    {
      danish: "store",
      explanation: "big",
      bottomExplanation: "plural form, case (1)",
      bottomColor: COLORS.Important,
    },
    {
      danish: "huse",
      explanation: "houses",
    },
  ],
  [
    {
      danish: "dit",
      explanation: "your",
      bottomExplanation: "makes the noun specific/bestemt",
    },
    {
      danish: "røde",
      explanation: "red",
      bottomExplanation: "specific form, case (2)",
      bottomColor: COLORS.Important,
    },
    {
      danish: "ur",
      explanation: "watch",
    },
  ],
  [
    {
      danish: "det",
      explanation: "the",
      bottomExplanation: "makes the noun specific/bestemt",
    },
    {
      danish: "store",
      explanation: "big",
      bottomExplanation: "specific form, case (2)",
      bottomColor: COLORS.Important,
    },
    {
      danish: "hus",
      explanation: "house",
    },
  ],
  [
    {
      danish: "Alexis",
      explanation: "Alex's",
      bottomExplanation: "makes the noun specific/bestemt",
    },
    {
      danish: "røde",
      explanation: "red",
      bottomExplanation: "specific form, case (2)",
      bottomColor: COLORS.Important,
    },
    {
      danish: "ur",
      explanation: "watch",
    },
  ],
];

export const nWordExamples: SentencesType = [
  [
    {
      danish: "en",
      explanation: "a",
    },
    {
      danish: "stor",
      explanation: "big",
      bottomExplanation: "n-word form",
      bottomColor: COLORS.NWord,
    },
    {
      danish: "bil",
      explanation: "car",
      bottomExplanation: "non-specific form" as const,
      bottomColor: COLORS.NonSpecificNoun,
    },
  ],
  [
    {
      danish: "bilen er",
      explanation: "the car is",
    },
    {
      danish: "rød",
      explanation: "red",
      bottomExplanation: "n-word form",
      bottomColor: COLORS.NWord,
    },
  ],
];

export const tWordExamples: SentencesType = [
  [
    {
      danish: "et",
      explanation: "a",
    },
    {
      danish: "stort",
      explanation: "big",
      bottomExplanation: "t-word form",
      bottomColor: COLORS.TWord,
    },
    {
      danish: "ur",
      explanation: "watch",
      bottomExplanation: "non-specific form" as const,
      bottomColor: COLORS.NonSpecificNoun,
    },
  ],
  [
    {
      danish: "dit ur er",
      explanation: "your watch is",
    },
    {
      danish: "rødt",
      explanation: "red",
      bottomExplanation: "t-word form",
      bottomColor: COLORS.TWord,
    },
  ],
];

export const degreesExamples: SentencesType = [
  [
    {
      danish: "Den",
      explanation: "The",
    },
    {
      danish: "størst",
      explanation: "biggest",
      bottomExplanation: "superlative form",
      bottomColor: COLORS.Important,
    },
    {
      danish: "vinder!",
      explanation: "wins!",
    },
  ],
  [
    {
      danish: "Den",
      explanation: "The",
    },
    {
      danish: "større",
      explanation: "bigger",
      bottomExplanation: "comperative form",
      bottomColor: COLORS.Important,
    },
    {
      danish: "pude gjorde ham mindre komfortabel",
      explanation: "pillow made him feel less comfortable",
    },
  ],
];
