import React from 'react';

import styles from './CardMainSection.module.scss';

const CardMainSection = props => {
  return (
    // Main section
    <section className={styles['main-section']}>
      <div className={styles['main-wrapper']}>{props.children}</div>
    </section>
  );
};

export default CardMainSection;
