import React from "react";
import "./style-btn.css";

const EditBtn = (props) => {
  return (
    <div>
      <svg
        onClick={props.editTodo}
        width="20"
        height="20"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="42" height="42" rx="10" fill="#E9A631" />
        <path
          d="M23.8401 12.9279L10.5155 26.2535C10.4484 26.3207 10.4 26.4056 10.377 26.4969L8.90006 32.4249C8.85588 32.6033 8.90832 32.7931 9.03855 32.9233C9.13709 33.0219 9.27135 33.0764 9.40869 33.0764C9.45075 33.0764 9.49378 33.0712 9.53565 33.0607L15.4637 31.5836C15.556 31.5605 15.64 31.5123 15.707 31.4453L29.0328 18.1206L23.8401 12.9279Z"
          fill="white"
        />
        <path
          d="M32.334 11.111L30.8507 9.62775C29.8594 8.63642 28.1316 8.63738 27.1414 9.62775L25.3246 11.4446L30.5171 16.6372L32.334 14.8203C32.8292 14.3253 33.1019 13.6664 33.1019 12.9657C33.1019 12.265 32.8292 11.6062 32.334 11.111Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default EditBtn;
