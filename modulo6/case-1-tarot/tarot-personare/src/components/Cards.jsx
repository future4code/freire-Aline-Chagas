import { useContext } from "react"
import {CardContext} from"../Context/CardContext"
import { ContainerCards, StyledImg, StyleDiv, TextStyle } from "./styledCard"

const Card = () => {
    const {card, backCard, imagePath} = useContext(CardContext)

    return(
        <StyleDiv>
            {card.map((card, index)=>{
                return(
                <ContainerCards key = {index}>
                    <StyledImg src = {`${imagePath}${card?.image}`}
                    alt = {`${card?.name}`}/>
                    <TextStyle>{card?.name}</TextStyle>
                </ContainerCards>)
            })}
        </StyleDiv>
    )
}

export default Card
