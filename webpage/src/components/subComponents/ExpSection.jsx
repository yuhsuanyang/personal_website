function ExpSection({ institute, location, position, duration, content = [] }) {
  return (
    <>
      <div className="subtitle-flex-box" style={{ margin: "0.5em 0" }}>
        <p style={{ fontWeight: "bold" }}>{institute}</p>
        <p>{location}</p>
      </div>
      <div
        className="subtitle-flex-box"
        style={{ marginLeft: "1em", fontStyle: "italic" }}
      >
        <p>{position}</p>
        <p>{duration}</p>
      </div>
      <div>
        {Array.from(content).map((ele) => (
          <li>{ele}</li>
        ))}
      </div>
    </>
  );
}

export default ExpSection;
