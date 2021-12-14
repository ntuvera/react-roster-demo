import React from 'react'
import styled from 'styled-components';
import './App.css';

import Main from './components/Main';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import Roster from './components/Roster';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <Container className="App">
        <Header></Header>
          <Content>
            <Roster/>
          </Content>
          <Main/>
      </Container>
      <Footer/>
    </>
  )
}

export default App;


// const Container = styled.div`
//   min-width: 440px;
//   margin: 0 auto;

//   @media (min-width: 480px) {
//     max-width: 1025px;
//   }
// `
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  max-width: 1248px;
  margin: 0 auto;

  @media (min-width: 769px{
    width: 80vw;
  }
`