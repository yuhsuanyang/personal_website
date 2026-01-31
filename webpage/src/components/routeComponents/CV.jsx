import GeneralInfo from "../subComponents/GeneralInfo";
import ExpSection from "../subComponents/ExpSection";

function CV({ basicData, expData }) {
  return (
    <div className="cv">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2 className="dark-blue">Yu-Hsuan (Darcy) Yang</h2>
      </div>
      <div style={{ display: "flex", gap: "1.5em" }}>
        <div>
          <GeneralInfo
            name="phone"
            value={basicData["Contact Information"]["mobile"]}
            className="sky-blue"
          />

          <GeneralInfo
            name="mail"
            value={basicData["Contact Information"]["email"]}
            className="sky-blue"
          />
        </div>
        <div>
          <GeneralInfo
            name="github"
            value={basicData["Contact Information"]["github"]}
            className="sky-blue"
          />

          <GeneralInfo
            name="linkedin"
            value={basicData["Contact Information"]["linkedin"]}
            className="sky-blue"
          />
        </div>
      </div>
      <div>
        <div className="title bold">Education</div>
        {Array.from(basicData["Education"]).map((item) => (
          <ExpSection
            institute={item["School"]}
            location={item["Location"]}
            position={item["Department"]}
            duration={item["Period"]}
          />
        ))}
      </div>
      <div>
        <div className="title bold">Work Experience</div>
        {Array.from(expData["Work Experience"]).map((item) => (
          <ExpSection
            institute={item["Company"]}
            location={item["Location"]}
            position={item["Position"]}
            duration={item["Period"]}
            content={item["Content"]}
          />
        ))}
      </div>
      <div>
        <div className="title bold">Certificates</div>
      </div>
    </div>
  );
}
export default CV;
