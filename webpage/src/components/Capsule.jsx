function Capsule({ label, isActivated }) {
  const baseClass = "capsule capsule-inactive";
  const activatedClass = "capsule capsule-active";
  return (
    <div className={isActivated ? activatedClass : baseClass}>
      <p>{label}</p>
    </div>
  );
}

export default Capsule;
