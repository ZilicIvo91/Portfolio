import React from 'react';
import './Contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineMobile } from 'react-icons/ai';
import coffeeBreak  from '../../image/coffeeBreak.jpg';



export default function Contact() {
    return (
        <div className="contact-container">
           <h3>Contact info</h3>
           <p>If you have any questions, feel free to contact me.</p>
           <div className="contact-info">
            <p className="p-border"><AiOutlineMail /> ivozilic@hotmail.com</p>
            <p><AiOutlineMobile /> 0977691991</p>
           </div>
           <div className="contact-picture">
                <img src={coffeeBreak} alt="coffee-break" />
                <p>Frontend Developer</p>
           </div>
        </div>
    )
}
