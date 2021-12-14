import React from "react"
import styled from "styled-components"

const FlipCard = ({ width, height, duration, front, back, onClick}) => {
  const handleClick = () => {
    if(typeof onClick === "function"){
      onClick()
    }
  }

  return(
    <Card 
      width={width}
      height={height}
      onClick={handleClick}
    >
      <Inner duration={duration} >
        <Front>{front}</Front>
        <Back>{back}</Back>
      </Inner>
    </Card>
  )
}

export default FlipCard

const Card = styled.div`
  width: ${({ width }) => width }
  height: ${({ height }) => height }
// perspective: 1000px;
`

const Inner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform ${({ duration }) => duration} ease-in-out;
  transform-style: preserve-3d;
  ${Card}:hover & {
    cursor: pointer;
    transform: rotateY(180deg);
  }
`

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
`

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: left;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`
