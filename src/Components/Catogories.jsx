import React, { useContext } from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import { Mobile } from '../responsive'
import CategoryItem from './CategoryItem'
import { Productitem } from './Context/CartContext'
import { theme } from './Context/ThemeContext'


const Container = styled.div`
background-color: ${({themevalue})=> themevalue? '#202225' : 'white'};
display: flex;
padding-bottom: 25px ;
justify-content: space-between;
overflow: hidden;
${Mobile({ padding:'0px', flexDirection: 'column'})}
`

const Heading = styled.div`
font-weight: bolder;
font-size:2rem;
height: 8vh;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
`

const Catogories = () => {

  const {themevalue} = useContext(theme);

  return (
    <>
    <Heading>Categories to Bag</Heading>
    <Container themevalue= {themevalue}>
     {categories.map(item=>(
        <CategoryItem item={item} key={item.id}/>
     ))}
    </Container>
    </>
  )
}

export default Catogories
