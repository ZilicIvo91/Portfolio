import React from 'react';
import './Summary.css';

import { AiOutlineArrowRight } from 'react-icons/ai';

export default function Summary() {
    return (
        <div className="summary-container">
            <div className="summary-myAbilities">
                <h2>My Abilities</h2>
                <p><AiOutlineArrowRight /> MS Office package</p>
                <p><AiOutlineArrowRight /> HTML 5</p>
                <p><AiOutlineArrowRight /> CSS 3</p>
                <p><AiOutlineArrowRight /> SASS</p>
                <p><AiOutlineArrowRight /> JavaScript</p>
                <p><AiOutlineArrowRight /> Bootstrap</p>
                <p><AiOutlineArrowRight /> React</p>
            </div>
            <div className="summary-personalQualities">
                <h2>Personal Qualities</h2>
                <p><AiOutlineArrowRight /> Dedicated to work</p>
                <p><AiOutlineArrowRight /> Communicative and responsible</p>
                <p><AiOutlineArrowRight /> Fast learning and adoption of new technologies</p>
                <p><AiOutlineArrowRight /> Driver license: B category</p>
            </div>
            <div className="summary-otherAbilities">

            <h2>Other Abilities</h2>
            <p><AiOutlineArrowRight /> English - Professional Working Proficiency</p>
            <p><AiOutlineArrowRight /> German - Full Professional Proficiency</p>
            </div>
        </div>
    )
}
