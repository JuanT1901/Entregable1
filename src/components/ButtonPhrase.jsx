import phrases from '../utils/phrases.json'
import { getRandomElement } from '../services/random'

const ButtonPhrase = ({ setQuote, setCurrentBg }) => {

  const backgrounds = ["bg1", "bg2", "bg3", "bg4"];

  const handleChangeQuote = () => {
    const sentence = getRandomElement(phrases)
    const bg = getRandomElement(backgrounds)
    setQuote(sentence)
    setCurrentBg(bg)
  }

  return (
    <button className="quoteCard__btn" onClick={handleChangeQuote}>Probar mi suerte</button>
  )
}
export default ButtonPhrase