import React, { useEffect, useState } from "react"
import styled from "styled-components"
import bwLogo from "../../src/images/brooklyn_nets_logo_bw.png"

const PlayerCard = ({ player, team }) => {
  const [playerData, setPlayerData] = useState(null)

  useEffect(() => {
    const fetchPlayerData = async () => {
      const apiUrl = 'https://data.nba.com/data/v2015/json/mobile_teams/nba/2021/teams/nets/player_averages_02.json'

      try{
        const response = await fetch(apiUrl)
        if(response.ok) {
          let jsonResponse = await response.json()
          const playerStats = await jsonResponse.tpsts.pl.filter(playerObj => parseInt(playerObj.pid) === player.pid)
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

  // NOTE: future iteration using Flip Card with css to display data
  // const createCardFront = (info) => {
  //   const data = info;
  //   return (
  //     <PlayerDetails class="details">
  //       <div class="height">
  //         <label>Height</label>
  //         {data.ht}
  //       </div>
  //       <div class="weight">
  //         <label>Weight</label>
  //         {data.wt}
  //       </div>
  //       <div class="dob">
  //         <label>Date of Birth</label>
  //         {data.dob}
  //         </div>
  //       <div class="year">
  //         <label>Experience</label>
  //         {data.y}
  //       </div>
  //       <div class="twc">
  //         <label>TWC?</label>
  //         {data.twc}
  //       </div>
  //       <div class="hcc">
  //         <label>Last Attended</label>
  //         {data.hcc}
  //       </div>
  //     </PlayerDetails>
  //   )
  // }

  // const createCardBack = (stats) => {

  //   const data = stats;
  // }

  return (
    <Container>
      <Player>
        <Splash style={{ 
          backgroundImage: `url(https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612751/2021/260x190/${player.pid}.png)`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          }}>
          <TeamLogo src={bwLogo}/>
          <Infographic>
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
      <Info>
        <PlayerDetails class="details">
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
            </div>
          <div class="year">
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

          <Stats>
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
        </Info>
      </Player>
    </Container>
  )
}

export default PlayerCard

const Container = styled.div`
  width: 350px;
  margin: 0 auto;
`
const Splash = styled.div`
  position: relative;
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
const Player = styled.div` `
const Infographic = styled.div`
  text-align: right;
`
const TeamLogo = styled.img`
  position: absolute;
  width:  125px;
  left: 5px;
  opacity: 0.25;
`
const PlayerInfo = styled.div`
  display: grid;
  grid-template-columns: auto;
`
const Info = styled.div`
  text-align: center;
`
const PlayerDetails = styled.div`
  display:  flex;
  flex-direction: column;
  min-width: 390px;
  min-height: 550px;
  color: #FFF;
  background-color: rgba(0, 0, 0, 0.9);

  label {
    display: block;
  }
  div {
    flex: 1 1 0px;
    border: 1px solid white;
    border-color: #FFF;
    border-style: solid;
    border-width: 1px 0 1px 0;
  }

`
const Stats = styled.div`
  display: flex;
  flex-direction: column;
  color: #FFF;
  background: rgba(0,0,0,0.75);
  min-width: 390px;
  min-height: 550px;

  label {
    display: block;
  }

  div {
    flex: 1 1 0px;
    border: 1px solid white;
    border-color: #FFF;
    border-style: solid;
    border-width: 1px 0 1px 0;
  }
`