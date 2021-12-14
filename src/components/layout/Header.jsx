import React from "react"
import styled from "styled-components"
import bwLogo from "../../images/brooklyn_nets_logo_bw.png"
// import Burger from "./Burger"

const Header = () => {

  return (
    <Container>
      <NavBar id="topNav">
        <a href="/">
          <Logo src={bwLogo}/>
        </a>
        <NavMenu id="navLinks">
          <li>
            <a href="/news">News</a>
          </li>
          <li>
            <a href="/roster">Roster</a></li>
        </NavMenu>
      </NavBar>
    </Container>
  )
}
  
export default Header;

const Container = styled.div`
  // position: fixed;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%
`

const NavBar = styled.nav`
  background: #000;
  color: #FFF;
  height: 150px;
  margin: 0 auto;
  text-align: center;
  
  @media (max-width: ) {
    height: 200px;
  }

  img {
    display: inline;
  }

  ul {
    display: inline;
  }
`

const NavMenu = styled.ul`
  position: absolute;
  bottom: 10px;
  // margin: 0 auto;
  list-style: none;

  #navLinks li {
    display: inline;
  }

  & > li {
    display: inline;
    padding: 0 12px;
    font-size: 15px;
    font-weight: 600;
    white-space: pre;
    position: relative;
    text-transform: uppercase;

    & > a {
      color: #FFF;
      text-decoration: none;
      cursor: pointer;
      &.isActive {
        text-shadow: none;
        &:before,
        &:after {
          width: 50%;
          opacity: 1;
        }
      }
    }
    &.isHovered {
      ul {
        display: block;
      }
    }
  }
`
const Logo = styled.img`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: inline;
  height: 100px;

  @media (max-width: ) {
    height: 100px;
  }
`