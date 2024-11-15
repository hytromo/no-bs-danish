import type { SentencesType } from "../../components/Sentence/Sentences";
import { COLORS } from "../fixedColors";

export const genericExamples: SentencesType = [
  [
    {
      danish: "Da jeg var lille, ...",
      explanation: "When I was little, ...",
      bottomExplanation: "Subordinate clause",
      bottomColor: COLORS.SubordinateClause,
    },
  ],
  [
    {
      danish: "Før jeg gik i skole, ...",
      explanation: "Before I walked to school, ...",
      bottomExplanation: "Subordinate clause",
      bottomColor: COLORS.SubordinateClause,
    },
  ],
  [
    {
      danish: "Selvom jeg er træt, ...",
      explanation: "Even though I am tired, ...",
      bottomExplanation: "Subordinate clause",
      bottomColor: COLORS.SubordinateClause,
    },
  ],
  [
    {
      danish: "..., at jeg altid har elsket dig.",
      explanation: "..., that I have always loved you.",
      bottomExplanation: "Subordinate clause",
      bottomColor: COLORS.SubordinateClause,
    },
  ],
];

// let's describe the ledsætninger with each word individually, and then have the main clauses in a single object altogether, in order to focus
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
      danish: "ringede min mor til mig.",
      explanation: "my mother called me.",
      bottomExplanation: "Main clause",
      bottomColor: COLORS.MainClause,
    },
  ],
  [
    {
      danish: "Selvom",
      explanation: "Although",
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
