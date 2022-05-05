import { Facebook, Instagram, MailOutline, Phone, Reddit, Room, Twitter, YouTube } from '@material-ui/icons';
import React, { useContext } from 'react'
import styled from 'styled-components'
import { Mobile } from '../responsive';
import { theme } from './Context/ThemeContext';

const Container = styled.div`
background-color: ${({themevalue})=> themevalue? '#04111D': '#F5FAFD'};
color: ${({themevalue})=> themevalue? '#E5E5E5': 'black'};
display: flex;
${Mobile({flexDirection: 'column'})}
`;
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1``
const Desc = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background: ${props=>props.color};
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;
`

const Center = styled.div`
flex: 1;
padding: 20px;
${Mobile({display: 'none'})}
`;

const Title = styled.h3`
margin-bottom: 20px;
`
const List = styled.ul`

margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 20px;
`

const Right = styled.div`
flex: 1;
padding: 20px;
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`

const Payment = styled.img`
width: 50%;`


const Footer = () => {

  const {themevalue} = useContext(theme);

  return (
    <Container themevalue= {themevalue}>
      <Left>
          <Logo>ShopaHolic.</Logo>
          <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis voluptatum quam eius? Accusantium, reiciendis quas molestias ducimus quidem sint itaque.</Desc>
          <SocialContainer>
              <SocialIcon color='#3B5999'>
                  <Facebook/>
              </SocialIcon>
              <SocialIcon color='#FF0000'>
                  <YouTube/>
              </SocialIcon>
              <SocialIcon color='linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)'>
                  <Instagram/>
              </SocialIcon>
              <SocialIcon color='#55ACEE'>
                  <Twitter/>
              </SocialIcon>
              <SocialIcon color='#ff4500'>
                  <Reddit/>
              </SocialIcon>
          </SocialContainer>
      </Left>


      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem> 
            <ListItem>Cart</ListItem>
            <ListItem>Men's Fashion</ListItem>
            <ListItem>Women's Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
        </List>
      </Center>


      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{marginRight:'10px'}}/>Lorem ipsum dolor sit amet consectetur adipisicing elit. </ContactItem>   
        <ContactItem><Phone style={{marginRight:'10px'}}/>+91 123 45 678</ContactItem>
        <ContactItem><MailOutline style={{marginRight:'10px'}}/>Loremipsumdolor@gmail.com</ContactItem>
        <Payment src= 'https://i.ibb.co/Qfvn4z6/payment.png'/>
      </Right>
    </Container>
  )
}

export default Footer