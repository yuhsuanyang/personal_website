import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLocationOutline,
  IoMail,
  IoCopyOutline,
} from "react-icons/io5";
import { IconContext } from "react-icons";
import { useState, useEffect, useRef } from "react";
import "./style.css";

function ContactSection() {
  const introText =
    "Professional in data science and finance, dedicated to boost the financial industry with technology.";
  const emailAddress = "sb0953330882@gmail.com";
  const [text, setText] = useState("");
  const [showEmailAddress, setShowEmailAddress] = useState(false);
  const hasRun = useRef(false);
  const w = `${introText.length}ch`;
  const style = {
    padding: "15%",
    height: "100%",
    width: w,
  };

  useEffect(() => {
    if (hasRun.current) {
      return;
    }
    hasRun.current = true;
    let timeout;
    for (let i = 0; i < introText.length; i++) {
      timeout = setTimeout(() => {
        setText((text) => text + introText[i]);
      }, 10 * i);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div style={style}>
      <h1>Yu-Hsuan (Darcy) Yang</h1>
      <h2 className="read-the-docs">
        Software Engineer in a Financial Institute
      </h2>
      <p>{text}</p>

      <div className="flex-box">
        <IoLocationOutline />
        <p>Taipei, Taiwan</p>
      </div>

      <IconContext.Provider value={{ size: "1.75em" }}>
        <div className="flex-box">
          <a
            aria-label="Linkedin"
            href="https://www.linkedin.com/in/darcy-yu-hsuan-yang/"
            target="_blank"
          >
            <IoLogoLinkedin />
          </a>
          <a
            aria-label="Github"
            href="https://github.com/yuhsuanyang"
            target="_blank"
          >
            <IoLogoGithub />
          </a>
          <button
            aria-label="Email"
            className="icon-button"
            onClick={() => {
              setShowEmailAddress(!showEmailAddress);
            }}
          >
            <IoMail />
          </button>
          <div
            className="flex-box"
            style={{
              gap: "0.25em",
              margin: "0",
              opacity: showEmailAddress ? 1 : 0,
              transition: "all .2s",
            }}
          >
            <p style={{ margin: 0 }}>{emailAddress}</p>
            <button
              aria-label="Copy"
              className="icon-button"
              onClick={() => {
                navigator.clipboard.writeText(emailAddress);
              }}
            >
              <IoCopyOutline size="1em" />
            </button>
          </div>
        </div>
      </IconContext.Provider>
      <div className="flex-box">
        <button>Click to Download CV</button>
      </div>
    </div>
  );
}

export default ContactSection;
