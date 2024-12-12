import { useState } from "react";

interface Post {
  main: string;
  bullets?: string[];
}

export const AboutMe = () => {
  const [num, setNum] = useState<number>(0);
  const postChange = (wrd: string) => {
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
  };

  const [posts] = useState<Post[]>([
    {
      main: "My name is Christopher Browne I am a full-stack developer specilizing in the front-end.",
    },
    {
      main: "I started learning at per scholas in 2021 where I went through a 3 month bootcamp and learned...",
      bullets: ["HTML5", "CSS", "JavaScript ES6", "React"],
    },
    {
      main: "Since then I have learned...",
      bullets: ["Typescript", "Java", "Spring-boot", "MySQL"],
    },
    {
      main: "In my downtime I like to...",
      bullets: [
        "Play video games",
        "Watch anime / read manga",
        "Do chess puzzles",
      ],
    },
  ]);

  return (
    <div>
      <button onClick={() => postChange("left")} value="<-" />
      <p>{posts[num].main}</p>
      <ul>
        {posts[num].bullets &&
          posts[num].bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
      </ul>
      <button onClick={() => postChange("right")} value="->" />
    </div>
  );
};
