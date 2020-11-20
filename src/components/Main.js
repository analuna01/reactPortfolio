import React from "react";
import image from "../documents/AnaLuna copy.jpeg"

function Main() {
  return (
    <div>
      <h1>Home</h1>
      <img src={image} className="image" alt="image" />;

      <blockquote id="bio">ABOUT ME</blockquote>
        <h4>Who Am I</h4>
        <h6> My name is Ana Luna, I’m a Full Stack Developer student at UCSD-Extension based in San Diego, CA and I’m very passionate and dedicated to my work. With experience in HTML, CSS, JavaScript and JQuery I have acquire the skills necessary to build professional and interactive websites. 
          My background is in Psychology and Liberal Arts which compliment my work because I have an understanding on what users are looking for in a website. 
        </h6>

    </div>
  );
}

export default Main;
