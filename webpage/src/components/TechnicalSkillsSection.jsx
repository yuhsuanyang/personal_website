import { useState } from "react";
import Select from "react-select";
import SectionTitle from "./SectionTitle";
import Capsule from "./Capsule";

function TechnicalSkillsSection({ data, categories }) {
  const options = Object.keys(categories).map((key) => ({
    value: key,
    label: key,
  }));
  const [skillIsActivated, setSkillIsActivated] = useState(() => {
    const initState = {};
    data.forEach((item) => {
      initState[item] = false;
    });
    return initState;
  });
  const activate = (option) => {
    let list = [];
    if (option) {
      list = categories[option.value];
    }
    const updatedState = {};
    data.forEach((item) => {
      updatedState[item] = list.includes(item);
    });
    setSkillIsActivated(updatedState);
    console.log(skillIsActivated);
  };

  return (
    <div className="section">
      <SectionTitle name="Technical Skills" />
      <div style={{ padding: "1em" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
          <p>Skills for</p>
          <Select
            unstyled
            isClearable
            options={options}
            placeholder="Select a profession"
            classNames={{
              control: () => "select-control",
              option: () => "select-option",
            }}
            onChange={activate}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1em",
            width: "500px",
          }}
        >
          {Array.from(data).map((item) => (
            <Capsule label={item} isActivated={skillIsActivated[item]} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechnicalSkillsSection;
