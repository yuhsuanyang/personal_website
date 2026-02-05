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

function ContactSection({ data, onClickFunction }) {
  const introText = data["introduction"];
  const emailAddress = data["email"];
  const [text, setText] = useState("");
  const [showEmailAddress, setShowEmailAddress] = useState(false);
  const hasRun = useRef(false);
  const w = `${introText.length}ch`;
  const CVLink = "https://yuhsuanyang.github.io/CV/";

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
      <h2 className="read-the-docs">{data["description"]}</h2>
      <p>{text}</p>

      <div className="flex-box">
        <IoLocationOutline />
        <p>{data["location"]}</p>
      </div>

      <IconContext.Provider value={{ size: "1.75em" }}>
        <div className="flex-box">
          <a aria-label="Linkedin" href={data["linkedin"]} target="_blank">
            <IoLogoLinkedin />
          </a>
          <a aria-label="Github" href={data["github"]} target="_blank">
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
        <button aria-label="CV" onClick={() => onClickFunction()}>
          Click to Download CV
        </button>
      </div>
    </div>
  );
}

export default ContactSection;
