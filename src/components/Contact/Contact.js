import React from 'react';
import './Contact.scss';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineMobile } from 'react-icons/ai';
import coffeeBreak  from '../../image/coffeeBreak.jpg';



export default function Contact() {
    return (
        <div className="contact-container">
            <h2 className="header">Contact info</h2>
           <p>If you have any questions, feel free to contact me.</p>
           <div className="contact-info">
            <AiOutlineMail className="icon"/> <p>ivozilic@hotmail.com</p>
            <AiOutlineMobile className="icon" />  <p>0977691991</p>
           </div>
           <div className="contact-picture">
                <img src={coffeeBreak} alt="coffee-break" />
                <p>Frontend Developer</p>
           </div>
        </div>
    )
}
