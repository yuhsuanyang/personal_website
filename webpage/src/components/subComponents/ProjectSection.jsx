function ProjectSection({ projectName, duration, content }) {
  return (
    <>
      <div className="subtitle-flex-box" style={{ margin: "0.5em 0" }}>
        <p style={{ fontWeight: "bold" }}>{projectName}</p>
        <p style={{ fontStyle: "italic" }}>{duration}</p>
      </div>
      <div>
        {Array.from(content).map((ele) => (
          <li>{ele}</li>
        ))}
      </div>
    </>
  );
}

export default ProjectSection;
