import React from 'react';
import './Profile.css';
import { FaFacebook } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className="profile-left">
                <h2>Hello...</h2>
                <h2>My name is Ivo</h2>
                <h3>Front-End Developer</h3>
                <p>I can call myself a Junior Front-End Developer. I like to do that, and I would like to do that to the end. I learn quickly, adopt new technologies, and I'm always ready to improve my knowledge...</p>
                <button>Download</button>
            </div>
            <div className='profile-center'>
                <p>FULL NAME: Ivo Žilić</p>
                <p>DATE OF BIRTH: 06.09.1991.</p>
                <p>ADDRESS: Zagreb</p>
                <p>E-MAIL: ivozilic@hotmail.com</p>
                <p>PHONE: 0977691991</p>
            </div>
            <div className='profile-picture'>

            </div>
            <div className='profile-socialNetworks'>
                <FaFacebook />
                <AiFillLinkedin />
                <AiFillGithub />
                <AiOutlineInstagram />
            </div>
            
        </div>
    )
}
