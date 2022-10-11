import { PopUpContainer, PopUpStyle } from "./styledPopUp"
import { useContext } from "react"
import { CardContext } from "../Context/CardContext"

const  PopUp = (props) =>{

 const {card} = props
const {imagePath} = useContext(CardContext)
 const {name, image, description} = card
 
 return <>
 <PopUpContainer>
    <PopUpStyle>
        <h2>{name}</h2>
       
        <div>
        <img src={`${imagePath}${image}`} alt={name} />
        <p>
              {description}
            </p>
            <button onClick={() => window.location.reload(true)}>
            voltar
        </button>
            
        </div>
    </PopUpStyle>
 </PopUpContainer>
 </>
}

export default PopUp
