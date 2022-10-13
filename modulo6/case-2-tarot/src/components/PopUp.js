import { PopUpContainer, PopUpStyle } from "./styledPopUp"
import { useContext } from "react"
import { CardContext } from "../Context/CardContext"
import voltar from "../assets/VOLTAR.png"

const  PopUp = (props) =>{

 const {card} = props
const {imagePath} = useContext(CardContext)
 const {name, image, description} = card
 
 return <>
 <PopUpContainer>
    <PopUpStyle>
        <h2>{name}</h2>
       
        <div className="modal">
        <img src={`${imagePath}${image}`} alt={name} />
        <p>
              {description}
            </p>
            
        </div>
            <button onClick={() => window.location.reload(true)}>
            <img src={voltar}/>
        </button>
    </PopUpStyle>
 </PopUpContainer>
 </>
}

export default PopUp
