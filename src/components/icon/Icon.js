const Icon = ({ path }) => {
  return (
    <img
      src={path}
      alt="icon"
      style={{
        width: "20px",
        height: "20px",
      }}
    />
  );
};

export default Icon;
