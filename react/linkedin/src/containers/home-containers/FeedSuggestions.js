import React, { useEffect, useState } from 'react';

import { basePath } from '../common/getData.js';

import UserSuggestions from '../../components/home/UserSuggestions';

import useHttp from '../../hooks/use-http.js';

import styles from './FeedSuggestions.module.scss';

const FeedSuggestions = () => {
  const [data, setData] = useState([]);

  const { isLoading, error, sendRequest: displaySuggestions } = useHttp();

  useEffect(() => {
    const usersUrl = new URL('api/users', basePath);
    displaySuggestions({ url: usersUrl }, setData);
  }, [displaySuggestions]);

  return (
    <ul className={styles['wrapper-right__users-list']}>
      {!isLoading &&
        data.length > 0 &&
        data.map(content => {
          return (
            <UserSuggestions
              key={content.id}
              image={content.image}
              name={content.name}
              profession={content.profession}
            />
          );
        })}
      {(error && <p>{error}</p>) || (!isLoading && data.length === 0 && <p>No posts</p>)}
      {isLoading && <h1>Loading...</h1>}
    </ul>
  );
};

export default FeedSuggestions;
