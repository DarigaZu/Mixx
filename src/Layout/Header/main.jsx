import { Link } from 'react-router-dom';
import './main.scss';
import logo from '../../images/logo.png';
import { FaUser } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md"; 
import { useState } from 'react';

function Header({ wishlist }) {
    const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => {
        setMenuVisible(prev => {
            console.log("Menu visible:", !prev);
            return !prev;
        });
    };
    
    

    return (
        <header className='header container'>
            <nav className='nav'>
                <img src={logo} alt="Logo" />
                <div className="nav_menu">
                    <Link to='/Mix'><p>Home</p></Link>
                    <Link to='/aboutus'><p>About Us</p></Link>
                    <Link to='/category'><p>Category</p></Link>
                </div>
                <div className="nav_icons">
                    <div className='nav_icons_dropdown'>
                        <FaUser className='nav_icons_icon' />
                        <div className='nav_icons_dropdown_content'>
                            <Link to='/login'><p>Log In</p></Link>
                            <Link to='/signup'><p>Sign Up</p></Link>
                        </div>
                    </div>
                    <Link to='/wishlist'><GoHeartFill className='nav_icons_icon' /></Link>
                    <Link to='/cart'><FaCartShopping className='nav_icons_icon' /></Link>
                </div>
                <MdOutlineMenu className='menu_icon' onClick={toggleMenu} />
            </nav>

            <div className={`mobile_menu ${menuVisible ? 'open' : ''}`}>
    <Link to='/login'><p>Log In</p></Link>
    <Link to='/signup'><p>Sign Up</p></Link>
    <Link to='/wishlist'><p>Wishlist</p></Link>
    <Link to='/cart'><p>Cart</p></Link> 
</div>

        </header>
    );
}

export default Header;
