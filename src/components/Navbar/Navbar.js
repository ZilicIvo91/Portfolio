import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import picture from '../../image/picture.jpg';
import { MenuItems } from './MenuItems';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';


export default function Navbar() {
    const [clicked, setclicked] = useState(false);

    const handleClick = (e) =>{
        setclicked(!clicked);
    }
    return (
        <nav className='Navbar-Items'>
           

            <Link to="/"><img src={picture} alt='picture' /></Link>
            <div className='menu-icon' onClick={handleClick}>
                {clicked ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.url}>{item.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
