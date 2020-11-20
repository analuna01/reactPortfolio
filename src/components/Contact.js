import React from "react";
import Pdf from '../documents/AnaLunaResume.pdf';

function Contact() {
    return (
        <div>
            <h1>Contact Information</h1>
            <ul className="contact-info">
                <h3>Contact</h3>
                <li><a href={"https://github.com/analuna01"} target="_blank" rel="github">Github</a></li>
                <li><a href={"mailto:luna.ana92@gmail.com"} target="_blank" rel="email">Email</a></li>
                <li><a href={"https://www.linkedin.com/in/analuna01/"} target="_blank" rel="linkedin">Linkedin</a></li>
                <li><a href={Pdf} target="_blank" rel="resume">Resume</a></li>
            </ul>


        </div>
    );
}

export default Contact;
