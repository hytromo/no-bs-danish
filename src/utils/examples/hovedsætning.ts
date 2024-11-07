import type { SentencesType } from "../../components/Sentence/Sentences";
import { COLORS } from "../fixedColors";

export const genericExamples: SentencesType = [
	[
		{
			danish: "Jeg",
			explanation: "I",
			bottomExplanation: "Subject" as const,
			bottomColor: COLORS["Subject"],
		},
		{
			danish: "køber",
			explanation: "buy",
			bottomExplanation: "Verb" as const,
			bottomColor: COLORS["Verb"],
		},
		{
			danish: "blomster",
			explanation: "flowers",
			bottomExplanation: "Object" as const,
			bottomColor: COLORS["Object"],
		},
	],
	[
		{
			danish: "Hun",
			explanation: "She",
			bottomExplanation: "Subject" as const,
			bottomColor: COLORS["Subject"],
		},
		{
			danish: "læser",
			explanation: "reads",
			bottomExplanation: "Verb" as const,
			bottomColor: COLORS["Verb"],
		},
		{
			danish: "bogen",
			explanation: "the book",
			bottomExplanation: "Object" as const,
			bottomColor: COLORS["Object"],
		},
	],
	[
		{
			danish: "Spiller",
			explanation: "Plays",
			bottomExplanation: "Verb" as const,
			bottomColor: COLORS["Verb"],
		},
		{
			danish: "han",
			explanation: "he",
			bottomExplanation: "Subject" as const,
			bottomColor: COLORS["Subject"],
		},
		{
			danish: "fodbold?",
			explanation: "football?",
			bottomExplanation: "Object" as const,
			bottomColor: COLORS["Object"],
		},
	],
];

export const firstFormExamples: SentencesType = [
	[
		{
			danish: "Jeg",
			explanation: "I",
			bottomExplanation: "Subject" as const,
			bottomColor: COLORS["Subject"],
		},
		{
			danish: "køber",
			explanation: "buy",
			bottomExplanation: "Verb" as const,
			bottomColor: COLORS["Verb"],
		},
		{
			danish: "(altid)",
			explanation: "(always)",
			bottomExplanation: "Adverb" as const,
			bottomColor: COLORS["Adverb"],
		},
		{
			danish: "blomster",
			explanation: "flowers",
			bottomExplanation: "Object" as const,
			bottomColor: COLORS["Object"],
		},
	],
	[
		{
			danish: "Hun",
			explanation: "She",
			bottomExplanation: "Subject" as const,
			bottomColor: COLORS["Subject"],
		},
		{
			danish: "læser",
			explanation: "reads",
			bottomExplanation: "Verb" as const,
			bottomColor: COLORS["Verb"],
		},
		{
			danish: "(aldrig)",
			explanation: "(never)",
			bottomExplanation: "Adverb" as const,
			bottomColor: COLORS["Adverb"],
		},
		{
			danish: "bogen",
			explanation: "the book",
			bottomExplanation: "Object" as const,
			bottomColor: COLORS["Object"],
		},
	],
	[
		{
			danish: "Han",
			explanation: "He",
			bottomExplanation: "Subject" as const,
			bottomColor: COLORS["Subject"],
		},
		{
			danish: "spiller",
			explanation: "plays",
			bottomExplanation: "Verb" as const,
			bottomColor: COLORS["Verb"],
		},
		{
			danish: "fodbold",
			explanation: "football",
			bottomExplanation: "Object" as const,
			bottomColor: COLORS["Object"],
		},
		{
			danish: "med hans venner",
			explanation: "with his friends",
		},
	],
];

export const secondFormExamples: SentencesType = [
	[
		{
			danish: "Mangler",
			explanation: "Are (we) missing",
			bottomExplanation: "Verb" as const,
			bottomColor: COLORS["Verb"],
		},
		{
			danish: "vi",
			explanation: "we",
			bottomExplanation: "Subject" as const,
			bottomColor: COLORS["Subject"],
		},
		{
			danish: "æbler?",
			explanation: "apples?",
			bottomExplanation: "Object" as const,
			bottomColor: COLORS["Object"],
		},
	],
	[
		{
			danish: "Er",
			explanation: "Are",
			bottomExplanation: "Verb" as const,
			bottomColor: COLORS["Verb"],
		},
		{
			danish: "du",
			explanation: "you",
			bottomExplanation: "Subject" as const,
			bottomColor: COLORS["Subject"],
		},
		{
			danish: "(aldrig)",
			explanation: "(never)",
			bottomExplanation: "Adverb" as const,
			bottomColor: COLORS["Adverb"],
		},
		{
			danish: "træt?",
			explanation: "tired?",
		},
	],
	[
		{
			danish: "I går",
			explanation: "Yesterday",
		},
		{
			danish: "læste",
			explanation: "read",
			bottomExplanation: "Verb" as const,
			bottomColor: COLORS["Verb"],
		},
		{
			danish: "hun",
			explanation: "she",
			bottomExplanation: "Subject" as const,
			bottomColor: COLORS["Subject"],
		},
		{
			danish: "bogen",
			explanation: "the book",
			bottomExplanation: "Object" as const,
			bottomColor: COLORS["Object"],
		},
	],
	[
		{
			danish: "Heldigvis",
			explanation: "Fortunately",
		},
		{
			danish: "vundet",
			explanation: "won",
			bottomExplanation: "Verb" as const,
			bottomColor: COLORS["Verb"],
		},
		{
			danish: "han",
			explanation: "he",
			bottomExplanation: "Subject" as const,
			bottomColor: COLORS["Subject"],
		},
		{
			danish: "kampen",
			explanation: "the match",
			bottomExplanation: "Object" as const,
			bottomColor: COLORS["Object"],
		},
	],
];

export const secondFormExamplesStartWithSentence: SentencesType = [
	[
		{
			danish: "Da jeg var lille, ",
			explanation: "When I was little, ",
			bottomExplanation: "Subordinate clause",
			bottomColor: { class: "text-blue-400", hex: "#60A5FA" },
		},
		{
			danish: "legede jeg med dukker",
			explanation: "I played with dolls",
			bottomExplanation: "Main clause - can stand alone, has inversion",
			bottomColor: { class: "text-red-400", hex: "#F87171" },
		},
	],
];

export const notAloneExamples: SentencesType = [
	[
		{
			danish: "Jeg elsker is,",
			explanation: "I love ice cream,",
			bottomExplanation: "Main clause",
			bottomColor: { class: "text-red-400", hex: "#F87171" },
		},
		{
			danish: "fordi det er lækkert",
			explanation: "because it is delicious",
			bottomExplanation: "Subordinate clause",
			bottomColor: { class: "text-blue-400", hex: "#60A5FA" },
		},
	],
	[
		{
			danish: "Da jeg var lille, ",
			explanation: "When I was little, ",
			bottomExplanation: "Subordinate clause",
			bottomColor: { class: "text-blue-400", hex: "#60A5FA" },
		},
		{
			danish: "legede jeg med dukker",
			explanation: "I played with dolls",
			bottomExplanation: "Main clause",
			bottomColor: { class: "text-red-400", hex: "#F87171" },
		},
	],
];