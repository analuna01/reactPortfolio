import React from "react";
import {Link} from "react-router-dom";

function Header() {
  return (
    <div>
        <nav>
        <h2>Ana Luna</h2>
        <ul className="nav-links">
            <Link to ="/">
                <li>Home</li>
            </Link>
            <Link to ="/profile">
                <li>Profile</li>
            </Link>
            <Link to ="/contact">
                <li>Contact</li>
            </Link>
        </ul>
        </nav>
      
    </div>
  );
}

export default Header;