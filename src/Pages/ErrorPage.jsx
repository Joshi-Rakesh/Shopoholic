import React, { useContext } from 'react'
import {useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../Components/Context/ThemeContext'
import { Mobile } from '../responsive'

const Container = styled.div`
padding: 10px 60px;
height: 90vh;
background: ${({themevalue})=>!themevalue ? '#F5F5F5' : '#202225'};
color: ${({themevalue})=>themevalue? '#E5E5E5': 'black'};
display: flex;
justify-content: space-around;
align-items: center;
${Mobile({flexDirection:'column',justifyContent: 'flex-start',gap:'4%', padding:'0px 0px 0px 0px'})}

`
const ErrorInfo = styled.div`
/* background-color: yellow; */
height: 50vh;
display: flex;
flex-direction: column;
justify-content: space-between;
${Mobile({width:'90%',textAlign:'center',height:'35vh',display:'auto'})}

`

const Logo = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;  
  background-color: ${({themevalue})=>themevalue? '#04111D': 'white'};
  color: ${({themevalue})=>themevalue? '#E5E5E5': '#04111D'};
`

const Logotext= styled.h1`
  cursor: pointer;
  font-weight: bolder;
`

const MessageTitle = styled.h1`
letter-spacing: 5px;
font-size: 10rem;
font-weight: 900;
margin-bottom: 20px;
${Mobile({ fontSize: '4rem'})}

`

const MessageInfo = styled.p`
font-size: 2rem;
font-weight: 400;
margin-bottom: 20px;
${Mobile({ fontSize: '1.2rem'})}
`

const Button = styled.button`
width: 30%;
font-size: 1rem;
font-weight: 500;
padding: 10px;
background-color: teal;
color: white;
border: none;
height: 6.5vh;
cursor: pointer;
${Mobile({ width: 'auto'})}

`

const ErrorImage = styled.img`
/* background-Color:'yellow' */
${Mobile({height:'40vh'})}
`


const ErrorPage = () => {

  const {themevalue} = useContext(theme)

    let navigate = useNavigate();

  return (
      <div>
    <Logo themevalue={themevalue}>

      <Logotext onClick={()=>{navigate('/Home')}}>ShopaHolic.</Logotext>
    </Logo>
    <Container themevalue={themevalue}>    
    <ErrorImage src = 'https://i.ibb.co/8zZbHsr/573a8eb073f0a8f98e85559c1dc5214d-removebg-preview.png%22%20alt=%22573a8eb073f0a8f98e85559c1dc5214d-removebg-preview%22%20border=%220%22'/>    
      <ErrorInfo>          
          <MessageTitle>Oops!</MessageTitle>
          <MessageInfo>We can't seem to find the page you're looking for.</MessageInfo>
          <MessageInfo style = {{fontSize:'1rem', fontWeight: '800'}}>Error Code: 404</MessageInfo>
          <Button onClick={()=>{navigate('/Home')}}>GO BACK TO HOMEPAGE</Button>
      </ErrorInfo>
    </Container>
    </div>
  )
}

export default ErrorPage
