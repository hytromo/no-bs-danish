import { useState } from "react";
import Card from "./Card";
import { isJSDocClassTag } from "typescript";

export default function Form() {
  const [words, setWords] = useState<Array<{ example?: string; translation?: string; image?: string; original: string; }>>([
  ]);
  const [currentWord, setCurrentWord] = useState('');
  const [populateLoading, setPopulateLoading] = useState(false);
  const [sendFlashCardLoading, setSendFlashCardLoading] = useState(false);

  const populate = async () => {
    setPopulateLoading(true);
    const response = await fetch('http://localhost:3000/words', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(words)
    });

    const fetchedWords = await response.json();
    console.log(fetchedWords)
    // const fetchedWords: Record<string, { example: string; translation: string; image: string; }> = {
    //   "skeen": {
    //     "example": "I morges, da jeg lavet havregryn, kunne jeg ikke finde skeen. - /ˈskḛːen/ ",
    //     "translation": "the spoon",
    //     "image": "https://imgs.duocards.com/flatsSvg/590847.svg"
    //   },
    //   "gaflen": {
    //     "example": "Jeg stak gaflen i en stor, saftig bøf ved aftensmaden. - /ˈkafln/ ",
    //     "translation": "the fork",
    //     "image": "https://imgs.duocards.com/flatsSvg/3648937.svg"
    //   },
    // }

    const processedWords = Object.keys(fetchedWords).map(key => {
      return {
        original: key,
        ...fetchedWords[key]
      }
    });

    setWords(processedWords);

    setPopulateLoading(false);
  }

  const sendToFlashCard = async () => {
    setSendFlashCardLoading(true);

    const response = await fetch('http://localhost:3000/import', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(words)
    });

    console.log(await response.json());

    setSendFlashCardLoading(false);
  }

  return (
    <div className="max-w-screen-xl flex flex-col mx-auto">
      <form onSubmit={(e) => {
        if (currentWord.length > 0) {
          setWords(currentWord.split(',').map(w => ({
            original: w.trim()
          })));
        }
        setCurrentWord('');
        e.preventDefault();
      }} className="flex justify-center items-center my-10">
        <input
          onChange={(e) => setCurrentWord(e.target.value)}
          value={currentWord}
          placeholder="Comma-separated words" type="text" className="border border-gray-300 rounded-md p-1 h-12 w-full" />
        <button disabled={currentWord.length == 0 ? true : false} type="submit" className="btn bg-blue-500 ml-2">Insert</button>
        <button onClick={populate} disabled={words.length <= 0 || !!words[0].example} className="btn bg-green-500 ml-2">
          {populateLoading && (
            <span className="loading loading-spinner"></span>
          )}
          Populate</button>
        <button onClick={sendToFlashCard} disabled={words.length <= 0 || !words[0].example} className="btn bg-red-500 ml-2">
          {sendFlashCardLoading && (
            <span className="loading loading-spinner"></span>
          )}
          Send to flashcard app</button>
      </form>
      <div className="grid grid-cols-4 gap-4">
        {words.map((w, i) => <Card key={i} {...w} />)}
      </div>
    </div>
  )
}
