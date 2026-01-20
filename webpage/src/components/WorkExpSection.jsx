import SectionTitle from "./SectionTitle";

function WorkExpSection({ data }) {
  const getContent = (content) => {
    return Array.from(content).map((ele) => {
      return <li>{ele}</li>;
    });
  };
  return (
    <div className="section">
      <SectionTitle name="Work Experience" />
      {Array.from(data).map((item) => (
        <div className="subtitle">
          <div className="subtitle-flex-box">
            <b>{item["Company"]}</b>
            <p>{item["Location"]}</p>
          </div>
          <div className="subtitle-flex-box">
            <i>{item["Position"]}</i>
            <p>{item["Period"]}</p>
          </div>
          <div>{getContent(item["Content"])}</div>
        </div>
      ))}
    </div>
  );
}

export default WorkExpSection;
