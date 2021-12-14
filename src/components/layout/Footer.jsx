import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Container>
      <p>&copy; 2021 </p>
      <p>API provided by <a href="http://www.nba.com/"> NBA.com</a></p>
    </Container>
  )
}

export default Footer;

const Container = styled.div`
  position: fixed;
  bottom: 0px;
  width:  100%;
  height: 3rem;
  color:  #FFF;
  font-size: 12px;
  background: #000;
  text-align: center;
  margin: 0 auto;
  padding-top: 1rem;

  p {
    position: relative;
    bottom: 1em;
  }

  a {
    text-decoration: none;
  }
`