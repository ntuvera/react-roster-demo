import React, { useState } from "react";
import styled from "styled-components";
import { useWindowSize } from "../hooks/useWindowsSize";
// import LeftNav from "./LeftNav";
// import Overlay from "./Overlay";

const Burger = () => {
  const [open, setOpen] = useState(false);
  const { isMobile } = useWindowSize();
  const toggleNav = () => {
    if (isMobile) {
      setOpen(!open);
      document.body.classList.toggle("nav-opened");
    }
  };
  return (
    <>
      <StyledBurger open={open} onClick={toggleNav}>
        <div />
        <div />
        <div />
      </StyledBurger>
      {/* <LeftNav clickHandler={toggleNav} open={open} /> */}

      {/* {isMobile && open ? <Overlay backgroundColor="rgba(0,0,0,0.6)" /> : null} */}
    </>
  );
};
export default Burger;

const StyledBurger = styled.div`
  width: 45px;
  height: 24px;
//  z-index: ${({ open, theme }) => open ? theme.zIndex.burgerMenu.close : theme.zIndex.burgerMenu.open};
  display: none;
  padding-left: 20px;

  @media (max-width: 1025px {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    align-self: center;
  }

  div {
    width: 18px;
    height: 2px;
    background-color: #000;
    border-radius: 10px;
    transition: all 0.2s linear;
    transform-origin: ${({ open }) => (open ? "0px" : "1px")};

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      width: ${({ open }) => (open ? "22px" : "18px")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      width: ${({ open }) => (open ? "22px" : "18px")};
    }
  }
`;

