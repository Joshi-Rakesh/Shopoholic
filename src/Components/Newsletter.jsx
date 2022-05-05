import { Send } from '@material-ui/icons'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { Mobile } from '../responsive'
import { theme } from './Context/ThemeContext'

const Container = styled.div`
height: 60vh;
background-color: ${({themevalue})=>themevalue? '#262B2F' : '#fcf5f5'};
color: ${({themevalue})=>themevalue? '#E5E5E5' : 'black'};
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;

`
const Description = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
${Mobile({textAlign: 'center'})}
`
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 0.1px solid lightgray;
${Mobile({width: '80%'})}
`
const Input = styled.input`

border: none;
flex: 8;
padding: 0px 20px;
outline: none;

`

const Button = styled.button`

flex: 1;
background-color: teal;
color: white;
border: none;
outline: none;
cursor: pointer;
`

const Newsletter = () => {

  const {themevalue} = useContext(theme);

  return (
    <Container themevalue= {themevalue}>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favourite products</Description>
      <InputContainer>
      <Input placeholder='Your Email'/>
      <Button>
          <Send/>
      </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
