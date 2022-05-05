import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Productitem } from '../Components/Context/CartContext'
import { theme } from '../Components/Context/ThemeContext'
import Navbar from '../Components/Navbar'
import { Mobile } from '../responsive'

const Container =styled.div`
width: 100%;
height: 90vh;
background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
${Mobile({height: '100vh'})}
 `

const Wrapper =styled.div`
padding: 35px 0px;
width: 30%;
background-color: ${({themevalue})=> themevalue? '#04111D': 'white'};
color: ${({themevalue})=>!themevalue?'black':'#E5E5E5'};
${Mobile({width: '90%', padding:'15px 0px'})}
/* border:5px solid red; */
`


const Title =styled.h1`
text-align: center;
font-size: 2.5rem;
font-weight: 800;
margin-bottom: 10px;
`

const Hr = styled.hr`

margin-top: 10px;
background-color:${({themevalue})=> themevalue? '#E5E5E5': 'black'};
border: none;
height: 1.6px;
`

const Form =styled.form`
padding: 15px 30px;
display: flex;
flex-wrap: wrap;

`

const Input =styled.input`
color: ${({themevalue})=>!themevalue?'black':'#E5E5E5'};
border: none;
border-bottom: 1px outset ${({themevalue})=>!themevalue?'black':'#E5E5E5'};
outline: none;
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
background: transparent;

`

const Agrement = styled.span`
 
font-size: 12px;
margin: 20px 0px;
`

const Button =styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
`

const SignIn = styled.div`
font-size: 12px;
padding: 8px 30px;
`

const Register = () => {

  let navigate = useNavigate();

  const {themevalue}= useContext(theme)
  const {data, setData} = useContext(Productitem) 
  const {completedata, setCompleteData} = useContext(Productitem)


  const SubmittedData = (event)=>{
    event.preventDefault();  
    setCompleteData([...completedata,data])
    setData({
      fname:'',
      lname:'',
      email:'',
      password:'',
      agree:true})    
    }

  
  const ChangeHandler = (e)=>{
    const {value,name,type,checked} = e.target;
    
    setData((prevdata)=>({
      ...prevdata,[name]: type ==='checkbox'? checked :value
    })); 

      }

  
  return (
    
    <div>
      <Navbar/>
    <Container >       
        <Wrapper themevalue = {themevalue}>
            <Title>Register</Title>
            <Title style={{fontWeight:'100', fontSize: '1.2rem', padding:'0px 3px'}}>Please fill in this form to create an account</Title>
            <Hr themevalue={themevalue}/>
            <Form onSubmit={SubmittedData}>
                <Input placeholder='First Name' required  name='fname' value={data.fname} themevalue={themevalue} onChange={ChangeHandler}/>
                <Input placeholder='Last Name' required  name='lname' value={data.lname} themevalue={themevalue} onChange={ChangeHandler}/>
                <Input placeholder='Email'   required   name='email'  value={data.email} style={{flex:'100%'}} themevalue={themevalue} onChange={ChangeHandler}/>
                <Input placeholder='Password' type='Password' required name='password' value={data.password} themevalue={themevalue} onChange={ChangeHandler}/>
                <Agrement><input type='checkbox'  required  name='agree' value={data.agree} style={{verticalAlign: 'middle'}} onChange={ChangeHandler}/> By creating an account , I consent to the processing of my personal data in accordance with the <b style={{cursor:'pointer', color:'#4267B2'}}>PRIVACY POLICY.</b></Agrement>                               
                <Button>CREATE</Button>             
            </Form>
            <SignIn>ALREADY AN EXISTING USER? <b style={{cursor:'pointer', color:'#4267B2'}} onClick={()=>{navigate('/Login')}}>LOGIN HERE. </b></SignIn>             
        </Wrapper>      
    </Container>
    </div>
  )
}

export default Register
