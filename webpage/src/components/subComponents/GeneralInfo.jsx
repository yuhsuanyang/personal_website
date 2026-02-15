import {
  BiSolidPhone,
  BiLogoGithub,
  BiLogoLinkedin,
  BiEnvelope,
} from "react-icons/bi";
import { IconContext } from "react-icons";

function GeneralInfo({ name, value, className }) {
  const getIcon = () => {
    switch (name) {
      case "phone":
        return <BiSolidPhone className={className} />;
      case "mail":
        return <BiEnvelope className={className} />;
      case "github":
        return <BiLogoGithub className={className} />;
      case "linkedin":
        return <BiLogoLinkedin className={className} />;
      default:
        throw new Error("Not Implemented");
    }
  };
  return (
    <IconContext.Provider value={{ size: "1.25em", fontWeight: "bold" }}>
      <span className="flex-box" style={{ margin: 0 }}>
        {getIcon()}
        <p>{value}</p>
      </span>
    </IconContext.Provider>
  );
}

export default GeneralInfo;
