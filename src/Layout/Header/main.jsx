
import { Link } from 'react-router-dom';
import './main.scss'
import logo from '../../images/logo.png'
import { FaUser } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
import { FaCartShopping } from "react-icons/fa6";

function Header() {
    return (
        <header className='header container'>
            <nav className='nav'>
                <img src={logo} />
                <div className="nav_menu">
                    <Link to='/'><p>Home</p></Link>
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
            </nav>
        </header>
    )
}

export default Header;