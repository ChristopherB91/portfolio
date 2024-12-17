import { useEffect, useState } from "react";

interface Post {
  main: string | JSX.Element;
  bullets?: string[];
}

const posts: Post[] = [
  {
    main: "My name is Christopher Browne I am a full-stack developer specilizing in the front-end.",
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
  },
  {
    main: "Since then I have learned...",
    bullets: ["Typescript", "Tailwind", "Java", "Spring-boot", "MySQL"],
  },
  {
    main: "In my downtime I like to...",
    bullets: [
      "Play video games",
      "Watch anime / read manga",
      "Do chess puzzles",
    ],
  },
];

export const AboutMe = () => {
  const [num, setNum] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
      setTimeout(() => {
        if (num === posts.length - 1) {
          setNum(0);
        } else {
          setNum(num + 1);
        }
      }, 500);
      setTimeout(() => {
        setIsActive(false);
      }, 1000);
    }, 5000);
  }, [num]);

  const postChange = (wrd: string) => {
    setIsActive(true);
    setTimeout(() => {
      if (wrd === "left") {
        if (num === 0) {
          setNum(posts.length - 1);
        } else {
          setNum(num - 1);
        }
      } else if (wrd === "right") {
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

  return (
    <div id="aboutMe">
      <input type="button" onClick={() => postChange("left")} value="<-" />
      <div className={isActive ? "active" : ""}>
        <p>{posts[num].main}</p>
        <ul>
          {posts[num].bullets &&
            posts[num].bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
        </ul>
      </div>
      <input type="button" onClick={() => postChange("right")} value="->" />
    </div>
  );
};
