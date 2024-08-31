import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout/main';
import { useState } from 'react';

function App() {
    const [wishlist, setWishlist] = useState([]); 
    const [cart, setCart] = useState([]); 

    return (
        <BrowserRouter>
            <Layout wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart}/>
        </BrowserRouter>
    );
}

export default App;
