import React from 'react';

import styles from './UserNotification.module.scss';

const UserNotification = props => {
  return (
    <a href="to-notification">
      <li className={styles['wrapper-center__list-item']}>
        <div className={styles['wrapper-center__users-posts']}>
          <div className={styles['wrapper-center__image']} href=" #">
            <img
              src={props.notificationImg}
              width="54"
              className={styles['wrapper-right__image-profile']}
              alt={props.name}
            />
          </div>
          <div className={styles['wrapper-center__text-wrapper']}>
            <div>
              <strong>{props.name}&nbsp;</strong>
              {props.content}
            </div>
            <span className={styles['wrapper-center__about-summary']}>{props.about}</span>
          </div>
        </div>
        <div className={styles['wrapper-center__date']}>
          <span>{props.time}h</span>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
            </svg>
          </button>
        </div>
      </li>
    </a>
  );
};

export default UserNotification;
