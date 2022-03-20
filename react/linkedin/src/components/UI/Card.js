import React from "react";

import styles from "./Card.module.scss";

const Card = (props) => {
  return (
    <aside className={`${styles.card} ${props.className}`}>
      {props.children}
    </aside>
  );
};

export default Card;
