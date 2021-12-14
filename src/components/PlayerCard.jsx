import React, { useEffect, useState } from "react"
import styled from "styled-components"
// import { useModal } from "../hooks/useModal"

const PlayerCard = ({ player, team }) => {
  const [playerData, setPlayerData] = useState(null)

  useEffect(() => {
    const fetchPlayerData = async () => {
      const apiUrl = 'https://data.nba.com/data/v2015/json/mobile_teams/nba/2021/teams/nets/player_averages_02.json'

      // console.log(`playerCard: player prop ${typeof player.pid}`)
      try{
        const response = await fetch(apiUrl)
        if(response.ok) {
          let jsonResponse = await response.json()
          const playerStats = await jsonResponse.tpsts.pl.filter(playerObj => parseInt(playerObj.pid) === player.pid)
          console.log(playerStats)
          let playerWithStats = {...player, ...playerStats[0]}
          setPlayerData(await playerWithStats)
        }
      } catch (err) {
        console.log(`Error: ${err}`)
        throw err
      }
    }
    fetchPlayerData()
  }, [player])

  const positionKey = {
    "C": "Center",
    "C-F": "Center-Forward",
    "F": "Forward",
    "F-C": "Forward-Center",
    "G": "Guard",
    "G-F": "Guard Forward",
    "PG": "Point Guard",
    "PF": "Power Forward",
    "SF": "Small Forward",
    "SG": "Shooting Guard",
  }

  return (
    <Container>
      <Player>
      <Splash style={{ 
        backgroundImage: `url(https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612751/2021/260x190/${player.pid}.png)`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        }}>
        <Infographic>
          <ImageContainer class="playerImage">
            {/* <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612751/2021/260x190/${player.pid}.png`} alt={`${player.ln}-hs`}/> */}
          </ImageContainer>
          <TeamLogo>
            {/* <h2>place logo here</h2> */}
          </TeamLogo> 
          <PlayerInfo class="playerInfo">
            <div class="teamName">{`${team.tc} ${team.tn}`}</div>
            <div class="jerseyNumber">#{player.num}</div>
            <div class="position">{positionKey[player.pos]}</div>
            <div class="firstName"><h2>{player.fn}</h2></div>
            <div class="lastName"><h2>{player.ln}</h2></div>
            <div class="miscIcon"></div>
          </PlayerInfo>
        </Infographic>
      </Splash>
      <PlayerDetails>
        <div class="height">
          <label>Height</label>
          {player.ht}
        </div>
        <div class="weight">
          <label>Weight</label>
          {player.wt}
        </div>
        <div class="dob">
          <label>Date of Birth</label>
          {player.dob}
        <div class="year"></div>
          <label>Experience</label>
          {player.y}
        </div>
        <div class="twc">
        <label>TWC?</label>
        {player.twc}
        </div>
        <div class="hcc">
          <label>Last Attended</label>
       {player.hcc}
        </div>
      </PlayerDetails>
      <div class="stats">
        <Stats>
          {console.log(playerData)}
          <div class="gamePoints">
            <label>Games played</label>
            {playerData?.avg?.gp}
          </div>
          <div class="">
            <label>Minutes Played</label>
            {playerData?.avg?.min}
          </div>
          <div class="gs">
            <label>? gs ?</label>
            {playerData?.avg?.gs}
          </div>
          <div class="fieldGoalPercentage">
            <label>Field Goal Percentage</label>
            {playerData?.avg?.fgp}
          </div>
          <div class="ttp">
            <label>? ttp ?</label>
            {playerData?.avg?.gp}
          </div>
          <div class="offensiveRebounds">
            <label>Offensive Rebounds</label>
            {playerData?.avg?.oreb}
          </div>
          <div class="defensiveRebounds">
            <label>Defensive Rebounds</label>
            {playerData?.avg?.dreb}
          </div>
          <div class="rebounds">
            <label>Rebounds</label>
            {playerData?.avg?.reb}
          </div>
          <div class="assists">
            <label>Assists</label>
            {playerData?.avg?.ast}
          </div>
          <div class="steals">
            <label>Steals</label>
            {playerData?.avg?.stl}
          </div>
          <div class="blocks">
            <label>Blocks</label>
            {playerData?.avg?.blk}
          </div>
          <div class="turnovers">
            <label>Turnovers</label>
            {playerData?.avg?.tov}
          </div>
          <div class="personalFouls">
            <label>personalFouls</label>
            {playerData?.avg?.pf}
          </div>
          <div class="points">
            <label>Points</label>
            {playerData?.avg?.pts}
          </div>

        </Stats>
      </div>
      </Player>
    </Container>
  )
}

export default PlayerCard

const Container = styled.div`
  // display: grid;
  width: 350px;
  // border: 1px solid black;
  margin: 20px;
`
const Splash = styled.div`
  width: 100%;
  height: 250px;
  background: rgba(0,0,0,0.75);
  color: #FFF;
  padding: 20px;
  margin: 0 auto;

  &.playerInfo {
    postion: absolute;
  }
`
const Player = styled.div`
  width: 350px;
  border-radius: 8px

  &.stats {
    width: 390px;
  }

`
const Infographic = styled.div`
  width:  100%
`
const ImageContainer = styled.div`
`
const TeamLogo = styled.div``
const PlayerInfo = styled.div`
  // display:  inline-block
  text-align: right;
`
// maybe do a grid template here?
const PlayerDetails = styled.div`
  display:  inline-block;
  min-width: 390px;
  min-height: 525px;
  color: #FFF;
  background-color: rgba(0, 0, 0, 0.9);

  label {
    display: block;
  }
  div {
    border: 1px solid white;
  }
`
const Stats = styled.div`
  color: #FFF;
  background: rgba(0,0,0,0.75);
  min-width: 390px;
  min-height: 525px;
  label {
    display: block;
  }
`
// const ModalContainer = styled.div`
//   background: #000;
//   padding: 16px;
//   overflow: auto;
//   position: relative;
//   top: 50px;
//   margin-bottom: 50px;
//   padding: 48px 20px;
//   @media (min-width: 768px}) {
//     width: 744px;
//     padding: 48px;
//     top: 0;
//   }
// `