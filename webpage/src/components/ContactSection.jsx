import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLocationOutline,
  IoMailSharp,
} from "react-icons/io5";
import { IconContext } from "react-icons";
import "./style.css";

function ContactSection() {
  return (
    <div>
      <h1>Yu-Hsuan (Darcy) Yang</h1>
      <h2 className="read-the-docs">
        Software Engineer in the Financial Industry
      </h2>
      <p>
        With data science and finance background, my career prospects are to
        boost the financial industry with technology.
      </p>

      <div className="flex-box">
        <IoLocationOutline />
        <p>Taipei, Taiwan</p>
      </div>

      <IconContext.Provider value={{ size: "1.75em" }}>
        <div className="flex-box">
          <a
            href="https://www.linkedin.com/in/darcy-yu-hsuan-yang/"
            aria-label="Linkedin"
          >
            <IoLogoLinkedin />
          </a>

          <a href="https://github.com/yuhsuanyang" aria-label="Github">
            <IoLogoGithub />
          </a>
          <IoMailSharp />
        </div>
      </IconContext.Provider>
      <div className="flex-box">
        <button>Click to Download CV</button>
      </div>
    </div>
  );
}

export default ContactSection;
