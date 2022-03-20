import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ManageNetworkComponent.module.scss';

const ManageNetworkComponent = props => {
  return (
    <Link to={props.link} className={styles['wrapper-left__connections']}>
      <div className={styles['wrapper-left__connections-text']}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-supported-dps="24x24"
          fill="currentColor"
          width="24"
          height="24"
          focusable="false"
        >
          <path d={props.imagePath}></path>
        </svg>
        <span>{props.text}</span>
      </div>
      <span>{props.no}</span>
    </Link>
  );
};

export default ManageNetworkComponent;
