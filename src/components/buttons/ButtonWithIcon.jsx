import React from "react";

const ButtonWithIcon = ({ label, icon }) => {
  return (
    <div className="mt-3 mb-2">
      <a href="#/" className="btn btn-yellow btn-rounded">
        {icon} {label}
      </a>
    </div>
  );
};

export default ButtonWithIcon;
