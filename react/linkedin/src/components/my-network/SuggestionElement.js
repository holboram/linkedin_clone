import React from 'react';

import avatarImg from '../../assets/FB_IMG_1588881980469.jpg';
import institutionLogo from '../../assets/1625666747931.jpeg';

import styles from './SuggestionElement.module.scss';

const SuggestionElement = props => {
  return (
    <div className={styles['wrapper-main__card-border']}>
      <a href="close" className={styles['wrapper-main__close-btn']}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          data-supported-dps="16x16"
          fill="currentColor"
          width="16"
          height="16"
          focusable="false"
        >
          <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
        </svg>
      </a>
      <div className={styles['wrapper-main__image-background']}></div>
      <li>
        <a href="upload" className={styles['wrapper-main__upload-img']}>
          <img src={avatarImg} width="100" loading="lazy" alt="Katie Clinch" />
          <div className={styles['wrapper-main__name-container']}>
            <span>{props.name}</span>
            <span>{props.profession}</span>
          </div>
        </a>
        <div className={styles['wrapper-main__connect-section']}>
          <div className={styles['wrapper-main__connect-img-container']}>
            <img src={institutionLogo} width="25" height="25" alt="k" />
            <span>{props.from}</span>
          </div>
          <button className={`${styles['btn']} ${styles['btn-gray']}`}>Connect</button>
        </div>
      </li>
    </div>
  );
};

export default SuggestionElement;
