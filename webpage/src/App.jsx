import { useEffect, useState, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { IoArrowDown } from "react-icons/io5";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import jsonData1 from "./assets/data.json";
import jsonData2 from "./assets/fixed_data.json";
import Arrow from "./components/Arrow";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import CertificateSection from "./components/CertificateSection";
import WorkExpSection from "./components/WorkExpSection";

function App() {
  // const [count, setCount] = useState(0);
  const [data] = useState(jsonData1);
  const [fixedData] = useState(jsonData2);
  const parallax = useRef(null);
  return (
    <>
      <Parallax ref={parallax} pages={4} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} speed={1} className="layer">
          <div className="cover">
            <ContactSection />
          </div>
          <div className="arrow" style={{ top: "95%" }}>
            <Arrow
              name="down-arrow1"
              moveFunction={() => {
                parallax.current.scrollTo(1);
              }}
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1} className="layer">
          <div className="arrow" style={{ top: "5%" }}>
            <Arrow
              name="up-arrow1"
              moveFunction={() => {
                parallax.current.scrollTo(0);
              }}
            />
          </div>

          <div className="content">
            <EducationSection data={fixedData["Education"]} />
          </div>
          <div className="arrow" style={{ top: "95%" }}>
            <Arrow
              name="down-arrow2"
              moveFunction={() => {
                parallax.current.scrollTo(2);
              }}
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1} class="layer">
          <div className="arrow" style={{ top: "5%" }}>
            <Arrow
              name="up-arrow2"
              moveFunction={() => {
                parallax.current.scrollTo(1);
              }}
            />
          </div>
          <div className="content">
            <WorkExpSection data={data["Work Experience"].slice(0, 2)} />
          </div>
          <div className="arrow" style={{ top: "95%" }}>
            <Arrow
              name="down-arrow3"
              moveFunction={() => {
                parallax.current.scrollTo(3);
              }}
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1} class="layer">
          <div className="arrow" style={{ top: "5%" }}>
            <Arrow
              name="up-arrow3"
              moveFunction={() => {
                parallax.current.scrollTo(2);
              }}
            />
          </div>
          <div className="cover">
            <WorkExpSection data={data["Work Experience"].slice(2, 3)} />
            <CertificateSection data={data["Certificates"]} />
          </div>
        </ParallaxLayer>
      </Parallax>
      {/*<div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
