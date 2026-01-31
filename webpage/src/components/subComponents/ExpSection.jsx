function ExpSection({ institute, location, position, duration, content = [] }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0.5em 0",
        }}
      >
        <p style={{ fontWeight: "bold" }}>{institute}</p>
        <p>{location}</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "2em",
          fontStyle: "italic",
        }}
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
