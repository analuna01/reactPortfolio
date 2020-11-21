import React from "react";
import Pdf from '../documents/AnaLunaResume.pdf';

function Contact() {
    return (
        <div className="main-contact">
            <div className="contactInfo">
                <h3>Contact Information</h3>
                <ul className="contact-info">
                    <li><a href={"https://github.com/analuna01"} target="_blank" rel="github">Github</a></li>
                    <li><a href={"mailto:luna.ana92@gmail.com"} target="_blank" rel="email">Email</a></li>
                    <li><a href={"https://www.linkedin.com/in/analuna01/"} target="_blank" rel="linkedin">LinkedIn</a></li>
                    <li><a href={Pdf} target="_blank" rel="resume">Resume</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;
