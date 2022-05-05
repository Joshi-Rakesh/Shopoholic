import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import styled from 'styled-components'
import { Productitem } from '../Components/Context/CartContext'
import { theme } from '../Components/Context/ThemeContext'
import Navbar from '../Components/Navbar'
import { Mobile } from '../responsive'


const Container =styled.div`
width: 100%;
height: 90vh;
background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
${Mobile({height: '100vh'})}
`

const Wrapper =styled.div`
background-color: ${({themevalue})=> themevalue? '#04111D': 'white'};
color: ${({themevalue})=>!themevalue?'black':'#E5E5E5'};
padding: 35px 0px;
width: 30%;
/* background-color: white; */
${Mobile({width: '90%'})}

`


const Title =styled.h1`
text-align: center;
font-size: 2.5rem;
font-weight: 800;
margin-bottom: 10px;
`
const Hr = styled.hr`
margin-top: 10px;
background-color: black;
border: none;
height: 1.6px;
background-color:${({themevalue})=> themevalue? '#E5E5E5': 'black'};
`

const Form =styled.form`
padding: 20px 40px;
display: flex;
flex-direction: column;

`

const Input =styled.input`
color: ${({themevalue})=>!themevalue?'black':'#E5E5E5'};
border: none;
border-bottom: 1px outset ${({themevalue})=>!themevalue?'black':'#E5E5E5'};
outline: none;
flex: 1;
min-width: 40%;
margin: 10px 0px;
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
margin: 5px 0px;
`

const Links = styled.div`
display: flex;
`

const Link = styled.div`
cursor: pointer;
font-size: 12px;
font-weight: bold;
color: #4267B2;
padding: 8px 30px;
`

const Login = () => {

  let navigate = useNavigate();

  const {themevalue}= useContext(theme)
  const {data, setData} = useContext(Productitem) 
  const {logindata, setLoginData} = useContext(Productitem)
  const [error,setError] = useState({
    name:''
  })
  const {status, setStatus} = useContext(Productitem);
  const {completedata} = useContext(Productitem)



const Submittted = (e)=>{  
  e.preventDefault();

  completedata.map((oneobj)=>{

    if(oneobj.email!==logindata.email || oneobj.password!==logindata.password){
      setError(()=>({
          name:'invalid credentials, please try again'
      }))    
    }else{
      setStatus(true)
      setError(()=>({
        name:''
      }))
      toast.success('Login successfull, redirecting to Homepage.......')
      setLoginData({
        email:'',
        password:'',
        agree:false
      })
      setTimeout(() => {
        {navigate('/Home')}
      }, 3000);      
    }
  })  
}

const changeHandler= (e) => {

  const{name,value,checked,type}=e.target;

  setLoginData((prev)=>({
    ...prev, [name]:type==='checkbox'? checked: value
  }));

}

  return (
    <div>
    <Navbar/>
    <Container>

        <Wrapper themevalue = {themevalue}>
            <Title>Login</Title>
            <Title style={{fontWeight:'100', fontSize: '1.2rem'}}>Welcome to ShopaHolic. Please login.</Title>
            <Hr themevalue={themevalue}/>
            <Form onSubmit={Submittted}> 
                <Input required placeholder='Email' themevalue={themevalue} onChange={changeHandler} name='email' value={logindata.email}/>
                <Input required placeholder='Password' type='password' themevalue={themevalue} onChange={changeHandler} name='password' value={logindata.password}/>
                <Agrement><input type='checkbox' style={{verticalAlign: 'middle'}} onChange={changeHandler}  name='agree' value={logindata.agree}/>  By continuing, you agree to ShopaHolic's Conditions of Use and <b style={{cursor:'pointer', color:'#4267B2'}}>PRIVACY POLICY.</b></Agrement>
                {!!error.name && <i style={{color:'crimson', paddingBottom:'10px'}}>{error.name}</i>}
                <Button>LOGIN</Button>
            </Form>
              <Links>
                <Link onClick={()=>{navigate('/ForgotPassword')}}>Forgot your password?</Link>
                <Link onClick={()=>{navigate('/Register')}}>Create your ShopaHolic account</Link>
            </Links>
        </Wrapper>
        <ToastContainer
        theme='colored'
        position="top-center"
         autoClose={2000}
         hideProgressBar
         newestOnTop={true}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         />      
    </Container>
    </div>
  )
}

export default Login
