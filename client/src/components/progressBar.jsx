import React from "react";

const ProgressBar = ({ percentage, display }) => {
  return (
    <div className="progress" style={{ display }}>
      <div
        className="progress-bar bg-info"
        role="progressbar"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
