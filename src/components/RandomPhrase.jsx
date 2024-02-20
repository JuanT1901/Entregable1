import ButtonPhrase from "./ButtonPhrase";
import "./RandomPhrase.css"


const RandomPhrase = ({ quote, setQuote, setCurrentBg }) => {

  const { author, phrase} = quote;

  return (
    <section className="quoteCard">
      
      <article className="quoteCard__container">
        <h1 className="quoteCard__title">Galletas de la fortuna</h1>
        
        <ButtonPhrase 
          setQuote={setQuote}
          setCurrentBg={setCurrentBg}
        />
        
        <p className="quoteCard__phrase">{phrase}</p>
      </article>

      <footer className="quoteCard__footer">
        Author: {author}
      </footer>
    </section>
  );
};

export default RandomPhrase;
