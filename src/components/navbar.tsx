import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <nav className={isActive ? "active" : ""}>
        <svg
          className={isActive ? "active" : ""}
          onClick={() => setIsActive(!isActive)}
          width="46"
          height="45"
          viewBox="0 0 46 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            y1="1.5"
            x2="46"
            y2="1.5"
            stroke="#0A090C"
            stroke-width="3"
            id="line1"
            // transform="translate(0, 21.5)"
          />
          <line
            y1="21.5"
            x2="46"
            y2="21.5"
            stroke="#0A090C"
            stroke-width="3"
            id="line2"
          />
          <line
            y1="43.5"
            x2="46"
            y2="43.5"
            stroke="#0A090C"
            stroke-width="3"
            id="line3"
          />
        </svg>
        <Link to="/AboutMe">
          <p id="aboutMe" className="tab">
            About Me
          </p>
        </Link>
        <Link to="Projects">
          <p id="projects" className="tab">
            Projects
          </p>
        </Link>
        <Link to="Future">
          <p id="future" className="tab">
            Future
          </p>
        </Link>
      </nav>
    </>
  );
};
