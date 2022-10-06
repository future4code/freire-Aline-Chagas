import styled from "styled-components";


export const Container = styled.main`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  background-color: black;`

export const ContainerCards = styled.article`
  width: 200px;
  height: 400px;
  margin:5px;
  perspective: 600px;
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
        width: 162px;
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
  transition: transform 1s;
  transform-style: preserve-3d;
  :hover{
    transform: rotateY(180deg);
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