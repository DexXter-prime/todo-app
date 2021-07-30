import React from "react";
import "./style-btn.css";


const TickCircle = () => {

  return (
      <div className="sizeChange">
        <svg
          width="25"
          height="25"
          viewBox="0 0 28 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="3.95713"
            height="18.9312"
            rx="1.97856"
            transform="matrix(-0.874297 0.485391 0.485391 0.874297 3.45959 12.4783)"
            fill="white"
          />
          <rect
            x="24.0264"
            width="3.95568"
            height="33.1995"
            rx="1.97784"
            transform="rotate(30 24.0264 0)"
            fill="white"
          />
        </svg>
      </div>
  );
};

export default TickCircle;
