import React, { useState } from 'react';
import Header from "./Header/main";
import { Routes, Route } from "react-router-dom";
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

function Layout({ wishlist, setWishlist, cart, setCart }) {
    const [products, setProducts] = useState([]);

    return (
        <>
            <Header wishlist={wishlist} cart={cart} />
            <Routes>
                <Route path='/Mixx' element={<Home />} />
                <Route path='/aboutus' element={<AboutUs />} />
                <Route path='/wishlist' element={<Wishlist wishlist={wishlist} products={products} setWishlist={setWishlist} />} />
                <Route path='/cart' element={<Cart cart={cart} products2={products} setCart={setCart} />} />
                <Route path='/login' element={<LogIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/shorts' element={<Shorts wishlist={wishlist} setWishlist={setWishlist} setProducts={setProducts} cart={cart} setCart={setCart} />} />
                <Route path='/tshirt' element={<TShirt wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart} setProducts={setProducts} />} />
                <Route path='/shoes' element={<Shoes wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart} setProducts={setProducts} />} />
                <Route path='/category' element={<Category />} />
                <Route path='shoes/:id' element={<ProductDetails setWishlist={setWishlist} setCart={setCart} setProducts={setProducts} />} />
                <Route path='tshirt/:id' element={<ProductDetails2 setWishlist={setWishlist} setCart={setCart} setProducts={setProducts} />} />
                <Route path='shorts/:id' element={<ProductDetails3 setWishlist={setWishlist} setCart={setCart} setProducts={setProducts} />} />
            </Routes>
        </>
    );
}

export default Layout;
