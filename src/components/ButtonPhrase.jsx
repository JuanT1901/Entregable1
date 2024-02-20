import phrases from '../utils/phrases.json'
import { getRandomElement } from '../services/random'

const ButtonPhrase = ({ setQuote }) => {

  const handleChangeQuote = () => {
    const sentence = getRandomElement(phrases)
    setQuote(sentence)
  }

  return (
    <button className="quoteCard__btn" onClick={handleChangeQuote}>Probar mi suerte</button>
  )
}
export default ButtonPhrase