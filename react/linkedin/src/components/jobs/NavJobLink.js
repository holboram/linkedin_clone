import React from 'react';

import styles from './NavJobLink.module.scss';

const NavJobLink = props => {
  return (
    <li className={styles['wrapper-left__list-item']}>
      <a className={styles['wrapper-left__nav-item']} href={props.link}>
        <svg
          className={styles['wrapper-left__svg']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-supported-dps="24x24"
          fill="currentColor"
          width="24"
          height="24"
          focusable="false"
        >
          <path d={props.svgPath}></path>
        </svg>
        <span className={styles['wrapper-left__nav-text']}>{props.linkText}</span>
      </a>
      {/* <div className={styles['wrapper-left__dropdown-menu']}>
        <span>More</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          data-supported-dps="16x16"
          fill="currentColor"
          width="16"
          height="16"
          focusable="false"
        >
          <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
        </svg>
      </div> */}
    </li>
  );
};

export default NavJobLink;
