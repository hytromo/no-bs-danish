import type { SentencesType } from "../../components/Sentence/Sentences";
import { COLORS } from "../fixedColors";

export const sameTypeExamples: SentencesType = [
  [
    {
      danish: "Han spiser mad,",
      explanation: "He eats food,",
      bottomExplanation: "main clause / hovedsætning",
    },
    {
      danish: "og",
      explanation: "and",
      bottomExplanation: "conjunction",
      bottomColor: COLORS.Important,
    },
    {
      danish: "hans søster spiller brætspil",
      explanation: "his sister plays board games",
      bottomExplanation: "main clause / hovedsætning",
    },
  ],
  [
    {
      danish: "Han laver mad,",
      explanation: "He cooks,",
      bottomExplanation: "main clause / hovedsætning",
    },
    {
      danish: "for",
      explanation: "because",
      bottomExplanation: "conjunction",
      bottomColor: COLORS.Important,
    },
    {
      danish: "han er meget sulten",
      explanation: "he is very hungry",
      bottomExplanation: "main clause / hovedsætning",
    },
  ],
  [
    {
      danish: "Han overvejer,",
      explanation: "He considers,",
      bottomExplanation: "main clause / hovedsætning",
    },
    {
      danish: "at tage på ferie,",
      explanation: "to go on vacation,",
      bottomExplanation: "ledsætning / subordinate clause",
    },
    {
      danish: "eller",
      explanation: "or",
      bottomExplanation: "conjunction",
      bottomColor: COLORS.Important,
    },
    {
      danish: "at blive hjemme",
      explanation: "to stay at home",
      bottomExplanation: "ledsætning / subordinate clause",
    },
  ],
];

export const subordinateExamples: SentencesType = [
  [
    {
      danish: "Han spiser mad 5 gange om dagen,",
      explanation: "He eats food 5 times a day,",
      bottomExplanation: "main clause / hovedsætning",
    },
    {
      danish: "fordi",
      explanation: "because",
      bottomExplanation: "conjunction",
      bottomColor: COLORS.Important,
    },
    {
      danish: "han altid er sulten",
      explanation: "he is always hungry",
      bottomExplanation: "subordinate clause / ledsætning",
    },
  ],
  [
    {
      danish: "Hun drikker kaffe,",
      explanation: "She drinks coffee,",
      bottomExplanation: "main clause / hovedsætning",
    },
    {
      danish: "når",
      explanation: "when",
      bottomExplanation: "conjunction",
      bottomColor: COLORS.Important,
    },
    {
      danish: "hun er træt",
      explanation: "she is tired",
      bottomExplanation: "subordinate clause / ledsætning",
    },
  ],
];
