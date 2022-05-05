import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import styled from 'styled-components'
import { Productitem } from '../Components/Context/CartContext'
import { theme } from '../Components/Context/ThemeContext'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Mobile } from '../responsive'
import 'react-toastify/dist/ReactToastify.css';



const Container = styled.div`
background: ${({themevalue})=>!themevalue ? '#F5F5F5' : '#202225'};
color: ${({themevalue})=>themevalue? '#E5E5E5': 'black'};

`
const Flex = styled.div`
display: flex;
flex-wrap: wrap;
${Mobile({justifyContent: 'center'})}
`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 20px 0px;
margin: 2%;
align-items: center;
height: 45vh;
width: 271px;
border: 2px solid lightgray;
`

const Title = styled.div`
height: 10vh;
display: flex;
justify-content: center;
align-items: center;
font-weight: bolder;
font-size: 1.5rem;
`

const Emptycart = styled.div`
height: 50vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 20px;
`
const Emptybagimage = styled.img`
height: 45%;

`
const Wishlistmsg = styled.div`
text-align: center;
`
const Msgtitle = styled.h1`
padding-bottom: 5px;
font-weight: bolder;
font-size: 1.5rem;
`
const Msgtext = styled.p`
font-size: 1.1rem;
`

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: none;
background-color: teal;
color: white;
`

const Details = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Imagecontainer= styled.div`

`
const Image = styled.img`
height: 25vh;
width: 150px;
object-fit: cover;
`

const Name = styled.div`
font-weight: bolder;
font-size: 1.2rem;

`

const Price = styled.div`
font-weight: bold;
font-size: 1.1rem;
`

const Buttons = styled.div`
display: flex;
width: 100%;
justify-content: space-around;

`

const Button = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: none;
background-color: teal;
color: white;
`

const Wishlist = () => {

    const {themevalue} = useContext(theme)

    const {wishlist, SetWishlist,cartproducts, SetCartProducts} = useContext(Productitem)
    const navigate = useNavigate()

    const Removeitem = (wish)=>{
      const newcart = wishlist.filter(cart=>cart.id!==wish.id)
      SetWishlist(newcart)
      toast('Item successfully removed')
  }

  const AddToCart = (wish) => {

    let check = cartproducts.find(c => c.id === wish.id)

  if (check === undefined) {
    SetCartProducts([...cartproducts,wish])
    const newcart = wishlist.filter(cart=>cart.id!==wish.id)
      SetWishlist(newcart)
      toast('Item successfully added to cart')
    }
      

    
    else {
      const newcart = wishlist.filter(cart=>cart.id!==wish.id)
      SetWishlist(newcart)
    check.qty+=1
    toast('Item successfully added to cart')
}};

  return (
    <Container themevalue={themevalue}>
     <Navbar/>
     <Title>YOUR WISHLIST ({wishlist.length})</Title>        
     {wishlist.length===0? 
       <Emptycart>
            <Emptybagimage src='https://www.boosbe.com/img/wishlist-empty.svg'/>
            <Wishlistmsg>
                <Msgtitle>YOUR WISHLIST IS EMPTY</Msgtitle>
                 <Msgtext>Add items that you like to your wishlist.</Msgtext>
            </Wishlistmsg> 
            <TopButton onClick={()=>{navigate('/Home')}}> Continue Shopping </TopButton>             
         </Emptycart> :
         <> 
     <Flex>
     {wishlist.map((wish)=>(
       <Wrapper key={Math.random()}>
             <Imagecontainer> 
                 <Image src={wish.image}/>
             </Imagecontainer>
             <Details>  
                <Name>{wish.title.slice(0,20)}</Name>
                <Price>{wish.price}</Price>
            </Details> 
            <Buttons>
                <Button onClick={()=>AddToCart(wish)}>ADD TO CART</Button>
                <Button onClick={()=>Removeitem(wish)}>DELETE ITEM</Button>
            </Buttons>
        </Wrapper>
        ))}
        </Flex> </> }
        
        <Footer/>
        <ToastContainer
         theme='dark'
         position="top-right"
         autoClose={1000}
         hideProgressBar
         newestOnTop={true}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover/>
    </Container>
    
  )
}

export default Wishlist
