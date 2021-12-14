import React from 'react'
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

import Header from './components/layout/Header';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import NewsPage from './pages/NewsPage';
// import Roster from './components/Roster';
import Roster from './pages/RosterPage';
import NoPageFound from './pages/404';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route exact path="/news" element={<NewsPage />}/>
          <Route exact path="/roster" element={<Roster />}/>
          <Route path="*" element={<NoPageFound />}/>
        </Routes>
      </Router>
      <Container className="App">
        <Header/>
        <Content/>
        <Footer/>
      </Container>
    </>
  )
}

export default App;

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