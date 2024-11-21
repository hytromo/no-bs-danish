import type { SentencesType } from "../../components/Sentence/Sentences";
import { COLORS } from "../fixedColors";

export const infinitivExamples: SentencesType = [
  [
    {
      danish: "At tale",
      explanation: "To speak",
      bottomColor: COLORS.Important,
      bottomExplanation: 'infinitiv / after "at"',
    },
    {
      danish: "højt er uhøfligt.",
      explanation: "loudly is rude.",
    },
  ],
  [
    {
      danish: "At spise",
      explanation: "To eat",
      bottomColor: COLORS.Important,
      bottomExplanation: 'infinitiv / after "at"',
    },
    {
      danish: "er en fornøjelse.",
      explanation: "is a pleasure.",
    },
  ],
  [
    {
      danish: "Jeg",
      explanation: "I",
    },
    {
      danish: "vil",
      explanation: "want to",
      bottomColor: COLORS.Important,
      bottomExplanation: "modal verb",
    },
    {
      danish: "spille",
      explanation: "play",
      bottomColor: COLORS.Important,
      bottomExplanation: "infinitiv / after modal verb",
    },
    {
      danish: "guitar.",
      explanation: "guitar.",
    },
  ],
];

export const nutidExamples: SentencesType = [
  [
    {
      danish: "Jeg",
      explanation: "I",
    },
    {
      danish: "taler",
      explanation: "speak",
      bottomColor: COLORS.Important,
      bottomExplanation: "nutid / true in general",
    },
    {
      danish: "dansk.",
      explanation: "Danish.",
    },
  ],
  [
    {
      danish: "Han",
      explanation: "He",
    },
    {
      danish: "spiser",
      explanation: "eats",
      bottomColor: COLORS.Important,
      bottomExplanation: "nutid / happening right now",
    },
    {
      danish: "mad.",
      explanation: "food.",
    },
  ],
  [
    {
      danish: "Vi",
      explanation: "We",
    },
    {
      danish: "læser",
      explanation: "read",
      bottomColor: COLORS.Important,
      bottomExplanation: "nutid / happening regularly",
    },
    {
      danish: "bøger.",
      explanation: "books.",
    },
  ],
  [
    {
      danish: "Jeg",
      explanation: "I",
    },
    {
      danish: "laver",
      explanation: "make (cook)",
      bottomColor: COLORS.Important,
      bottomExplanation: "nutid / happening in the future",
    },
    {
      danish: "mad i morgen.",
      explanation: "food tomorrow.",
    },
  ],
];

export const datidExamples: SentencesType = [
  [
    {
      danish: "Jeg",
      explanation: "I",
    },
    {
      danish: "talte",
      explanation: "spoke",
      bottomColor: COLORS.Important,
      bottomExplanation: "datid / past",
    },
    {
      danish: "dansk.",
      explanation: "Danish.",
    },
  ],
];

export const fornutidExamples: SentencesType = [
  [
    {
      danish: "Jeg",
      explanation: "I",
    },
    {
      danish: "har spist",
      explanation: "have eaten",
      bottomColor: COLORS.Important,
      bottomExplanation:
        "førnutid / have already eaten (I don't need to eat now)",
    },
    {
      danish: "mad.",
      explanation: "food.",
    },
  ],
];

export const fordatidExamples: SentencesType = [
  [
    {
      danish: "Jeg",
      explanation: "I",
    },
    {
      danish: "havde spist",
      explanation: "had eaten",
      bottomColor: COLORS.Important,
      bottomExplanation:
        "førdatid / had already eaten (before something else happened)",
    },
    {
      danish: "mad, før jeg gik i seng i går.",
      explanation: "food, before I went to bed yesterday.",
    },
  ],
];

export const imperativExamples: SentencesType = [
  [
    {
      danish: "Spis",
      explanation: "Eat",
      bottomColor: COLORS.Important,
      bottomExplanation: "imperativ / command",
    },
    {
      danish: "din mad.",
      explanation: "your food.",
    },
  ],
];
