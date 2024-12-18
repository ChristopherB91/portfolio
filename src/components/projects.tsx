import PR from "../assets/projectPictures/PRWebsite.png";
import omni from "../assets/projectPictures/omniDex.jpeg";
import fig from "../assets/projectPictures/figmaToDevelopment.jpeg";
import { useEffect, useState } from "react";

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
  const [isActive, setIsActive] = useState<boolean>(false);
  const [passiveChange, setPassiveChange] = useState<boolean>(false);

  const projectChange = (wrd: string) => {
    setIsActive(true);
    setTimeout(() => {
      if (wrd === "left") {
        setPassiveChange(false);
        if (num === 0) {
          setNum(projects.length - 1);
        } else {
          setNum(num - 1);
        }
      } else if (wrd === "right") {
        setPassiveChange(false);
        if (num === projects.length - 1) {
          setNum(0);
        } else {
          setNum(num + 1);
        }
      } else if (wrd === "passive") {
        if (num === projects.length - 1) {
          setNum(0);
        } else {
          setNum(num + 1);
        }
      }
    }, 500);
    setTimeout(() => {
      setIsActive(false);
    }, 1000);
  };

  useEffect(() => {
    if (passiveChange === true) {
      const timeout = setTimeout(() => {
        projectChange("passive");
      }, 5000);

      return () => clearTimeout(timeout);
    } else {
      const passiveTimeout = setTimeout(() => {
        setPassiveChange(true);
      }, 5000);
      return () => clearTimeout(passiveTimeout);
    }
  });

  return (
    <div id="projects">
      <h2 className={isActive ? "active" : ""}>{projects[num].title}</h2>
      <p className={isActive ? "active" : ""}>{projects[num].description}</p>
      <div>
        <button
          onClick={() => projectChange("left")}
          aria-label="previous project"
          disabled={isActive}
        >
          &larr;
        </button>
        <a href={projects[num].link} target="_blank">
          <img
            src={projects[num].image}
            className={isActive ? "active" : ""}
            alt="website image"
          />
        </a>
        <button
          onClick={() => projectChange("right")}
          aria-label="next project"
          disabled={isActive}
        >
          &rarr;
        </button>
      </div>
      <ul>
        <p>Skills used in the project:</p>
        {projects[num].skills.map((skill, index) => (
          <li key={index} className={isActive ? "active" : ""}>
            <b>{skill}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};
