import { useState, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import jsonData1 from "./assets/data.json";
import jsonData2 from "./assets/fixed_data.json";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import CertificateSection from "./components/CertificateSection";
import WorkExpSection from "./components/WorkExpSection";

function App() {
  // const [count, setCount] = useState(0);
  const [data] = useState(jsonData1);
  const [fixedData] = useState(jsonData2);
  return (
    <>
      <Parallax pages={3} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} speed={1} className="layer">
          <ContactSection />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1} className="layer">
          <EducationSection data={fixedData["Education"]} />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1}>
          <CertificateSection data={data["Certificates"]} />
          {/*<WorkExpSection data={data["Work Experience"]} />*/}
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
