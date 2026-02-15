// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
//
import { Route, Routes, HashRouter } from "react-router-dom";
import jsonData1 from "./assets/data.json";
import jsonData2 from "./assets/fixed_data.json";
import jsonData3 from "./assets/skill_categories.json";
import "./App.css";
import Index from "./components/routeComponents/Index";
import CV from "./components/routeComponents/CV";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Index
                basicData={jsonData2}
                expData={jsonData1}
                skillCategories={jsonData3}
              />
            }
          />
          <Route
            path="/CV"
            element={<CV basicData={jsonData2} expData={jsonData1} />}
          />
        </Routes>
      </HashRouter>
      {/*<a href="https://vite.dev" target="_blank">
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
