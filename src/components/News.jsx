
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

import { NewsData } from './data/news.js'

const News = () => {
  // const [players, setPlayers] = useState([])
  // const [team, setTeamData] = useState([])
  const [news, setNews] = useState([])
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      const newsApiUrl = 'https://www.nba.com/nets/api/1.1/json/?type=story+OR+photo_gallery+OR+video&amp' 

      try{
        const response = await fetch(newsApiUrl,
          {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json'
            }
          })
        if(response.ok) {
        
          let jsonResponse = await response.json()
          console.log(await jsonResponse)
        } else {
          let cacheResponse = await NewsData.json()
          setNews(cacheResponse)
        }
      } catch (err) {
        console.log(`Error: ${err}`)
        // throw err // temporarily remove to avoid Error and use cache data until CORS sorted
      }
    }
    fetchNews()
  }, [])
// NOTE: consider pagination by 10 for rendering
  return (
    <>
      <Container>
        <NewsGrid>
          {console.log(news)}
        {articles.map(article => {
          return(
            <>
              <p key={`npid-${article.nid}`}> {article.title}</p>
            </>
          )
        })}
        </NewsGrid>
      </Container>
    </>
  )
}

export default News

const Container = styled.div`
  // min-height: 100vh;
  max-width: 1310px;
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

`

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  min-width: 100%;
  margin: 0 auto;

  @media(min-width: 1029px) {
    grid-template-columns: auto auto;
  }

  @media(min-width: 1365px) {
    grid-template-columns: auto auto auto;
  }
`