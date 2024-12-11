import resume from "../assets/Resume.pdf";

export const Footer = () => {
  return (
    <>
      <footer>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/christopher-browne91/"
              target="blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ChristopherB91?tab=repositories"
              target="blank"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href={resume} target="blank">
              Resume
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/proto/j2IPbDR4pRsJrVJXt78mMZ/MyPortfolio?node-id=0-1&t=tAFxBLfpQtHj0HAq-1"
              target="blank"
            >
              Design
            </a>
          </li>
        </ul>
        <p className="email">chrisbrowne91@gmail.com</p>
      </footer>
    </>
  );
};
