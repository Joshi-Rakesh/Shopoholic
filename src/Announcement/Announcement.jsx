import React, { useContext } from 'react'
import styled from 'styled-components'
import { theme } from '../Components/Context/ThemeContext'

const Container = styled.div`
background-color: teal;
height: 4vh;
display: flex;
justify-content: center;
align-items: center;
font-weight: 500;
color: white;
`

const Announcement = () => {

  const{themevalue}= useContext(theme);

  return (
    <Container themevalue = {themevalue}>
      Summer Sale is Live !  Buy 2 & Get 1 FREE
    </Container>
  )
}

export default Announcement
