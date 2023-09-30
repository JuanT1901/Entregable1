import { useState } from "react";
import "./App.css";
import famousPhrases from "./db/famousPhrases.json";
import { getRandomElement } from "./utils/random";
import QuoteCard from "./components/QuoteCard";

const backgrounds = ["bg1", "bg2", "bg3", "bg4"];

function App() {
  const [quote, setQuote] = useState(getRandomElement(famousPhrases));
  const [currentBg, setCurrentBg] = useState(getRandomElement(backgrounds));

  const handleChangeQuote = () => {
    setQuote(getRandomElement(famousPhrases));
    setCurrentBg(getRandomElement(backgrounds))
  }

  return (
    <main className={`app ${currentBg}`}>
      <QuoteCard
        quote={quote}
        handleChangeQuote={handleChangeQuote}
      />
    </main>
  );
}

export default App;
