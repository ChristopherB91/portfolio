import PR from "../assets/projectPictures/PRWebsite.png";
import omni from "../assets/projectPictures/omniDex.jpeg";
import fig from "../assets/projectPictures/figmaToDevelopment.jpeg";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  skills: string[];
}

const projects: Project[] = [
  {
    title: "prison Reform Job board",
    description:
      "2/3 ex-felons end up going back to jail. My idea was to give them a chance to try again and be better. Sort of like linkedin but for reformed prisoners.",
    image: `${PR}`,
    link: "https://christopherb91.github.io/pr/",
    skills: ["HTML", "CSS", "JS", "React"],
  },
  {
    title: "FigProject1",
    description:
      "I built a website based on a random design I found on figma. The actual design it is based on can be found at the bottom of the site. ",
    image: `${fig}`,
    link: "https://christopherb91.github.io/FigProject1/",
    skills: ["HTML", "CSS", "JS", "TS", "React", "Figma"],
  },
  {
    title: "omniDex",
    description:
      "I took the idea of the pokedex a basic front-end developer project and changed it into an intermediate full-stack application. The omnidex uses alien characters from the show Ben 10 and then displays their specie name, nickname, and skillset.",
    image: `${omni}`,
    link: "https://omnidex.vercel.app",
    skills: [
      "HTML",
      "CSS",
      "Tailwind",
      "JS",
      "TS",
      "React",
      "Java",
      "Spring-boot",
    ],
  },
];

export const Projects = () => {
  return (
    <div>
      <h2>{projects[0].title}</h2>
      <p>{projects[0].description}</p>
      <img src={projects[0].image} alt="website image" />
      <ul>
        {projects[0].skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
