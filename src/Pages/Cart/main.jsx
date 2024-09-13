import './main.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCart } from "react-icons/io5";

function Cart({ cart, products2, setCart }) {
    const cartItems = products2.filter(product => cart.includes(product.id));
    console.log('Cart items:', cartItems);

    const [quantities, setQuantities] = useState(
        cartItems.reduce((acc, item) => {
            acc[item.id] = 1;
            return acc;
        }, {})
    );

    const [displayPrices, setDisplayPrices] = useState({});

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(id => id !== productId));
        setQuantities(prevQuantities => {
            const newQuantities = { ...prevQuantities };
            delete newQuantities[productId];
            return newQuantities;
        });
    };

    const updatePrice = (productId, targetPrice, increment) => {
        const interval = setInterval(() => {
            setDisplayPrices(prevPrices => {
                const currentPrice = prevPrices[productId] || targetPrice;
                const newPrice = increment > 0
                    ? Math.min(currentPrice + increment, targetPrice)
                    : Math.max(currentPrice + increment, targetPrice);

                if ((increment > 0 && newPrice >= targetPrice) || (increment < 0 && newPrice <= targetPrice)) {
                    clearInterval(interval);
                }
                return { ...prevPrices, [productId]: newPrice };
            });
        }, 50);
    };

    const increaseQuantity = (productId) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: (prevQuantities[productId] || 1) + 1
        }));

        const price = products2.find(item => item.id === productId).price;
        const currentQuantity = quantities[productId] || 1;
        updatePrice(productId, price * (currentQuantity + 1), 400);
    };

    const decreaseQuantity = (productId) => {
        setQuantities(prevQuantities => {
            const currentQuantity = prevQuantities[productId] || 1;
            if (currentQuantity > 1) {
                return {
                    ...prevQuantities,
                    [productId]: currentQuantity - 1
                };
            }
            return prevQuantities;
        });

        const price = products2.find(item => item.id === productId).price;
        const currentQuantity = quantities[productId] || 1;
        updatePrice(productId, price * (currentQuantity - 1), -400);
    };

    if (cartItems.length === 0) {
        return (
            <div className='empty_text'>
                <p className='empty'>Your cart is empty.</p>
                <Link to='/Mix'><button className='button'>Go To Home</button></Link>
            </div>
        );
    }

    return (
        <div className="cart container">
            {cartItems.map(item => {
                const quantity = quantities[item.id] || 1;
                const totalPrice = displayPrices[item.id] || item.price;

                return (
                    <div className="cart_card" key={item.id}>
                        <IoCart className='cart_icon' onClick={() => removeFromCart(item.id)} />
                        <div className="cart_card_img">
                            <img src={item.img} alt={item.name} />
                        </div>
                        <div className="cart_card_text">
                        <div className="cart_card_text_main">
                            <h1 className='h1'>{item.brand_name}</h1>
                            <h3 className="h3">{item.name}</h3>
                        </div>
                        <div className="cart_card_text_menu">
                        <div className="cart_card_text_menu_quantity">
                            <span className="decrease" onClick={() => decreaseQuantity(item.id)}> - </span>
                            <span className="quantity">{quantity}</span>
                            <span className="increase" onClick={() => increaseQuantity(item.id)}> + </span>
                        </div>
                        <div className="cart_card_text_menu_price">
                            <p>
                                {(item.id >= 21 && item.id <= 24) || (item.id >= 31 && item.id <= 32)
                                    ? `${totalPrice}₽`
                                    : `${totalPrice}$`}
                            </p>
                        </div>
                        </div>
                        </div>

                    </div>

                );
            })}
        </div>
    );
}

export default Cart;
