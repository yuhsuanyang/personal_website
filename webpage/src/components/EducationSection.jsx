import SectionTitle from "./SectionTitle";

function EducationSection({ data }) {
  return (
    <div className="section">
      <SectionTitle name="Education" />
      {Array.from(data).map((item) => (
        <div className="subtitle">
          <b>{item["School"]}</b>
          <div className="subtitle-flex-box">
            <p>{item["Location"]}</p>
            <p>{item["Period"]}</p>
          </div>
          <div>
            <i>{item["Department"]}</i>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EducationSection;
