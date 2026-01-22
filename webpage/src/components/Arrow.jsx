import { IoArrowUp, IoArrowDown } from "react-icons/io5";
function Arrow({ name, moveFunction }) {
  const getIcon = () => {
    if (name.startsWith("up")) {
      return <IoArrowUp />;
    } else if (name.startsWith("down")) {
      return <IoArrowDown />;
    } else {
      return null;
    }
  };
  return (
    <button
      data-testid={name}
      className="icon-button"
      onClick={() => {
        moveFunction();
      }}
    >
      {getIcon()}
    </button>
  );
}

export default Arrow;
