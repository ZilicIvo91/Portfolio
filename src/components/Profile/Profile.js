import React from 'react';
import './Profile.css';
import { FaFacebook } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import office from '../../image/office.jpg';
import { CV_Zilic_Ivo } from '../../CV/CV_Zilic_Ivo.pdf';


export default function Profile() {
    return (
        <>
        <div className='profile-container'>
            <div className="profile-left">
                <h1>Hello...</h1>
                <h1>My name is Ivo</h1>
                <h3>Front-End Developer</h3>
                <p>I can call myself a Junior Front-End Developer. I like to do that, and I would like to do that to the end. I learn quickly, adopt new technologies, and I'm always ready to improve my knowledge...</p>
                <button><a href={CV_Zilic_Ivo}>Download CV</a></button>
            </div>
            <div className='profile-center'>
                <p>FULL NAME: Ivo Žilić</p>
                <p>DATE OF BIRTH: 06.09.1991.</p>
                <p>ADDRESS: Zagreb</p>
                <p>E-MAIL: ivozilic@hotmail.com</p>
                <p>PHONE: 0977691991</p>
            </div>
            <div className='profile-picture'>
                <img src={office} alt="office" />
            </div>
            </div>
            <div className='profile-socialNetworks'>
                <a href="https://www.facebook.com/ivo.zilic/" target="_black"><FaFacebook /></a>
                <a href="https://www.linkedin.com/in/ivo-%C5%BEili%C4%87-ab8879136/" target="_black"><AiFillLinkedin /></a>
                <a href="https://github.com/ZilicIvo91" target="_black"><AiFillGithub /></a>
                <a href="https://www.instagram.com/ivoziliiic/" target="_black"><AiOutlineInstagram /></a>
            </div> 
        </>
    )
}
