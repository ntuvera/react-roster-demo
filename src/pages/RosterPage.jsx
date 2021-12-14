import React, {useEffect, useState} from 'react'
import styled from "styled-components"

import Roster from '../components/Roster'

const RosterPage = () => {
// NOTE: consider pagination by 10 for rendering
  return (
    <>
      <Roster/>
    </>
  )
}

export default RosterPage

const Container = styled.div`
  min-height: 100vh;
  max-width: 1920px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 96px;
  background:#f8f8f8;
  margin: 0 auto;
  width: 80%;

  @media(min-width: 1025px) { }

  @media (max-width: 1367px) {
    padding-top: 64px;
  }

`

const PlayerGrid = styled.div`
  display: grid;
  // grid-template-columns: auto auto auto;
  grid-template-columns: auto;
  max-width: 100%;
  margin: 0 auto;
`