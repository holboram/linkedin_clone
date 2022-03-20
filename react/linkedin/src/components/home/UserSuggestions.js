import React from 'react';

import styles from './UserSuggestions.module.scss';

const UserSuggestions = props => {
  return (
    <li className={styles['wrapper-right__user-suggestion']}>
      <a href="profile">
        <img
          alt="user"
          src={`http://localhost:5000${props.image}`}
          width="48"
          className={styles['wrapper-right__image-profile']}
        />
      </a>
      <div className={styles['wrapper-right__users-feed']}>
        <a href="profile">
          <span className={styles['wrapper-right__name']}>{props.name}</span>
          <p className={styles['wrapper-right__intro']}>{props.profession}</p>
        </a>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
          </svg>
          Follow
        </button>
      </div>
    </li>
  );
};

export default UserSuggestions;
