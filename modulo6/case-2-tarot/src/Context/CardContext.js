import { useState, useEffect, createContext } from "react";
import imageBackCard from "../assets/backtarot.png"
import axios from "axios";

export const CardContext = createContext();

const CardProvider = ({children}) => {
  const [card, setCard] = useState([]);
  const [path, setPath] = useState([]);
  const [flip, setFlip] = useState(true);

  useEffect(() => {
    getCard();
    getPaths();
  }, []);
  // 

  const shuffleCard = (cards) => {

   let shuffled = cards
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

    return shuffled
  }

  const getCard = async () => {
    const res = await axios.get("/tarot.json");

    const sortedCard =  shuffleCard(res.data.cards)
    setCard(sortedCard);
  };

  const getPaths = async () => {
    const res = await axios.get("/tarot.json");
    setPath(res.data);
  };

  const handleFlip = async () => {
    setFlip(!flip);
  };

  const imagePath = path.imagesUrl;
  const backCard = imageBackCard;
  return (
    <CardContext.Provider
      value={{ card, path, imagePath, backCard, flip, handleFlip }}
    >
      {children}
    </CardContext.Provider>
  );
};
export default CardProvider;
