import React from 'react';
import FeedItem from '../../containers/home-containers/FeedItem.js';
import { basePath } from '../../containers/common/getData.js';

import styles from './DisplayFeeds.module.scss';

const DisplayFeed = props => {
  const { data, isLoading, error, setRefreshAfterDelete, toggleTopRecent, userData } = props;

  let sortedData;
  if (toggleTopRecent === 'Top') {
    sortedData = data.sort((a, b) => {
      return b.socialCounts.length - a.socialCounts.length;
    });
  } else {
    sortedData = data.sort((a, b) => {
      return b.date - a.date;
    });
  }

  return (
    <ul className={styles['wrapper-center__feed-list']}>
      {!isLoading &&
        sortedData.length > 0 &&
        sortedData.map(content => {
          return (
            <FeedItem
              userData={userData}
              userId={props.userId}
              data={content}
              key={content.id}
              date={content.date}
              name={content.user.name}
              image={`${basePath}${content.user.image}`}
              profession={content.user.profession}
              content={content.content}
              postId={content.id}
              setRefreshAfterDelete={setRefreshAfterDelete}
            />
          );
        })}
      {(error && <p>{error}</p>) || (!isLoading && data.length === 0 && <p>No posts</p>)}
      {isLoading && <p>Loading...</p>}
    </ul>
  );
};

export default DisplayFeed;
