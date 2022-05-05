import { Add, Remove } from '@material-ui/icons'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { theme } from '../Components/Context/ThemeContext'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Mobile } from '../responsive'
import{ Productitem } from '../Components/Context/CartContext'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify'




const Container = styled.div`
background: ${({themevalue})=>!themevalue ? '#F5F5F5' : '#202225'};
color: ${({themevalue})=>themevalue? '#E5E5E5': 'black'};
/* background-color: yellow; */
`

const Wrapper = styled.div`
background: ${({themevalue})=>!themevalue ? '#F5F5F5' : '#202225'};
color: ${({themevalue})=>themevalue? '#E5E5E5': 'black'};
${Mobile({padding: '10px'})}
`

const Title = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 10vh;
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

const Cartmsg= styled.div`
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


const Top = styled.div`
/* background-color: blue; */
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`

const TopTexts= styled.div`
${Mobile({display: 'none'})}
`

const TopText= styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`

const Bottom = styled.div`
/* background-color: green; */
display: flex;
flex-wrap: wrap;
padding:1rem 1.5rem;
justify-content: space-between;
${Mobile({flexDirection: 'column', alignItems: 'center', padding: '0rem'})}
`

const Info = styled.div`
/* background-color: red; */
padding-bottom: 10px;
display: flex;
flex-wrap: wrap;
`

const ProductContainer= styled.div`
width: 60%;
display: flex;
flex-wrap: wrap;
flex-direction: column;
${Mobile({width: 'auto'})}
`


const Product = styled.div`
display: flex;
/* padding: 25px 0px; */
justify-content: space-between;
${Mobile({flexDirection: 'column', padding:'25px 0px'})}

`

const ProductDetail = styled.div`
/* background-color: yellow; */
height: 30vh;
display: flex;
align-items: center;
width: 100%;
`

const Image = styled.img`
width: 20%;
height:70%;
object-fit: cover;
${Mobile({width: '40%', height:'100%'})}
`

const Details = styled.div`
/* background-color: red; */
padding: 25px;
display: flex;
flex-direction: column;
height: 100%;
justify-content: space-around;
${Mobile({height:'100%', justifyContent:'space-between', padding:'5px 5px 5px 25px'})}
`

const ProductName = styled.span``

const Productdesc = styled.span``

const ProductId = styled.span``

const PriceDetail = styled.span`
width: 20%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
${Mobile({paddingTop:'20px', width: 'auto', border: 'none'})}
`

const ProductAmountContainer = styled.div`
/* background-color: yellow; */
display: flex;
align-items: center;
margin-bottom: 20px;
`

const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${Mobile({margin: '5px 15px'})}

`

const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${Mobile({marginBottom: '20px'})}

`

const RemoveBtn = styled.button`
padding: 10px;
background-color: teal;
color: white;
font-weight: 600px;
border: none;
cursor: pointer;
`

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`

const Summary = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
/* background-color: yellow; */
width: 30%;
border: 0.5px solid lightgray;
border-radius: 10px;
padding:30px;
margin-top: 35px;
height: 60vh;
${Mobile({width: 'auto'})}
`

const SummaryTitle = styled.h1`
text-align: center;
font-weight: 200;
`

const SummaryItem = styled.div`
/* background-color: blue; */
/* margin: 30px 0px; */
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === 'total'&& '500'};
font-size: ${props=>props.type==='total' && '24px'};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
width: 100%;
padding: 10px;
background-color: teal;
color: white;
font-weight: 600px;
border: none;
cursor: pointer;
`



const Cart = () => {

    let navigate = useNavigate();

    const {themevalue} = useContext(theme)

    const {cartproducts, SetCartProducts,wishlist} = useContext(Productitem);

    const Removeitem = (product)=>{
        const newcart = cartproducts.filter(cart=>cart.id!==product.id)
        SetCartProducts(newcart)
        toast('Item successfully removed')
    }


    const add = (product) => {
        product.qty+=1
        const newcart = cartproducts.map(e=>e)
        SetCartProducts(newcart)
      };

      const remove = (product) => {
        product.qty-=1
        const newcart = cartproducts.map(e=>e)
        SetCartProducts(newcart)
      };

      const checkout = ()=>{

        toast.success('ORDER PLACED, PLEASE EXPECT IT TO BE DELIVERED IN 3-5 BUSINESS DAYS',{
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                limit:1
        })
      }
    

  return (
    <Container themevalue={themevalue}>
      <Navbar/>
      <Title>YOUR BAG</Title>
     <Wrapper themevalue={themevalue}>
         {cartproducts.length===0 ? 
         <Emptycart>
            <Emptybagimage src='https://www.svgrepo.com/show/146120/shopping-bag.svg'/>
            <Cartmsg>
                <Msgtitle>HEY, IT FEELS SO LIGHT!</Msgtitle>
                 <Msgtext>There is nothing in your bag, lets add some items.</Msgtext>
            </Cartmsg> 
            <TopButton onClick={()=>{navigate('/Wishlist')}}> ADD ITEMS FROM WISHLIST</TopButton>             
         </Emptycart>: 
         <>
             <Top>
         <TopButton  onClick={()=>{navigate('/Home')}}>CONTINUE SHOPPING</TopButton>
         <TopTexts>
             <TopText>Shopping Bag ({cartproducts.length})</TopText>
             <TopText onClick={()=>{navigate('/Wishlist')}}>Your Wishlist ({wishlist.length})</TopText>
         </TopTexts>
         <TopButton onClick={()=>{navigate('/Wishlist')}}>MY WISHLIST</TopButton>
         </Top>
         <Bottom>
             <ProductContainer>
                    {cartproducts.map((product)=>(
               <div key={Math.random()}> <Info>
                    <Product>  
                        <ProductDetail>                        
                            <Image src={product.image}/>
                            <Details>
                                <ProductName><b>Product: </b>{product.title}</ProductName>
                                <Productdesc><b>Product details: </b>{product.description.slice(0,145)}</Productdesc>
                                <ProductId><b>ID: </b>{product.id}</ProductId>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add onClick={(e) => add(product)}/>
                                    <ProductAmount>{product.qty}</ProductAmount>
                            {product.qty < 2 ? <Remove  disabled  /> : <Remove onClick={(e) => remove(product)}/>}
                            </ProductAmountContainer>                        
                            <ProductPrice>{parseInt(product.qty*product.price)}</ProductPrice>
                            <RemoveBtn onClick={()=>Removeitem(product)}>Remove Item</RemoveBtn>
                        </PriceDetail> 
                    </Product>
                </Info>
                <Hr></Hr> </div>
                    ))}

            </ProductContainer>

            <Summary cartproducts={cartproducts}>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>₹ {cartproducts.reduce((total, Item)=>{return total+ (parseInt(Item.price*Item.qty))},0)}</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>₹ {parseInt(40/100*(cartproducts.reduce((total, Item)=>{return total+ (parseInt(Item.price*Item.qty))},0)))<400? 50:120}</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>₹ {parseInt(50/100*(cartproducts.reduce((total, Item)=>{return total+ (parseInt(Item.price*Item.qty))},0)))<400?0:50}</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem  type= 'total'>
                    <SummaryItemText >Total</SummaryItemText>
                    <SummaryItemPrice>₹ {(cartproducts.reduce((total, Item)=>{return total+ (parseInt(Item.price*Item.qty))},0))+(parseInt(40/100*(cartproducts.reduce((total, Item)=>{return total+ (parseInt(Item.price*Item.qty))},0)))<400? 50:120)-(parseInt(50/100*(cartproducts.reduce((total, Item)=>{return total+ (parseInt(Item.price*Item.qty))},0)))<400?0:50)}</SummaryItemPrice>
                </SummaryItem>
                <Button onClick={checkout}>CHECKOUT NOW</Button>
            </Summary>
         </Bottom> 

         </>       }
     </Wrapper>
      <Footer/>
      <ToastContainer
        theme='dark'
        position="top-left"
         autoClose={1000}
         hideProgressBar
         newestOnTop={true}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         />
    </Container>
  )
}

export default Cart
