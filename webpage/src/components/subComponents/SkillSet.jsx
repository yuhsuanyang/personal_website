function SkillSet({ skillType, skills }) {
  return (
    <div style={{ display: "flex", gap: "2em" }}>
      <p className="bold" style={{ width: "25%" }}>
        {skillType}
      </p>
      <p>{skills}</p>
    </div>
  );
}

export default SkillSet;
