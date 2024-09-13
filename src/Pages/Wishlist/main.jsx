import './main.scss';
import React, { useState } from 'react';
import { IoMdHeart } from "react-icons/io";
import { Link } from 'react-router-dom';

function Wishlist({ wishlist, products, setWishlist }) {
    const [hoveredItemId, setHoveredItemId] = useState(null);

    if (!products || products.length === 0) {
        return (
            <div className='empty_text'>
                <p className='empty'>Your favorites list is empty.</p>
                <Link to='/'><button className='button'>Go To Home</button></Link>
            </div>
        );
    }

    const wishlistItems = products.filter(product => wishlist.includes(product.id));

    const removeFromWishlist = (productId) => {
        setWishlist((prevWishlist) => prevWishlist.filter(id => id !== productId));
    };

    return (
        <div className="wishlist container">
            {wishlistItems.length > 0 ? (
                wishlistItems.map(item => (
                    <div
                        className="wishlist_card"
                        key={item.id}
                        onMouseEnter={() => setHoveredItemId(item.id)}
                        onMouseLeave={() => setHoveredItemId(null)}
                    >
                        <div className="wishlist_card_img">
                            <img src={item.img} alt={item.name} />
                            {hoveredItemId === item.id && (
                                <IoMdHeart
                                    className="wishlist_icon"
                                    onClick={() => removeFromWishlist(item.id)}
                                />
                            )}
                        </div>

                        <div className="wishlist_card_text">
                            <h1 className='h1'>{item.brand_name}</h1>
                            <h3 className="h3">{item.name}</h3>
                            <p className='p'>
                                {(item.id >= 21 && item.id <= 24) || (item.id >= 31 && item.id <= 32)
                                    ? `${item.price}₽`
                                    : `${item.price}$`}
                            </p>

                        </div>
                    </div>
                ))
            ) : (
                <div>
                    <p className='empty'>Your favorites list is empty.</p>
                    <Link to='/Mixx'><button className='button'>Go To Home</button></Link>
                </div>
            )}
        </div>
    );
}

export default Wishlist;
