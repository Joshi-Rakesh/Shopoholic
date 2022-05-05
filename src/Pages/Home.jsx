import React from 'react'
import Announcement from '../Announcement/Announcement'
import Catogories from '../Components/Catogories'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Products from '../Components/Products'
import Slider from '../Components/Slider'





const Home = () => {
  return (
    <div>    
    <Announcement/>
    <Navbar/>  
    <Slider />
    <Catogories/>
    <Products/>
    <Newsletter/>
    <Footer/>        
    </div>
  )
}

export default Home
