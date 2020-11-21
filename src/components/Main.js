import React from "react";
import image from "../documents/AnaLuna copy.jpeg"

function Main() {
  return (
    <div>
      <img src={image} className="mainImage" alt="image" />

      <blockquote id="bio">ABOUT ME</blockquote>
      <h3>Who Am I</h3>
      <h4> My name is Ana Luna, I’m a Full Stack Developer student at UCSD-Extension based in San Diego, CA and I’m very passionate and dedicated to my work. With experience in HTML, CSS, JavaScript and JQuery I have acquire the skills necessary to build professional and interactive websites.
      My background is in Psychology and Liberal Arts which compliment my work because I have an understanding on what users are looking for in a website.
        </h4>

      <div class="col s12">
        <blockquote id="work">MY WORK</blockquote>
        <h3>What Can I Do</h3>
        <h4>I have experience and training in the following:</h4>
        <ul>
          <li>HTML</li>
          <li> CSS </li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>APIs</li>
          <li>Node</li>
          <li>React</li>
        </ul>

      </div>

    </div>
  );
}

export default Main;
