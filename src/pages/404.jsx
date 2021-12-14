import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const NoPageFound = () => {
  return (
    <>
        <Container>
          <p>
            Missing Content -- The url you are trying to visit does not exist
          </p>
          <div>
            <Link to="/">return to the home Page</Link>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
        </Container>
    </>
  )
}

export default NoPageFound

const Container = styled.div`
  padding-top:200px;
  color:#000;
  margin: 0 auto;
  padding: 200px 15% 200px;
  text-align: center;
`