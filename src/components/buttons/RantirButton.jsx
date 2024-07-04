const RantirButton = ({ imageSource, label, text }) => {
  return (
    <button className="rantir-button">
      <div
        style={{ marginLeft: "5px" }}
        className="d-flex align-items-center gap-1"
      >
        <img
          src={imageSource}
          alt="logo"
          style={{
            width: "16px",
            height: "16px",
          }}
        />
        <div
          className="font-inter d-flex justify-content-center align-items-center text-dark"
          style={{ fontSize: "10px" }}
        >
          {text}
        </div>
        <sub className="fw-semibold mt-2">{label}</sub>
      </div>
      <i className="fas fa-arrow-right text-dark"></i>
    </button>
  );
};

export default RantirButton;
