import React, {useEffect, useState} from 'react'
import styled from "styled-components"

import PlayerCard from "./PlayerCard"

const Roster = ({roster, teams}) => {
  const [players, setPlayers] = useState([])
  const [team, setTeamData] = useState([])

  useEffect(() => {
    const fetchPlayers = async () => {
      const netsRosterUrl = 'https://data.nba.com/data/5s/v2015/json/mobile_teams/nba/2021/teams/nets_roster.json' 

      try{
        const response = await fetch(netsRosterUrl)
        if(response.ok) {
          let jsonResponse = await response.json()
          // console.log(jsonResponse)


          setPlayers(jsonResponse.t.pl)
          setTeamData(
            {
              tid: jsonResponse.t.tid,
              ts: jsonResponse.t.ts,
              tn: jsonResponse.t.tn,
              tc: jsonResponse.t.tc,
            }
          )
        }
      } catch (err) {
        console.log(`Error: ${err}`)
        throw err
      }
    }
    fetchPlayers()
  }, [])
// NOTE: consider pagination by 10 for rendering
  return (
    <>
      <Container>
        <PlayerGrid>
        {players.map(player => {
          return(
            <>
              {/* <p key={`pid-${player.pid}`}> {player.fn}</p> */}
              <PlayerCard class="grid-item" key={`${player.pid}-card`} player={player} team={team}/>
            </>
          )
        })}
        </PlayerGrid>
      </Container>
    </>
  )
}

export default Roster

const Container = styled.div`
  // min-height: 100vh;
  max-width: 1280px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 96px;
  background:#f8f8f8;
  margin: 150px auto 80px;
  width: 80%;

  @media(min-width: 1025px) {
    padding-top: 64px;
  }

  // @media (max-width: 1367px) {
  // }

`

const PlayerGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 20px;
  min-width: 100%;
  margin: 0 auto;

  @media(max-width: 1012px) {
    grid-template-columns: auto auto;
    grid-column-gap: 10px;
  }

  @media(max-width: 544px) {
    grid-template-columns: auto;
    grid-column-gap: 0px;
  }
`