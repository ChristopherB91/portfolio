import PR from "../assets/projectPictures/PRWebsite.png";
import omni from "../assets/projectPictures/omniDex.jpeg";
import fig from "../assets/projectPictures/figmaToDevelopment.jpeg";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  skills: string[];
}

const projects: Project[] = [
  {
    title: "Prison Reform Job board",
    description:
      "2/3 ex-felons end up going back to jail. My idea was to give them a chance to try again and be better. Sort of like linkedin but for reformed prisoners.",
    image: `${PR}`,
    link: "https://christopherb91.github.io/pr/",
    skills: ["HTML,", "CSS,", "JS,", "React"],
  },
  {
    title: "FigProject1",
    description:
      "I built a website based on a random design I found on figma. The actual design it is based on can be found at the bottom of the site. ",
    image: `${fig}`,
    link: "https://christopherb91.github.io/FigProject1/",
    skills: ["HTML,", "CSS,", "JS,", "TS,", "React,", "Figma"],
  },
  {
    title: "OmniDex",
    description:
      "I took the idea of the pokedex a basic front-end developer project and changed it into an intermediate full-stack application. The omnidex uses alien characters from the show Ben 10 and then displays their specie name, nickname, and skillset.",
    image: `${omni}`,
    link: "https://omnidex.vercel.app",
    skills: [
      "HTML,",
      "CSS,",
      "Tailwind,",
      "JS,",
      "TS,",
      "React,",
      "Java,",
      "Spring-boot",
    ],
  },
];

export const Projects = () => {
  const [num, setNum] = useState<number>(0);
  const postChange = (wrd: string) => {
    if (wrd === "left") {
      if (num === 0) {
        setNum(projects.length - 1);
      } else {
        setNum(num - 1);
      }
    } else if (wrd === "right") {
      if (num === projects.length - 1) {
        setNum(0);
      } else {
        setNum(num + 1);
      }
    }
  };

  return (
    <div id="projects">
      <h2>{projects[num].title}</h2>
      <p>{projects[num].description}</p>
      <div>
        <input type="button" onClick={() => postChange("left")} value="<-" />
        <a href={projects[num].link} target="_blank">
          <img src={projects[num].image} alt="website image" />
        </a>
        <input type="button" onClick={() => postChange("right")} value="->" />
      </div>
      <ul>
        <p>Skills used in the project:</p>
        {projects[num].skills.map((skill, index) => (
          <li key={index}>
            <b>{skill}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};
