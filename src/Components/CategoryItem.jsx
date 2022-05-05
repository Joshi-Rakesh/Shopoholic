import React from 'react'
import styled from 'styled-components'
import { Mobile } from '../responsive'

const Title = styled.h1`
color: white;
margin-bottom: 20px;
transition: 0.4s all ease-in-out;
backdrop-filter: blur( 4px );
padding: 5px;
text-align: center;
`

const Container = styled.div`
height: 70vh;
flex: 1;
position: relative;
padding: 5px 4px;
transition: 0.4s all ease-in-out;
&:hover{
  transform: scale(1.02);
}
&:hover  ${Title}{
background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
}
`
const Image = styled.img`

width: 100%;
height: 100%;
object-fit: cover;
${Mobile({height: '30vh'})}


`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
display: flex;
justify-content: flex-end;
flex-direction: column;
align-items: center;
padding-bottom: 20px;
`



const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
              </Info>
    </Container>
  )
}

export default CategoryItem
