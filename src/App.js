import './App.css';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from './Pages/ErrorPage';
import ForgotPassword from './Pages/ForgotPassword';
import ThemeContext from './Components/Context/ThemeContext';
import CartContext from './Components/Context/CartContext';
import Wishlist from './Pages/Wishlist';
import Products from './Components/Products';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
  return (
  <CartContext>
      <ThemeContext>
      <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Register' element={<Register/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path= '/Wishlist' element={<Wishlist/>}/>
            <Route path= '/ForgotPassword' element={<ForgotPassword/>}/>
            <Route path= '/Products'element={<><Navbar/> <Products/> <Footer/></>}/>
            <Route path='*' element={<ErrorPage/>}/>
          </Routes>        
      </Router>
      </ThemeContext>
    </CartContext>
  );
}

export default App;
