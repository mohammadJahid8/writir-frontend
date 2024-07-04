import React from "react";
import { Card } from "../card/card";

const FolderCard = ({ children, title, subTitle, icon }) => {
  return (
    <Card className="p-3 h-100">
      <div className="d-flex align-items-start">
        <div className="me-3">
          <i className={icon} style={{ fontSize: "24px" }}></i>
        </div>
        <div>
          <p className="h6 fw-bold mb-1">{title}</p>
          <p className="text-muted fw-bold mb-0">{subTitle}</p>
          <div className="mt-3">{children}</div>
        </div>
      </div>
    </Card>
  );
};

export default FolderCard;
