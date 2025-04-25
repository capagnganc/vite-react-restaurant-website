import react from 'react'
import bootstrap from 'bootstrap'
import './css/headerNav.css'
import logo from '../assets/restaurant-logo.png'

const Header = () => { 
    return(
        <>
        <div className='navbar d-block header textColor sticky-top'>
            <img src={logo} className="float-start appLogo" alt="app-logo" />
        <h1 className='text-center my-3'>Amazing Restaurant</h1>

            <ul className='nav rowLinks'>
                <li className='nav item'>
                    <a>About Us</a>
                </li>
                <li className='nav item'>
                    <a>Contact Us</a>
                </li>
            </ul>
        </div>
        </>
    );
}

export default Header;