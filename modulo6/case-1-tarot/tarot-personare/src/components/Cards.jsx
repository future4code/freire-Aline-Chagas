import { useContext } from "react"
import {CardContext} from"../Context/CardContext"
import { StyleDiv } from "./styledCard"

const Card = () => {
    const {card, backCard, imagePath} = useContext(CardContext)

    return(
        <StyleDiv>
            {card.map((card, index)=>{
                <ContainerCards key = {index}>
                    <StyledImg src = {`${imagePath}${card?.image}`}
                    alt = {`${cars?.name}`}/>
                    <TextStyle>{card?.name}</TextStyle>
                </ContainerCards>
            })}
        </StyleDiv>
    )
}

export default Card
