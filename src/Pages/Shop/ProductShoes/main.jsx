import './main.scss';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { IoCartOutline, IoCart } from "react-icons/io5";

function Shoes({ wishlist, setWishlist, setProducts, cart, setCart }) {
    const [products, setLocalProducts] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function getShoes() {
            try {
                const res = await axios.get('https://66b0d7d66a693a95b53a6ab9.mockapi.io/mix');
                setLocalProducts(res.data);
                setProducts(res.data);
            } catch (error) {
                console.error('Error fetching shoes:', error);
            }
        }
        getShoes();
    }, [setProducts]);

    const toggleWishlist = (productId) => {
        setWishlist((prevWishlist) => {
            return prevWishlist.includes(productId)
                ? prevWishlist.filter(id => id !== productId)
                : [...prevWishlist, productId];
        });
    };

    const toggleCart = (productId) => {
        setCart((prevCart) => {
            return prevCart.includes(productId)
                ? prevCart.filter(id => id !== productId) 
                : [...prevCart, productId]; 
        });
    };

    const handleSort = (event) => {
        const sort = event.target.value;
        const sortedProducts = [...products];

        if (sort === 'highToLow') {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (sort === 'lowToHigh') {
            sortedProducts.sort((a, b) => a.price - b.price);
        }
        setLocalProducts(sortedProducts);
    };

    return (
        <div className='shop container'>
            <div className="shop_menu">
                <select onChange={handleSort}>
                    <option value="">Sort</option>
                    <option value="highToLow">Sort By High To Low</option>
                    <option value="lowToHigh">Sort By Low To High</option>
                </select>
                <div className="shop_menu_search">
                    <input type="search" placeholder="Search..." onChange={(event) => setSearch(event.target.value)} />
                </div>
            </div>

            <div className="shop_product">
                {products.filter(obj => obj.name.toLowerCase().includes(search.toLowerCase())).map((product) => (
                    <div className="shop_product_card" key={product.id}>
                        <div className="shop_product_card_img">
                            <div className="shop_product_card_img_wish">
                                <div>
                                    {wishlist.includes(product.id) ? (
                                        <IoMdHeart className='wishlist active' onClick={() => toggleWishlist(product.id)} />
                                    ) : (
                                        <IoMdHeartEmpty className='wishlist' onClick={() => toggleWishlist(product.id)} />
                                    )}
                                </div>
                                <div>
                                    {cart.includes(product.id) ? (
                                        <IoCart className='cart active' onClick={() => toggleCart(product.id)} />
                                    ) : (
                                        <IoCartOutline className='cart' onClick={() => toggleCart(product.id)} />
                                    )}
                                </div>
                            </div>
                            <img className='img' src={product.img} alt={product.name} />
                        </div>
                        <div className="shop_product_card_text">
                            <h1><Link to={`/shoes/${product.id}`} className='h1'>{product.brand_name}</Link></h1>
                            <h3><Link to={`/shoes/${product.id}`} className="h3">{product.name}</Link></h3>
                            <p>{product.price}$</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shoes;
