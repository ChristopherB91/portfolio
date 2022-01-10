import React from "react";
import sentence from "./Sentence1";
import resume from "./resume.png";
import headshot from "./IMG_3661.jpg";


export default function Home() {
    return (
        <div className="App">
<img src={headshot} alt="me" className="me" />
<img src={resume} alt="my resume" className="my-resume" />
<div className="bio">
  <p>
    I am a software developer that knows Html, CSS, javascript, react, and
    some java. I am interested in learning new languages that can help me
    preform my job better. Located below is my resume with more of my
    skills and some projects.
  </p>
  <p>Here are the links to two of my deployed projects.</p>
  <ul>
    <li>
      <a href="https://christopherb91.github.io/Re-entry/">
        Here is my first prison reform website built with basic html and
        css with a little javascript this was my first project with
        perscholas. https://christopherb91.github.io/Re-entry/
      </a>
    </li>
    <li>
      <a href="https://prison-reform-react.herokuapp.com/Home">
        Here is my prison reform website built with react this was my
        second project during perscholas.
        https://prison-reform-react.herokuapp.com/Home
      </a>
    </li>
  </ul>
</div>
</div>
    );
}