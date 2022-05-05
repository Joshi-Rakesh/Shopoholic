import { MailOutline } from '@material-ui/icons'
import React, { useContext } from 'react'
import {useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../Components/Context/ThemeContext'
import Navbar from '../Components/Navbar'
import { Mobile } from '../responsive'
 

const Container = styled.div`
height: 90vh;
width: 100%;
background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url('https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') center;
background-size: cover;
background-repeat: no-repeat;
display: flex;
align-items: center;
justify-content: center;
${Mobile({height: '100vh'})}

` 
const Wrapper =styled.div`
background-color: ${({themevalue})=> themevalue? '#04111D': 'white'};
color: ${({themevalue})=>!themevalue?'black':'#E5E5E5'};
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 25px;
width: 30%;
${Mobile({width: '90%', padding:'25px 10px'})}

`

const Img = styled.img`
align-items: center;
height: 110px;
width: 110px;
border-radius: 50%;
margin-bottom: 25px;
`

const Title =styled.h1`
text-align: center;
font-size: 2.5rem;
font-weight: 800;
margin-bottom: 20px;

`

const Input =styled.input`
border: none;
border-bottom: 1px outset ${({themevalue})=>!themevalue?'black':'#E5E5E5'};
width: 80%;
outline: none;
margin: 10px 0px;
padding: 10px;
background: transparent;
`
const Links = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
`
const Link = styled.span`
cursor: pointer;
color: #4267B2;
`

const Button =styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin: 25px 0px 25px 0px;
`

const ForgotPassword = () => {

    let navigate = useNavigate();

    const {themevalue}= useContext(theme);

  return (
    <div>
<Navbar/>
<Container>
    <Wrapper themevalue = {themevalue}>
        <Img src='https://play-lh.googleusercontent.com/_jjkr0aop6QziAROplTkUa17QMz6UmIkNK7Rkctk-XUmPET6sUP5MvkuTumD5Kp6BTE=s180-rw'/>   
        <Title>Yo! Forgot Password?</Title> 
        <Title style={{fontWeight:'500', fontSize: '1.02rem'}}>No worries! Enter your email, phone, or username and we'll send you a link to get back into your account.</Title>     
           <Input placeholder='Enter your email, phone, or username' themevalue={themevalue}/>
            <Button>Send Request</Button>
            <Links>
                <Link onClick={()=>{navigate('/Home')}}>Home</Link>
                <Link onClick={()=>{navigate('/Login')}}>Login</Link>
                <Link onClick={()=>{navigate('/Register')}}>Register</Link>
            </Links>
        </Wrapper>  
</Container>
</div>
  )
}

export default ForgotPassword
