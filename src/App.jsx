import { useState } from "react";
import "./App.css";
import phrases  from "./utils/phrases.json"
import { getRandomElement } from "./services/random";
import RandomPhrase from "./components/RandomPhrase";

const backgrounds = ["bg1", "bg2", "bg3", "bg4"];

function App() {

  const [quote, setQuote] = useState(getRandomElement(phrases));
  const [currentBg, setCurrentBg] = useState(getRandomElement(backgrounds));

  return (
    <main className={`app ${currentBg}`}>
      <RandomPhrase
        quote={quote}
        setQuote={setQuote}
        setCurrentBg={setCurrentBg}
      />
    </main>
  );
}

export default App;
