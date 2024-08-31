// Cart.js
import './main.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";

function Cart({ cart, products2, setCart }) {
    const cartItems = products2.filter(product => cart.includes(product.id));

    // Проверка, что cartItems содержит ожидаемые товары
    console.log('Cart items:', cartItems);

    if (!products2 || products2.length === 0) {
        return (
            <div className='empty_text'>
                <p className='empty'>Your cart is empty.</p>
                <Link to='/'><button className='button'>Go To Home</button></Link>
            </div>
        );
    }

    return (
        <div className="cart container">
            {cartItems.length > 0 ? (
                cartItems.map(item => (
                    <div className="cart_card" key={item.id}>
                        <div className="cart_card_img">
                            <img src={item.img} alt={item.name} />
                        </div>
                        <div className="cart_card_text">
                            <h1 className='h1'>{item.brand_name}</h1>
                            <h3 className="h3">{item.name}</h3>
                            <p>{item.price}₽</p>
                        </div>
                    </div>
                ))
            ) : (
                <div>
                    <p className='empty'>Your cart is empty.</p>
                </div>
            )}
        </div>
    );
}

export default Cart;
