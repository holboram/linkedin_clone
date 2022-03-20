import React from 'react';
import SuggestionElement from './SuggestionElement.js';

import styles from './PeopleSuggestions.module.scss';

const PeopleSuggestions = props => {
  return (
    <div className={styles['wrapper-main__bulk']}>
      <h2>People you may know from {props.subtitle}</h2>
      <a href="see" className={styles['wrapper-main__go-to']}>
        See all
      </a>
      <ul>
        <SuggestionElement name="Katie Clich" profession="Analyst" from={props.subtitle} />
        <SuggestionElement name="Katie Clich" profession="Analyst" from={props.subtitle} />
        <SuggestionElement name="Katie Clich" profession="Analyst" from={props.subtitle} />
        <SuggestionElement name="Katie Clich" profession="Analyst" from={props.subtitle} />
        <SuggestionElement name="Katie Clich" profession="Analyst" from={props.subtitle} />
        <SuggestionElement name="Katie Clich" profession="Analyst" from={props.subtitle} />
        <SuggestionElement name="Katie Clich" profession="Analyst" from={props.subtitle} />
        <SuggestionElement name="Katie Clich" profession="Analyst" from={props.subtitle} />
      </ul>
    </div>
  );
};

export default PeopleSuggestions;
