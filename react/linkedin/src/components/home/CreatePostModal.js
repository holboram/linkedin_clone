import React, { Fragment, useEffect, useRef, useState, useMemo } from 'react';
import ReactDOM from 'react-dom';

import useHttp from '../../hooks/use-http.js';
import { basePath } from '../../containers/common/getData.js';

import styles from './CreatePostModal.module.scss';

const Backdrop = props => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = props => {
  const { onConfirm, userId } = props;
  const [sendRequestState, setSendRequestState] = useState(false);
  const postInputRef = useRef();
  const { sendRequest: sendPostRequest } = useHttp();

  const setSendRequestStateHandler = () => {
    setSendRequestState(true);
  };

  const getNewUrl = basePath => {
    return new URL('api/posts', basePath);
  };
  const sendPostUrl = useMemo(() => getNewUrl(basePath), []);

  useEffect(() => {
    const closeModal = () => {
      onConfirm();
    };

    let bodyData = {
      userId: userId,
      date: Date.now(),
      content: postInputRef.current.value,
      socialCounts: [],
    };

    sendRequestState &&
      sendPostRequest(
        {
          url: sendPostUrl,
          method: 'POST',
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
          body: bodyData,
        },
        closeModal
      );
    return () => {
      setSendRequestState(false);
    };
  }, [userId, sendPostRequest, sendPostUrl, sendRequestState, onConfirm]);

  return (
    <div className={styles['wrapper__modal']}>
      <div className={styles['wrapper__modal-header']}>
        <h2>Create a post</h2>
        <button onClick={props.onConfirm}>&times;</button>
      </div>
      <div className={styles['wrapper__modal-name']}>
        <img src={props.userImg} width="48" className={styles['wrapper__image-profile']} alt="user" />
        <div className={styles['wrapper__modal-name-rightside']}>
          <span className={styles['wrapper__modal-user-name']}>{props.userName}</span>
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
              <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
            </svg>
            <span>Anyone</span>
          </button>
        </div>
      </div>
      <div className={styles['wrapper__modal-body']}>
        <textarea type="text" id="post-content" ref={postInputRef}></textarea>
      </div>
      <div className={styles['wrapper__modal-hashtag']}>
        <button>Add hashtag</button>
      </div>

      <div className={styles['wrapper__modal-share']}>
        <ul>
          <li>
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
                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
              </svg>
            </button>
          </li>
          <li>
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
                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
              </svg>
            </button>
          </li>
          <li>
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
                <path d="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z"></path>
              </svg>
            </button>
          </li>
          <li>
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
                <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
              </svg>
            </button>
          </li>
          <li>
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
                <path d="M22 11.1L20.47 10a1.09 1.09 0 01-.4-1.25l.62-1.81a1.11 1.11 0 00-.7-1.4 1.07 1.07 0 00-.35-.06h-2a1.09 1.09 0 01-1.05-.76l-.59-2A1.09 1.09 0 0015 2a1.11 1.11 0 00-.66.22l-1.69 1.17a1.13 1.13 0 01-1.31 0L9.75 2.22a1.11 1.11 0 00-1.55.16 1.07 1.07 0 00-.2.38L7.41 4.7a1.09 1.09 0 01-1 .76h-2a1.11 1.11 0 00-1.16 1.06 1.34 1.34 0 00.06.4l.63 1.82a1.1 1.1 0 01-.4 1.26L2 11.11a1.1 1.1 0 00-.26 1.53 1.28 1.28 0 00.26.26L3.53 14a1.09 1.09 0 01.4 1.25l-.62 1.8a1.11 1.11 0 00.7 1.4 1.07 1.07 0 00.35.06h2a1.09 1.09 0 011 .76l.64 2a1.12 1.12 0 001.1.73 1.05 1.05 0 00.64-.22l1.6-1.17a1.1 1.1 0 011.31 0l1.6 1.17a1.14 1.14 0 001.75-.55l.62-1.93a1.11 1.11 0 011.05-.76h2a1.11 1.11 0 001.11-1.11 1 1 0 00-.06-.35l-.63-1.82a1.11 1.11 0 01.38-1.26L22 12.89a1.07 1.07 0 00.5-.89 1.1 1.1 0 00-.5-.9zM7 11v-1h10v1zm2 3v-1h6v1z"></path>
              </svg>
            </button>
          </li>
          <li>
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
                <path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"></path>
              </svg>
            </button>
          </li>
          <li>
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
          </li>
        </ul>
        <button
          className={styles['wrapper__post-btn']}
          onClick={setSendRequestStateHandler}
          type="submit"
          value="Post"
          id="post-btn"
        >
          Post
        </button>
      </div>
    </div>
  );
};

const CreatePostModal = props => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const close = e => {
      if (e.keyCode === 27) {
        props.onConfirm();
      }
    };
    window.addEventListener('keydown', close);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', close);
    };
  });
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(
        <ModalOverlay
          triggerRefresh={props.triggerRefresh}
          onConfirm={props.onConfirm}
          userImg={props.userImg}
          userName={props.userName}
          userId={props.userId}
        />,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

export default CreatePostModal;
