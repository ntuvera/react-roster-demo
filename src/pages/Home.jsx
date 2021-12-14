import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Home = () => {
  return (
    <>
        <Container>
          Missing Homepage Design...
          <Link to="/">return</Link>
          <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
        </Container>
    </>
  )
}

export default Home

const Container = styled.div`
  padding-top:200px;
  // color:#000;
`