const ProjectIcon = ({ color, title, height, width, fontSize }) => {
  return (
    <div
      className="d-flex align-items-center justify-content-center rounded text-white"
      style={{
        width: width,
        height: height,
        fontSize: fontSize,
        backgroundColor: color,
      }}
    >
      {title?.charAt(0)?.toUpperCase()}
    </div>
  );
};

export default ProjectIcon;
