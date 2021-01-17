import React, {useState} from 'react'; 
import {ReactComponent as CloseMenu} from './img/menu.png';
import {ReactComponent as MenuIcon} from './img/x.png';
import './menu.css'; 
import logo from './img/logo.png';

const Header=()=>{
    //at firt the state is set to false because the mobile menu is closed
    const [click, setClick]= useState(false);
    const handleClick = ()=> setClick(!click); 
    //setClick will update the menu to close
    const closeMobileMenu =()=> setClick(false);
    return (
        <div className='header'>
            <div className='logo-nav'>
                <div className='logo-container'>
                    <a href='#'>
                     <img href='#main' className="gt-logo" src={logo}></img>
                    </a>
                </div>
            </div> 
            <ul className='singin-up nav-options'>
                <li onClick={closeMobileMenu}>
                    <a  className="signup-btn sign-in" href='#signin'> Sign In</a>
                </li>
            </ul>

            <div classname="mobile-menu" onClick={handleClick}>

            </div>
        </div>
    )
}

export default Header; 
