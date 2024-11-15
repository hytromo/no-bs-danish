import type { SentencesType } from "../../components/Sentence/Sentences";
import { COLORS } from "../fixedColors";

export const genericExamples: SentencesType = [
  [
    {
      danish: "Jeg",
      explanation: "I",
      bottomExplanation: "Subject",
      bottomColor: COLORS.Subject,
    },
    {
      danish: "kan lide",
      explanation: "like",
    },
    {
      danish: "ham",
      explanation: "him",
      bottomExplanation: "Object",
      bottomColor: COLORS.Object,
    },
  ],
  [
    {
      danish: "Hun",
      explanation: "She",
      bottomExplanation: "Subject",
      bottomColor: COLORS.Subject,
    },
    {
      danish: "spiste sammen med",
      explanation: "ate with",
    },
    {
      danish: "jer",
      explanation: "you (plural)",
      bottomExplanation: "Object",
      bottomColor: COLORS.Object,
    },
  ],
  [
    {
      danish: "Jeg",
      explanation: "I",
      bottomExplanation: "Subject",
      bottomColor: COLORS.Subject,
    },
    {
      danish: "læser denne bog.",
      explanation: "read this book.",
    },
    {
      danish: "Nå! Jeg har også læst",
      explanation: "Oh! I have also read",
    },
    {
      danish: "den",
      explanation: "it (n word)",
      bottomExplanation: "Object",
      bottomColor: COLORS.Object,
    },
  ],
  [
    {
      danish: "Jeg",
      explanation: "I",
      bottomExplanation: "Subject",
      bottomColor: COLORS.Subject,
    },
    {
      danish: "byggede et bord.",
      explanation: "built a table.",
    },
    {
      danish: "Hvor er",
      explanation: "Where is",
    },
    {
      danish: "det?",
      explanation: "it? (t word)",
      bottomExplanation: "Object",
      bottomColor: COLORS.Object,
    },
  ],
];
