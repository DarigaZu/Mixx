import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './main.scss';

function ProductDetails3({ setWishlist, setCart }) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const addToCart = () => {
        setCart(prevCart => {
            if (!prevCart.includes(product.id)) {
                return [...prevCart, product.id];
            }
            return prevCart;
        });
    };

    const addToWishlist = () => {
        setWishlist(prevWishlist => {
            if (!prevWishlist.includes(product.id)) {
                return [...prevWishlist, product.id];
            }
            return prevWishlist; 
        });
    };

    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await axios.get(`https://66b1ec391ca8ad33d4f5befb.mockapi.io/ShortsAndSkirts/${id}`);
                setProduct(res.data);
            } catch (error) {
                console.error("Ошибка при загрузке продукта:", error);
            }
        }
        fetchProduct();
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="details container">
            <div className="details_img">
                <img src={product.img} alt={product.name} className='img'/>
            </div>

            <div className="details_text">
                <h1 className='h1'>{product.brand_name}</h1>
                <h3 className='h3'>{product.name}</h3>
                <div className="details_text_min2">
                    <p className='p'>Price:</p>
                    <p className='p'>{product.id >= 31 && product.id <= 32 ? `${product.price}₽` : `${product.price}$`}</p>
                </div>
                <div className="details_text_min">
                    <p className='p'>Category:</p>
                    <p className='p'>Skirts And Shorts</p>
                </div>
                <div className="details_text_min3">
                    <p className='p'>Color:</p>
                    <p className='p'>{product.color}</p>
                </div>
                <div className="details_text_butt">
                    <button className='button' onClick={addToCart}>Add to Cart</button>
                    <button className='button' onClick={addToWishlist}>Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails3;
