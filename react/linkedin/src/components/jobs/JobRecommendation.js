import React from 'react';

import styles from './JobRecommendation.module.scss';

const JobRecommendation = props => {
  return (
    <li className={styles['wrapper-center__list-item']}>
      <a href="job-details">
        <div className={styles['wrapper-center__users-posts']}>
          <div className={styles['wrapper-center__image']}>
            <img
              src={props.companyLogo}
              width="48"
              className={styles['wrapper-right__image-profile']}
              alt={`${props.companyName} logo`}
            />
          </div>
          <div className={styles['wrapper-center__text-wrapper']}>
            <strong>{props.companyPosition}</strong>
            <span className={styles['wrapper-center__about-summary']}>{props.companyName}</span>
            <span className={styles['wrapper-center__about-summary']}>{props.jobLocation}</span>
            <span
              className={`${styles['wrapper-center__about-summary']} ${styles['wrapper-center__about-summary--flex']}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M12 20a8 8 0 010-16 7.91 7.91 0 014.9 1.69l-1.43 1.42a6 6 0 101.42 1.42l3.82-3.82a1 1 0 000-1.41A1 1 0 0020 3a1 1 0 00-.7.29l-1 1A10 10 0 1022 12h-2a8 8 0 01-8 8zm5-8a5 5 0 11-5-5 4.93 4.93 0 012.76.82l-2.24 2.24A2.24 2.24 0 0012 10a2 2 0 102 2 2.24 2.24 0 00-.07-.51l2.24-2.24A5 5 0 0117 12z"></path>
              </svg>
              <span>Actively recruiting</span>
            </span>
            <div className={styles['wrapper-center__date']}>
              <span>{props.timePosted} days ago</span>
            </div>
          </div>
          <button className={styles['wrapper-center__bookmark-btn']}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22zm-3-1a1 1 0 011 1v12.51L12 13l-5 4.51V4z"></path>
            </svg>
          </button>
        </div>
      </a>
    </li>
  );
};

export default JobRecommendation;
