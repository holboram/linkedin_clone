import React from "react";

import styles from "./ShareBtn.module.scss";

const ShareBtn = (props) => {
  return (
    <button className={styles["btn-share"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        data-supported-dps="24x24"
        fill="currentColor"
        width="24"
        height="24"
        focusable="false"
        className={`${styles["svg"]} ${props.className}`}
      >
        <path d={props.svgImage}></path>
      </svg>
      {props.text}
    </button>
  );
};

export default ShareBtn;
