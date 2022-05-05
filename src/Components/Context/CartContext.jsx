import React, { createContext, useEffect, useState } from 'react'

export const Productitem = createContext();

const cart = JSON.parse(localStorage.getItem('cartproducts') || '[]')
const wish = JSON.parse(localStorage.getItem('wishlist') || '[]')
const loginstatus = JSON.parse(localStorage.getItem('loginstatus') || false)
const formdata = JSON.parse(localStorage.getItem('form') || '[]' );



const CartContext = ({children}) => {

    const [product, SetProduct] = useState([]);
    const [cartproducts, SetCartProducts] = useState(cart)
    const [wishlist, SetWishlist] = useState(wish)
    const [translate, SetTranslate]= useState(true);
    const [searchterm, SetSearchTerm] = useState('');
    const [filtered, SetFiltered] = useState([]);
    const [data, setData] = useState({
      fname:'',
      lname:'',
      email:'',
      password:'',
      agree:true});
    const [completedata, setCompleteData] = useState(formdata)
    const [status, setStatus] = useState(loginstatus);
    const [logindata, setLoginData] = useState({
      email:'',
      password:'',
      agree:false
    }) 
    
    const burger = ()=>{
      SetTranslate(!translate)
        }


useEffect(() => {
  localStorage.setItem('cartproducts', JSON.stringify(cartproducts))
  localStorage.setItem('wishlist', JSON.stringify(wishlist))
  localStorage.setItem('form', JSON.stringify(completedata))
  localStorage.setItem('loginstatus', JSON.stringify(status))
}, [cartproducts,wishlist,status,completedata]);     



  return (
    <Productitem.Provider value={{product,SetProduct,cartproducts, SetCartProducts, wishlist, SetWishlist,translate,SetTranslate, burger,searchterm,SetSearchTerm,filtered, SetFiltered,data, setData,logindata, setLoginData,status, setStatus,completedata, setCompleteData}}>
      {children}
    </Productitem.Provider>
  )
}

export default CartContext


