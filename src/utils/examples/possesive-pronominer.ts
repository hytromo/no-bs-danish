import type { SentencesType } from "../../components/Sentence/Sentences";
import { COLORS } from "../fixedColors";

export const genericExamples: SentencesType = [
  [
    {
      danish: "Vores",
      explanation: "Our",
      bottomColor: COLORS.Important,
      bottomExplanation: "possesive pronoun",
    },
    {
      danish: "hund er glad",
      explanation: "dog is happy",
    },
  ],
  [
    {
      danish: "Jeg kan lide",
      explanation: "I like",
    },
    {
      danish: "hendes",
      explanation: "her",
      bottomColor: COLORS.Important,
      bottomExplanation: "possesive pronoun",
    },
    {
      danish: "hår",
      explanation: "hair",
    },
  ],
  [
    {
      danish: "Morten og Henrik elsker at spiller med",
      explanation: "Morten and Henrik love to play with",
    },
    {
      danish: "deres",
      explanation: "their",
      bottomColor: COLORS.Important,
      bottomExplanation: "possesive pronoun",
    },
    {
      danish: "hunde",
      explanation: "dogs",
    },
  ],
];

export const tVsnWordsExamples: SentencesType = [
  [
    {
      danish: "Denne er",
      explanation: "This is",
    },
    {
      danish: "min/din",
      explanation: "my/your",
      bottomExplanation: "follows n-word",
      bottomColor: COLORS.NWord,
    },
    {
      danish: "stole",
      explanation: "chair",
    },
  ],
  [
    {
      danish: "Dette er",
      explanation: "This is",
    },
    {
      danish: "mit/dit",
      explanation: "my/your",
      bottomExplanation: "follows t-word",
      bottomColor: COLORS.TWord,
    },
    {
      danish: "bord",
      explanation: "table",
    },
  ],
];

export const pluralWordsExamples: SentencesType = [
  [
    {
      danish: "Denne er",
      explanation: "This is",
    },
    {
      danish: "mine/dine",
      explanation: "my/your",
      bottomExplanation: "follows plural",
      bottomColor: COLORS.NWord,
    },
    {
      danish: "borde",
      explanation: "tables",
    },
  ],
];

export const subjectExamples: SentencesType = [
  [
    {
      danish: "Alex kysser",
      explanation: "Alex kisses",
    },
    {
      danish: "sin",
      explanation: "his (own)",
      bottomExplanation: "follows n word",
      bottomColor: COLORS.NWord,
    },
    {
      danish: "kone",
      explanation: "wife",
    },
  ],
  [
    {
      danish: "Alex kysser",
      explanation: "Alex kisses",
    },
    {
      danish: "hans",
      explanation: "his (someone else's)",
      bottomColor: COLORS.Important,
      bottomExplanation: "never changes form",
    },
    {
      danish: "kone",
      explanation: "wife",
    },
  ],
  [
    {
      danish: "Alex kysser",
      explanation: "Alex kisses",
    },
    {
      danish: "sine",
      explanation: "his (own)",
      bottomExplanation: "follows plural",
      bottomColor: COLORS.Important,
    },
    {
      danish: "koner",
      explanation: "wives",
    },
  ],
  [
    {
      danish: "Alex kan lide",
      explanation: "Alex likes",
    },
    {
      danish: "sit",
      explanation: "his (own)",
      bottomExplanation: "follows t word",
      bottomColor: COLORS.TWord,
    },
    {
      danish: "bord",
      explanation: "table",
    },
  ],
];
