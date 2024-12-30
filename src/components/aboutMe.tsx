import { useEffect, useState } from "react";
import me from "../assets/aboutMe/heaadshot.jpg";
import start from "../assets/aboutMe/webDevStart.png";
import learned from "../assets/aboutMe/webDevLearned.png";
import likes from "../assets/aboutMe/webDevLikes.png";

interface Post {
  main: string | JSX.Element;
  bullets?: string[];
  image: string;
}

const posts: Post[] = [
  {
    main: "My name is Christopher Browne I am a full-stack developer specilizing in front-end development.",
    image: me,
  },
  {
    main: (
      <>
        I started learning at{" "}
        <a
          href="https://perscholas.org/about-per-scholas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Per Scholas
        </a>{" "}
        in 2021, where I went through a 3-month bootcamp and learned...
      </>
    ),
    bullets: ["HTML5", "CSS", "JavaScript ES6", "React"],
    image: start,
  },
  {
    main: "Since then I have learned...",
    bullets: ["Typescript", "Tailwind", "Java", "Spring-boot", "MySQL"],
    image: learned,
  },
  {
    main: "In my downtime I like to...",
    bullets: [
      "Play video games",
      "Watch anime / read manga",
      "Do chess puzzles",
    ],
    image: likes,
  },
];

export const AboutMe = () => {
  const [num, setNum] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [passiveChange, setPassiveChange] = useState<boolean>(false);

  const postChange = (wrd: string) => {
    setIsActive(true);
    setTimeout(() => {
      if (wrd === "left") {
        setPassiveChange(false);
        if (num === 0) {
          setNum(posts.length - 1);
        } else {
          setNum(num - 1);
        }
      } else if (wrd === "right") {
        setPassiveChange(false);
        if (num === posts.length - 1) {
          setNum(0);
        } else {
          setNum(num + 1);
        }
      } else if (wrd === "passive") {
        if (num === posts.length - 1) {
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
        postChange("passive");
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
    <div id="aboutMe">
      <button
        onClick={() => postChange("left")}
        disabled={isActive}
        aria-label="Previous slide"
      >
        &larr;
      </button>
      <div id="subAboutMe" className={isActive ? "active" : ""}>
        <figure>
          <img src={posts[num].image} alt="photo" />
        </figure>
        <div id="description">
          <p>{posts[num].main}</p>
          <ul>
            {posts[num].bullets &&
              posts[num].bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
          </ul>
        </div>
      </div>
      <button
        onClick={() => postChange("right")}
        disabled={isActive}
        aria-label="Next slide"
      >
        &rarr;
      </button>
    </div>
  );
};
