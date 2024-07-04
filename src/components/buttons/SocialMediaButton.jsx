const SocialMediaButton = ({
  label = "",
  imageSrc,
  onClick,
  classname,
  border,
}) => {
  return (
    <div
      className={`${classname} social-media-btn gap-2 mb-2 fw-bold`}
      onClick={onClick}
      style={{
        border: border ? border : "",
      }}
    >
      <img className="" src={imageSrc} alt="social_icon" />
      {label}
    </div>
  );
};

export default SocialMediaButton;
