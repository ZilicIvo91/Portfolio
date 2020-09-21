import React from 'react';
import './Portfolio.css';

import { AiOutlineArrowRight } from 'react-icons/ai';
import { GiMusicalScore } from 'react-icons/gi';
import { FcSportsMode } from 'react-icons/fc';
import { GiCookingPot } from 'react-icons/gi';
import { BiCameraMovie } from 'react-icons/bi';
import { GiBookshelf } from 'react-icons/gi';

export default function Portfolio() {
    return (
        <div className="portfolio-container">
            <div className="portfolio-education">
            <h2>Education</h2>
            <p><AiOutlineArrowRight /> 2006 - 2010 Gimnazija "Matija Mesić", Slavonski Brod</p>
            <p><AiOutlineArrowRight /> 2010 - 2014 Faculty of Mining, Geology and Petroleum Engineering, Zagreb - Bachelor's degree</p>
            <p><AiOutlineArrowRight /> 2014 - 2017 Faculty of Mining, Geology and Petroleum Engineering, Zagreb - Master's degree </p>
            <p><AiOutlineArrowRight /> 03.2019 - 07.2019 Project Challeng IT- Education Xamarin, Savonski Brod</p>
            <p><AiOutlineArrowRight /> 03.2020 - 09.2020 Frontend Developer - Algebra University College, Zagreb</p>
            </div>
            <div className="portfolio-interests">
                <h2>Interests</h2>
               <p> <GiMusicalScore />  Music</p>
               <p> <FcSportsMode />  Sport</p>
                <p><GiCookingPot />  Cooking</p>
                <p><BiCameraMovie />  Movie</p>
                <p><GiBookshelf /> Books</p>
            </div>
            <div className="portfolio-portfolio">
                <h2>Some Of Projects</h2>
                <h2>Education</h2>
            <p><AiOutlineArrowRight /> 2006 - 2010 Gimnazija "Matija Mesić", Slavonski Brod</p>
            <p><AiOutlineArrowRight /> 2010 - 2014 Faculty of Mining, Geology and Petroleum Engineering, Zagreb - Bachelor's degree</p>
            <p><AiOutlineArrowRight /> 2014 - 2017 Faculty of Mining, Geology and Petroleum Engineering, Zagreb - Master's degree </p>
            <p><AiOutlineArrowRight /> 03.2019 - 07.2019 Project Challeng IT- Education Xamarin, Savonski Brod</p>
            <p><AiOutlineArrowRight /> 03.2020 - 09.2020 Frontend Developer - Algebra University College, Zagreb</p>
            
            </div>
        </div>
    )
}
