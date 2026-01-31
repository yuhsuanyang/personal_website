import SectionTitle from "./SectionTitle";

function CertificateSection({ data }) {
  const getContent = (content) => {
    return Array.from(content).map((ele) => {
      return <li>{ele}</li>;
    });
  };
  return (
    <div className="section">
      <SectionTitle name="Certificates" />
      {Array.from(data).map((item) => (
        <div className="subtitle">
          <div className="subtitle-flex-box">
            <b>{item["Name"]}</b>
            <p>{item["Period"]}</p>
          </div>
          <div>{getContent(item["Content"])}</div>
        </div>
      ))}
    </div>
  );
}

export default CertificateSection;
