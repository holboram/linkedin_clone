import React from 'react';

import styles from './PeopleViewedElement.module.scss';

const PeopleViewedElement = props => {
  return (
    <li className={styles['wrapper-right__list-element']}>
      <a href="user">
        <img src={props.userImg} width="48" className={styles['wrapper-right__image-profile']} alt="user" />
      </a>
      <div className={styles['wrapper-right__users-feed']}>
        <a href="user">
          <span className={styles['wrapper-right__name']}>{props.name}</span>
          <p className={styles['wrapper-right__intro']}>{props.profession}</p>
        </a>
        <button>Connect</button>
      </div>
    </li>
  );
};

export default PeopleViewedElement;
