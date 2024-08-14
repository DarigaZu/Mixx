import { Routes, Route } from "react-router-dom";
import Header from "./Header/main";
import Home from "../Pages/Home/main";
import AboutUs from "../Pages/AboutUs/main";
import Wishlist from "../Pages/Wishlist/main";
import Cart from "../Pages/Cart/main";
import LogIn from "../Pages/LogIn/main";
import SignUp from "../Pages/SignUp/main";
import TShirt from "../Pages/Shop/ProductTShirt/main";
import Shoes from "../Pages/Shop/ProductShoes/main";
import Shorts from "../Pages/Shop/ProductShorts/main";
import Category from "../Pages/Category/main";
import ProductDetails from "../Pages/Shop/ProductDetails/main";
import ProductDetails2 from "../Pages/Shop/ProductDetails2/main";
import ProductDetails3 from "../Pages/Shop/ProductDetails3/main";

function Layout(){
    return(
        <>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<LogIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/shorts' element={<Shorts/>}/>
            <Route path='/tshirt' element={<TShirt/>}/>
            <Route path='/shoes' element={<Shoes/>}/>
            <Route path='/category' element={<Category/>}/>
            <Route path='shoes/:id' element={<ProductDetails/>} />
            <Route path='tshirt/:id' element={<ProductDetails2/>} />
            <Route path='shorts/:id' element={<ProductDetails3/>} />
        </Routes>
        </>
    )
}

export default Layout;