import React, { useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import picture from '../../image/picture.jpg';
import { MenuItems } from '../../helpers/MenuItems';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';


export default function Navbar() {
    const [clicked, setclicked] = useState(true);
    const [value, setValue] = useState("");

    const handleClick = (index) =>{
        setclicked(!clicked);
        setValue(index)
    };
    return (
        <nav className='navbar-Items'>
            <img src={picture} alt='profile' />
            
            <div className='menu-icon' onClick={handleClick}>
                {clicked ? <FaTimes /> : <FaBars />}
            </div>

            <ul className=
            {clicked ? 'nav-menu active' : 'nav-menu'}
            >
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index} className={`nav-links ${index === value && 'nav-links-active'}`} onClick={() => handleClick(index)}>
                            <Link to={item.url}>{item.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
