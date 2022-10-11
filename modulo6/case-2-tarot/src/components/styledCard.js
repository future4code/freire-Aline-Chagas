import styled from "styled-components";


export const Container = styled.main`
 align-items: center;
 padding: 45px;
 margin: 45px;
    justify-content: center;
    width: 86%;
    display: grid;
    grid-template-columns: repeat(40, 30px);
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 20px;
    padding-left: 250px;
    @media (max-width: 500px) {
        overflow-x: scroll;
        margin: 0 auto;
        display: flex;
        column-gap: 10px;
        padding: 0 15px 0 15px;
    }
`
export const Header = styled.div`
width: 50px;
background-color: rebeccapurple;
`

export const ContainerCards = styled.article`
  width: 100px;
  height: 205px;
  margin-inline:-70px;
  .is-flipped {
  // transform: rotateY(180deg)
  }

  .cardFaceFront {
   background-color:black; 
   background-size: 400px 200px;
   transform: rotateY( 180deg ); 
    flex-direction: column;
    border-radius: 13px;
    text-align: center;
    img {
        width: 70%;
        padding-top: 20px;
    }
  }
  .cardFaceBack{
    img {
      width: 100%;
      height: 100%;
    }
  }`


export const FlipCard = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  flex-wrap: wrap;
  transition: transform 1s;
  transform-style: preserve-3d;
  :hover{
     cursor:pointer;
    transition: all 0.1s ease-in-out;
    z-index: 1;
    transform: translateY(-20px) rotateZ(-5deg); 
  
  }`

export const FaceCard = styled.section`
position: absolute;
height: 100%;
width: 100%;
/* backface-visibility:hidden; */`

export const BackCard = styled.section`
position: absolute;
height: 100%;
width: 100%;
backface-visibility: hidden;`


export const StyledImg = styled.img`
padding-top: 20px;
justify-content: center;`

export const TextStyle = styled.h4`
  margin: 0;
  text-align: center;
  font-style: italic;
  color: solid black;
`