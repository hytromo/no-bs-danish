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
  ]
];

// let's describe the with each word individually, and then have the main clauses in a single object altogether, in order to focus
// on the structure of the subordinate clauses:
export const onlyFormExamples: SentencesType = [
  [
    {
      danish: "Da",
      explanation: "When",
    },
    {
      danish: "jeg",
      explanation: "I",
      bottomExplanation: "Subject",
      bottomColor: COLORS.Subject,
    },
    {
      danish: "spiste",
      explanation: "ate",
      bottomExplanation: "Verb",
      bottomColor: COLORS.Verb,
    },
    {
      danish: "æblet,",
      explanation: "the apple,",
      bottomExplanation: "Object",
      bottomColor: COLORS.Object,
    },
    {
      danish: "min mor ringede til mig.",
      explanation: "my mother called me.",
      bottomExplanation: "Main clause",
      bottomColor: COLORS.MainClause,
    },
  ],
  [
    {
      danish: "Selvom",
      explanation: "When",
    },
    {
      danish: "jeg",
      explanation: "I",
      bottomExplanation: "Subject",
      bottomColor: COLORS.Subject,
    },
    {
      danish: "spiste",
      explanation: "ate",
      bottomExplanation: "Verb",
      bottomColor: COLORS.Verb,
    },
    {
      danish: "æblet,",
      explanation: "the apple,",
      bottomExplanation: "Object",
      bottomColor: COLORS.Object,
    },
    {
      danish: "er jeg stadig sulten.",
      explanation: "I am still hungry.",
      bottomExplanation: "Main clause",
      bottomColor: COLORS.MainClause,
    },
  ],
  // let's repeat the above but also include an adverb in-between:
  [
    {
      danish: "Før",
      explanation: "Before",
    },
    {
      danish: "jeg",
      explanation: "I",
      bottomExplanation: "Subject",
      bottomColor: COLORS.Subject,
    },
    {
      danish: "altid",
      explanation: "always",
      bottomExplanation: "Adverb",
      bottomColor: COLORS.Adverb,
    },
    {
      danish: "var",
      explanation: "was",
      bottomExplanation: "Verb",
      bottomColor: COLORS.Verb,
    },
    {
      danish: "sulten,",
      explanation: "hungry,",
      bottomExplanation: "Adjective",
      bottomColor: COLORS.Adjective,
    },
    {
      danish: "men nu har jeg altid en snack med mig.",
      explanation: "but now I always have a snack with me.",
      bottomExplanation: "Main clause",
      bottomColor: COLORS.MainClause,
    },
  ],
];
