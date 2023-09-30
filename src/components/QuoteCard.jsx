import "./QuoteCard.css"


const QuoteCard = ({ quote, handleChangeQuote }) => {

  return (
    <section className="quoteCard">
      
      <article className="quoteCard__container">
        <h1 className="quoteCard__title">Galletas de la fortuna</h1>
        
        <button className="quoteCard__btn" onClick={handleChangeQuote}>Probar mi suerte</button>

        <p className="quoteCard__phrase">{quote.phrase}</p>
      </article>

      <footer className="quoteCard__footer">
        Author: {quote.author}
      </footer>
    </section>
  );
};

export default QuoteCard;
