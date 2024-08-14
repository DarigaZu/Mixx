import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './main.scss';
import img_1 from '../../images/block1.png';
import img_2 from '../../images/block11.png';

function Home() {
    const [products, setProducts] = useState([])
    const [products2, setProducts2] = useState([])
    const [products3, setProducts3] = useState([])

    useEffect(() => {
        async function getShoes() {
            const res = await axios.get('https://66b0d7d66a693a95b53a6ab9.mockapi.io/mix')
            setProducts(res.data)
        }
        getShoes()
    }, [])


    useEffect(() => {
        async function getTShirt() {
            const res = await axios.get('https://66b0d7d66a693a95b53a6ab9.mockapi.io/mixTShirts')
            setProducts2(res.data)
        }
        getTShirt()
    }, [])

    useEffect(() => {
        async function getShorts() {
            const res = await axios.get('https://66b1ec391ca8ad33d4f5befb.mockapi.io/ShortsAndSkirts')
            setProducts3(res.data)
        }
        getShorts()
    }, [])

    const slides = [
        {
            id: 1,
            title: "Discover the best in fashion",
            text: "This is an online store that contains popular brands. Explore our exclusive collection featuring top brands such as Balenciaga, Levi's, Vasilinciaga, Converse and Louis Vuitton. Find your perfect style with our selection: T-shirts: stylish and fashionable items from famous brands. Shoes: High quality shoes that catch the eye. Shirts: Elegant and sophisticated designs for any occasion. Immerse yourself in the world of fashion with MIX and redefine your wardrobe.",
            img: img_1
        },
        {
            id: 2,
            title: "Get a taste of style",
            text: "Welcome to our online boutique, where fashion meets elegance. Dive into our curated selection featuring renowned brands like Balenciaga, Levi's, Converse, Louis Vuitton and Vasilinsiaga. Discover your unique style with our diverse offerings: T-Shirt: Trendy and chic pieces that elevate your wardrobe. Footwear: Premium quality shoes designed for comfort and flair. Shorts: Stylish shorts perfect for any times. Join us on this fashion journey with MIX and transform your look today!",
            img: img_2
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000); 

        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="home container">
            <div className="home_block-1">
                <div className="carousel-controls">
                    <button onClick={prevSlide}>&lt;</button>
                </div>
                <div className="home_block-1_text">
                    <h1>{slides[currentSlide].title}</h1>
                    <p>{slides[currentSlide].text}</p>
                    <Link to='/category'><button>Go to shop</button></Link>
                </div>
                <div className="home_block-1_img">
                    <img src={slides[currentSlide].img} alt="Clothes" />
                </div>
                <div className="carousel-controls">
                    <button onClick={nextSlide}>&gt;</button>
                </div>
            </div>

            <div className="home_block2">
                <h1 className='h1'>Shoes</h1>
                <div className="home_block2_product">
            {products.slice(0,4).map((product) => (
                <div className="home_block2_product_card" key={product.id}>
                    <div className="home_block2_product_card_img">
                        <img src={product.img} />
                    </div>

                    <div className="home_block2_product_card_text">
                        <h1>{product.brand_name}</h1>
                        <h3>{product.name}</h3>
                        <p>{product.price}$</p>
                    </div>
                </div>
            ))}
        </div>
            </div>

            
            <div className="home_block3">
                <h1 className='h1'>T-Shirt</h1>
                <div className="home_block3_product">
            {products2.slice(0,4).map((product) => (
                <div className="home_block3_product_card" key={product.id}>
                    <div className="home_block3_product_card_img">
                        <img src={product.img} />
                    </div>

                    <div className="home_block3_product_card_text">
                        <h1>{product.brand_name}</h1>
                        <h3>{product.name}</h3>
                        <p>{product.price}$</p>
                    </div>
                </div>
            ))}
        </div>
            </div>

            <div className="home_block4">
                <h1 className='h1'>Shorts And Skirts</h1>
                <div className="home_block4_product">
            {products3.slice(0,4).map((product) => (
                <div className="home_block4_product_card" key={product.id}>
                    <div className="home_block4_product_card_img">
                        <img src={product.img} />
                    </div>

                    <div className="home_block4_product_card_text">
                        <h1>{product.brand_name}</h1>
                        <h3>{product.name}</h3>
                        <p>{product.price}$</p>
                    </div>
                </div>
            ))}
        </div>
            </div>

        </div>
    );
}

export default Home;
