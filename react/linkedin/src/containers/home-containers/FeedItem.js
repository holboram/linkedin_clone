import React, { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { basePath } from '../common/getData';
import { getTime } from '../common/getTime.js';
import SocialActions from './SocialActions.js';
import AddComment from './AddComment';

import DeletePostBtn from '../../components/home/DeletePostBtn.js';

import styles from './FeedItem.module.scss';

const FeedItem = props => {
  const { setRefreshAfterDelete, date, data, userId, userData } = props;
  const [toggleDeleteBtnState, setToggleDeleteBtnState] = useState(false);
  const [showAddComment, setShowAddComment] = useState(false);
  const [sendGetRequestState, setSendGetRequestState] = useState(true);

  const { sendRequest: sendPostDeleteRequest } = useHttp();

  const toggleDeleteBtnStateHandler = () => {
    !toggleDeleteBtnState ? setToggleDeleteBtnState(true) : setToggleDeleteBtnState(false);
  };

  const getNewUrl = useCallback(
    basePath => {
      return new URL(`api/posts/${userId}/${props.postId}`, basePath);
    },
    [props.postId, userId]
  );

  const sendPostUrl = useMemo(() => getNewUrl(basePath), [getNewUrl]);

  const setSendRequestStateHandler = () => {
    sendPostDeleteRequest({ url: sendPostUrl, method: 'DELETE' }).then(setRefreshAfterDelete);
  };

  return (
    <li className={styles['wrapper-center__list-item']}>
      <div className={styles['wrapper-center__users-posts']}>
        <a href="profile">
          <img src={props.image} width="48" className={styles['wrapper-right__image-profile']} alt={props.name} />
        </a>
        <a href="name">
          <span className={styles['wrapper-right__name']}>{props.name}</span>
          <p className={styles['wrapper-right__intro wrapper-right__intro--margin']}>{props.profession}</p>
          <span className={styles['wrapper-center__time-post']}>
            {getTime(date)}&nbsp;<b>&middot;</b>&nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
            </svg>
          </span>
        </a>
        <div className={styles['wrapper-center__option']} onClick={toggleDeleteBtnStateHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            className={styles['wrapper-center__btn-show-option']}
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
          </svg>

          {toggleDeleteBtnState && (
            <DeletePostBtn postId={props.postId} setSendRequestStateHandler={setSendRequestStateHandler} />
          )}
        </div>
      </div>
      <Link to={{ pathname: '/view-post', viewPost: { data: data } }}>
        <p className={styles['wrapper-center__content-feed']}>{props.content}</p>
      </Link>
      <SocialActions
        data={data}
        userId={userId}
        showAddComment={showAddComment}
        setShowAddComment={setShowAddComment}
        sendGetRequestState={sendGetRequestState}
        setSendGetRequestState={() => setSendGetRequestState(true)}
      />
      {showAddComment && (
        <AddComment
          sendGetRequestState={sendGetRequestState}
          setSendGetRequestState={() => setSendGetRequestState(true)}
          userData={userData}
          data={data}
          setShowAddComment={() => setShowAddComment(false)}
        />
      )}
    </li>
  );
};

export default FeedItem;
