import React from "react";

// Demo images
import weather from "../documents/weather.png";
import notes from "../documents/notes.png";
import nature from "../documents/nature.png";
import memory from "../documents/memory.png";
import directory from "../documents/directory.png";

// Materialize icons
import CloudIcon from '@material-ui/icons/Cloud';
import EventNoteIcon from '@material-ui/icons/EventNote';
import LandscapeIcon from '@material-ui/icons/Landscape';
import GamesIcon from '@material-ui/icons/Games';
import PeopleIcon from '@material-ui/icons/People';

function Profile() {
  return (
    <div>
      <ul className="work">
        <h3>Wather Dashboard <CloudIcon /></h3>
        <p>A weather dashboard that includes a search section where the user can look for a city and the current weather
                  conditions will display along with a five day forecast.</p>
        <img src={weather} className="workImage" alt="weather" />;
          <li><a href={"https://analuna01.github.io/WeatherDashboard-hw6/"} target="_blank" rel="myWork">Check the weather!</a></li>
        <li><a href={"https://github.com/analuna01/WeatherDashboard-hw6.git"} target="_blank" rel="Github">Github Link</a></li>

        <h3>Note Taker <EventNoteIcon /></h3>
        <p>This is an application that can be used to write, save, and delete notes.</p>
        <img src={notes} className="workImage" alt="notes" />;
        <li><a href={"https://tranquil-sierra-63903.herokuapp.com/"} target="_blank" rel="myWork">Start your notes!</a></li>
        <li><a href={"https://github.com/analuna01/NoteTaker.git"} target="_blank" rel="Github">Github Link</a></li>

        <h3>Nature Itinerary <LandscapeIcon /></h3>
        <p>A day planner that helps you stay organized and allows you to search for your next adventure.</p>
        <p>(Group Project)</p>
        <img src={nature} className="workImage" alt="nature" />;
        <li><a href={"https://christ-ine.github.io/outdoor-itinerary/"} target="_blank" rel="myWork">Plan your next Adventure!</a></li>
        <li><a href={"https://github.com/christ-ine/outdoor-itinerary.git"} target="_blank" rel="Github">Github Link</a></li>

        <h3>MemoryGame <GamesIcon /></h3>
        <p>MemoryGame was designed with users of all ages in mind to keep the whole family entretained while increasing
        cognitive development, brain activity and working memory.</p>
        <p>(Group Project)</p>
        <img src={memory} className="workImage" alt="memory" />;
        <li><a href={"https://boiling-tor-76152.herokuapp.com/"} target="_blank" rel="myWork">Start playing!</a></li>
        <li><a href={"https://github.com/analuna01/Project2.git"} target="_blank" rel="Github">Github Link</a></li>

        <h3>Employee Directory <PeopleIcon /></h3>
        <p>This application allows users to find employees using the search bar by simply typing the name of the individual they are looking for.
           Information including: photo, name, phone, email and DOB will be displayed.</p>
           <img src={directory} className="workImage" alt="directory" />;
        <li><a href={"https://blooming-crag-56667.herokuapp.com/"} target="_blank" rel="myWork">Start searching!</a></li>
        <li><a href={"https://github.com/analuna01/WeatherDashboard-hw6.git"} target="_blank" rel="Github">Github Link</a></li>
      </ul>

    </div>
  );
}



export default Profile;
