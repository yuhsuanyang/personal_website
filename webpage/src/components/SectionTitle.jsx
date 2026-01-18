import { IoBook, IoBriefcase, IoBuild, IoRibbon } from "react-icons/io5";
import { IconContext } from "react-icons";

function SectionTitle({ name }) {
  const getIcon = () => {
    switch (name) {
      case "Education":
        return <IoBook />;
      case "Work Experience":
        return <IoBriefcase />;
      case "Technical Skills":
        return <IoBuild />;
      case "Certificates":
        return <IoRibbon />;
      default:
        throw new Error("Not Implemented");
    }
  };
  return (
    <div className="flex-box">
      <h2 style={{ margin: 0, lineHeight: 1 }}>{name}</h2>
      <IconContext.Provider value={{ size: "1.25em" }}>
        <span>{getIcon()}</span>
      </IconContext.Provider>
    </div>
  );
}

export default SectionTitle;
