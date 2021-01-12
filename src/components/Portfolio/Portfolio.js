import React from 'react';
import './Portfolio.scss';

import { AiOutlineArrowRight } from 'react-icons/ai';
import { GiMusicalScore } from 'react-icons/gi';
import { FcSportsMode } from 'react-icons/fc';
import { GiCookingPot } from 'react-icons/gi';
import { BiCameraMovie } from 'react-icons/bi';
import { GiBookshelf } from 'react-icons/gi';
import Poke_Ball from '../../image/Poke_Ball.png';
import chat from '../../image/chat.jpg';
import tokic from '../../image/tokic.png';

export default function Portfolio() {
    return (
        <div className="portfolio-container">
        <div className="portfolio-firstRow">
            <div className="portfolio-education">
                <h2 className="header">Education</h2>
                <div className="education"><AiOutlineArrowRight /> <span>03.2020 - 09.2020</span> <p>Frontend Developer - Algebra University College, Zagreb</p></div>
                <div className="education"><AiOutlineArrowRight /> <span>03.2019 - 07.2019</span> <p>Project Challeng IT- Education Xamarin, Savonski Brod</p></div>
                <div className="education"><AiOutlineArrowRight /> <span>2014 - 2017</span> <p>Faculty of Mining, Geology and Petroleum Engineering, Zagreb - Master's degree </p></div>
                <div className="education"><AiOutlineArrowRight /> <span>2010 - 2014</span> <p>Faculty of Mining, Geology and Petroleum Engineering, Zagreb - Bachelor's degree</p></div>
                <div className="education">< AiOutlineArrowRight /> <span>2006 - 2010</span> <p>Gymnasium "Matija Mesić", Slavonski Brod</p></div>
            </div>
            <div className="portfolio-interests">
                <h2 className="header">Interests</h2>
                <div className="portfolio-images">
                    <p><GiMusicalScore />  Music</p>
                    <p><FcSportsMode />  Sport</p>
                    <p><GiCookingPot />  Cooking</p>
                    <p><BiCameraMovie />  Movie</p>
                    <p><GiBookshelf /> Books</p>
                </div>
            </div>
        </div>
            <div className="portfolio-projects">
                <h2 className="header">Some Of Projects</h2>
                <div className="portfolio-project">    
                    <a href="https://servisapp.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img src={tokic} alt="Tokic"/> 
                    </a>             
                    
                    <a href="https://pokemon-application.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img src={Poke_Ball} alt="PokeBall"/> 
                    </a>
                    
                    <a href="https://chat-zilic.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img src={chat} alt="chat"/> 
                    </a>       
                </div>
            </div>
        </div>
    )
}
