import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './main.scss';

function ProductDetails2() {
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

    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await axios.get(`https://66b0d7d66a693a95b53a6ab9.mockapi.io/mixTShirts/${id}`);
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
                <img src={product.img} alt={product.name} />
            </div>

            <div className="details_text">
                <h1>{product.brand_name}</h1>
                <h3>{product.name}</h3>
                <div className="details_text_min2">
                    <p>Price:</p>
                    <p>{product.id >= 7 && product.id <= 8 ? `${product.price}₽` : `${product.price}$`}</p>
                </div>
                <div className="details_text_min">
                    <p>Category:</p>
                    <p>T-Shirt</p>
                </div>
                <div className="details_text_min3">
                    <p>Quantity:</p>
                    <div className="details_text_min3_qty">
                        <span onClick={decrement}>-</span>
                        <span className="property-numb">{count}</span>
                        <span onClick={increment}>+</span>
                    </div>
                </div>
                <div className="details_text_butt">
                    <button>Add to Cart</button>
                    <button>Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails2;
