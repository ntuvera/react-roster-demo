import React from "react"
import styled from "styled-components"
import News from '../components/News'

const NewsPage  = () => {
  return (
    <>
        <Container>
          <News/>
        </Container>
    </>
  )
}

export default NewsPage

const Container = styled.div`
  margin-top:200px;
  // color:#000;
`