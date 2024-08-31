import './main.scss'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img_1 from '../../images/mix_10 (1).png'
import img_2 from '../../images/mix_12 (1).png'
import img_3 from '../../images/mix_13.png'
import img_4 from '../../images/mix_14 (1).png'
import img_5 from '../../images/mix_15 (1).png'
import img_6 from '../../images/mix_11.jpg'
import img_hover from '../../images/mix_11.png';
import img_7 from '../../images/mix_16.png'
import img_8 from '../../images/mix_17.png'
import img_hover_2 from '../../images/mix_18.jpg'
import img_9 from '../../images/mix_19.jpg'
import img_10 from '../../images/mix_20.png'
import img_11 from '../../images/mix_22.png'
import img_12 from '../../images/mix_21.png'

function AboutUs() {
    const [isHovered, setIsHovered] = useState(false);
    const [currentImage, setCurrentImage] = useState(img_7);
    const images = [img_7, img_8];
    let currentIndex = 0;

    useEffect(() => {
        const timer = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            setCurrentImage(images[currentIndex]);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='about'>

            <div className="about_block1">
                <div className="about_block1_text">
                    <h1>BALENCIAGA</h1>
                    <p>Balenciaga: A trailblazer in the world of fashion, Balenciaga boasts a legacy that spans over a century. Renowned for its avant-garde designs and innovative approach, the brand has redefined luxury with a bold and distinctive aesthetic. Each piece from Balenciaga is not merely clothing; it embodies a statement of individuality and artistic expression. From striking footwear to oversized silhouettes, Balenciaga offers a unique blend of comfort and high fashion, making it a favorite among trendsetters. With Balenciaga, you can effortlessly elevate your wardrobe, creating looks that are both daring and sophisticated. Whether you're attending a gallery opening, strolling through the city, or enjoying a night out, Balenciaga's creations ensure you stand out. Join the ranks of fashion enthusiasts who embrace the fusion of tradition and modernity that defines Balenciaga!</p>
                </div>
                <div className="about_block1_img">
                    <img src={currentImage} />
                </div>
            </div>

            <div className="about_block2">
                <img src={isHovered ? img_hover : img_6}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)} />
                <div className="about_block2_text">
                    <h1>Levi's</h1>
                    <p>Levi's: An icon of classic denim, Levi's proudly represents a rich history that dates back more than 150 years. The brand has become synonymous with quality and style, offering a variety of styles to suit every occasion.
                        Every item from Levi's is not just clothing, but a real find for those who value comfort and elegance. From classic jeans to stylish jackets, Levi's offers versatile solutions to create the perfect look.
                        With Levi's you can easily create a stylish everyday look that will highlight your individuality. Whether it's a meeting with friends, a walk around the city or an evening event, Levi's items will always be appropriate and relevant.Join millions of fans of this brand and discover a world where classics meet modern trends!</p>
                </div>
            </div>

            <div className="about_main">
                <h1>We are the MIX online store</h1>
                <h1>We offer 5 types of clothing categories</h1>
                <div className="about_main_img">
                    <img className='logo' src={img_1} />
                    <img src={img_2} />
                    <img src={img_4} />
                    <img src={img_5} />
                    <img className='logo' src={img_3} />
                </div>
            </div>

            <div className="about_block3">
            <div className="about_block3_text">
                    <h1>Converse</h1>
                    <p>Converse: A street style icon, Converse has been inspiring youth around the world for over 100 years. The brand has become a symbol of creativity and self-expression, offering a variety of styles for every occasion.
Each pair of Converse shoes is not just sneakers, but a real find for those who value comfort and uniqueness. From classic Chuck Taylors to modern collections, Converse offers versatile solutions to create the perfect look.
With Converse, you can easily create a stylish casual look that will highlight your personality. Whether it's meeting with friends, walking around the city or an evening event, Converse items will always be appropriate and relevant. Join millions of fans of this brand and discover a world where classic meets modern!</p>
                </div>
            <img src={isHovered ? img_hover_2 : img_9}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)} />
            </div>

            <div className="about_block4">
            <div className="about_block4_links">
                <Link to='/tshirt'><p style={{left:'1%'}}>VASILINCIAGA</p></Link>
                <Link to='/shorts'><p style={{left:'35%'}}>LOUIS VUITTON</p></Link>
                <Link to='/tshirt'><p style={{left:'69%'}}>VASILINCIAGA</p></Link>
                </div>
                <div className="about_block4_img">
                <Link to='/tshirt'><img src={img_10}/></Link>
                <Link to='/shorts'><img  src={img_11}/></Link>
                <Link to='/tshirt'><img src={img_12}/></Link>
                </div>
            </div>

        </div>
    )

}

export default AboutUs;