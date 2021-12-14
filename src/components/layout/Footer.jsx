import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Container>
      <span> Footer here</span>
    </Container>
  )
}

export default Footer;

const Container = styled.div`
  position: fixed;
  color:  #FFF;
  background: #000;
  bottom: 0px;
  width:  100%;
  height: 5rem;
  text-align: center;

  span {
    margin: 1em;
  }
`