import React from 'react';
import './Profile.scss';
import { FaFacebook } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import office from '../../image/office.jpg';
import CV_Zilic_Ivo from '../../CV/CV_Zilic_Ivo.pdf';


export default function Profile() {
    return (
        <>
        <div className='profile-container'>
            <div className="profile-left">
                <h1>Hello...</h1>
                <h1>My name is Ivo</h1>
                <h3>Front-End Developer</h3>
                <p>I can call myself a Junior Front-End Developer. I learn quickly, adopt new technologies, and I'm always ready to improve my knowledge...</p>
                <button><a href={CV_Zilic_Ivo} target="_black">Download CV</a></button>
            </div>
            <div className="profile-center">
                <div className="profil-center-contact">
                    <p>FULL NAME: </p><span>Ivo Žilić</span>
                </div>
                <div className="profil-center-contact">
                    <p>DATE OF BIRTH: </p><span>06.09.1991.</span>
                </div>
                <div className="profil-center-contact">
                    <p>ADDRESS: </p><span>Zagreb</span>
                </div>
                <div className="profil-center-contact">
                    <p>E-MAIL: </p><span>ivozilic@hotmail.com</span>
                </div>
                <div className="profil-center-contact">
                    <p>PHONE: </p><span>+385 97 7691991</span>
                </div>
            </div>
            <div className='profile-picture'>
                <img src={office} alt="office" />
            </div>
            </div>
            <div className="profile-socialNetworks">
                <a href="https://www.facebook.com/ivo.zilic/" target="_black"><FaFacebook /></a>
                <a href="https://www.linkedin.com/in/ivo-%C5%BEili%C4%87-ab8879136/" target="_black"><AiFillLinkedin /></a>
                <a href="https://github.com/ZilicIvo91" target="_black"><AiFillGithub /></a>
                <a href="https://www.instagram.com/ivoziliiic/" target="_black"><AiOutlineInstagram /></a>
            </div> 
        </>
    )
}
