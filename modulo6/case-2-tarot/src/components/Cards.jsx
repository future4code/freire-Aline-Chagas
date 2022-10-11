import { useState } from "react";
import { useContext } from "react"
import {CardContext} from"../Context/CardContext"
import PopUp from "./PopUp";
import { ContainerCards, Container, FlipCard, FaceCard, BackCard, TextStyle } from "./styledCard"

const Card = () => {
    const {card, backCard, imagePath} = useContext(CardContext)
    const [popUp, setPopUp] = useState({
      isActive:false,
      see:null
    })

    return(
      
        <Container>
            {card.map((card, index)=>{
                return(
                <ContainerCards key = {index}>

                   <FlipCard onClick={()=>{setPopUp({isActive:true, see:card})}} key={card.name}>

                    <FaceCard className="cardFaceFront">
                    <img
                    src={`${imagePath}${card?.image}`}
                    alt = {`${card?.name}`}
                    />
                    <TextStyle>{card?.name}</TextStyle>
                    </FaceCard>

                    <BackCard className="cardFaceBack">

                    <img src={`${backCard}`} alt={`${card.name}`} />
                  </BackCard>

                </FlipCard>

              </ContainerCards>

              
            );
          })}
          {popUp.isActive && <PopUp card={popUp.see} key= {card.name}/>}
        </Container>
      );
    };
    export default Card;
