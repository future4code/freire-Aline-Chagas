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
  const getCard = async () => {
    const res = await axios.get("/tarot.json");
    setCard(res.data.cards);
  };
  const getPaths = async () => {
    const res = await axios.get("/tarot.json");
    setPath(res.data);
  };
  const handleFlip = async () => {
    setFlip(!flip);
  };
  // const shuffleCards = async () >{
    

  // }
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
