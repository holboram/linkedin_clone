import React, { Fragment, useState, useEffect } from 'react';

import useHttp from '../../hooks/use-http.js';
import { basePath } from '../common/getData.js';

import styles from './SocialActions.module.scss';

const CheckSocialCounts = props => {
  const { displaySocialCounts, displayNoComments } = props;
  return (
    <Fragment>
      <div className={styles['wrapper-center__social-counts']}>
        {displaySocialCounts === 0 ? null : (
          <div className={styles['wrapper-center__likes']}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              id="like-consumption-small"
              data-supported-dps="16x16"
            >
              <g>
                <path d="M8 0a8 8 0 018 8 8 8 0 01-8 8 8 8 0 01-8-8 8 8 0 018-8z" fill="none" />
                <circle cx="8" cy="8" r="7" fill="#378fe9" />
                <path
                  d="M11.93 7.25h-.55c-.05 0-.15-.19-.4-.46-.37-.4-.78-.91-1.07-1.19a7.13 7.13 0 01-1.73-2.24c-.24-.51-.26-.74-.75-.74a.78.78 0 00-.67.81c0 .14.07.63.1.8a7.54 7.54 0 001 2.2H4.12a.88.88 0 00-.65.28.84.84 0 00-.23.66.91.91 0 00.93.85h.16a.82.82 0 00-.55.24.77.77 0 00-.21.54.81.81 0 00.74.8.8.8 0 00.33 1.42.76.76 0 00-.09.55.87.87 0 00.85.63h2.29a3.8 3.8 0 00.89-.11l1.42-.4h1.9c1.02-.04 1.29-4.64.03-4.64z"
                  fill="#d0e8ff"
                  fillRule="evenodd"
                />
                <path
                  d="M7.43 6.43H4.11a.88.88 0 00-.88 1 .92.92 0 00.93.84h.16a.82.82 0 00-.55.24.77.77 0 00-.21.56.83.83 0 00.74.81.81.81 0 00-.31.63.81.81 0 00.65.8.78.78 0 00-.09.56.86.86 0 00.85.62h2.29a3.8 3.8 0 00.89-.11l1.42-.47h1.9c1 0 1.27-4.64 0-4.64a5 5 0 01-.55 0s-.15-.19-.4-.46h0c-.37-.4-.78-.91-1.07-1.19a7.08 7.08 0 01-1.7-2.25 2.14 2.14 0 00-.32-.52.83.83 0 00-1.16.09 1.39 1.39 0 00-.25.38 1.71 1.71 0 00-.09.3 2.38 2.38 0 00.07.84 4.12 4.12 0 00.27.84 6.65 6.65 0 00.66 1 .18.18 0 01.07.08"
                  fill="none"
                  stroke="#004182"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
            {displaySocialCounts}
          </div>
        )}
        {displayNoComments.length > 0 ? (
          <button className={styles['wrapper-center__no-comments']}>{displayNoComments.length} comments</button>
        ) : null}
      </div>
    </Fragment>
  );
};

const SocialActions = props => {
  const { userId, setShowAddComment, sendGetRequestState, setSendGetRequestState } = props;
  const { comments, socialCounts, id } = props.data;
  const [displaySocialCounts, setDisplaySocialCounts] = useState(socialCounts.length);
  const [displayNoComments, setDisplayNoComments] = useState([]);
  const [sendRequestState, setSendRequestState] = useState(false);

  const { sendRequest: sendPatchRequest } = useHttp();
  const { sendRequest: sendGetRequest } = useHttp();

  // Get no of comments
  useEffect(() => {
    const sendGetUrl = new URL(`api/comments/${id}`, basePath);

    sendGetRequestState &&
      sendGetRequest(
        {
          url: sendGetUrl,
        },
        setDisplayNoComments
      );
    return () => {
      setSendGetRequestState(false);
    };
  }, [sendGetRequestState, sendGetRequest, setSendGetRequestState, id, comments, setDisplayNoComments]);

  // Get no of likes
  useEffect(() => {
    const sendPatchUrl = new URL(`api/posts/${id}`, basePath);

    sendRequestState &&
      sendPatchRequest(
        {
          url: sendPatchUrl,
          method: 'PATCH',
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
          body: { socialCounts: userId },
        },
        data => setDisplaySocialCounts(data.data.likes)
      );
    return () => {
      setSendRequestState(false);
    };
  }, [sendRequestState, sendPatchRequest, id, userId]);
  // console.log(displaySocialCounts);
  // console.log(displayNoComments);

  return (
    <Fragment>
      <CheckSocialCounts displaySocialCounts={displaySocialCounts} displayNoComments={displayNoComments} />

      <div className={styles['wrapper-center__social-actions']}>
        <button className={styles['wrapper-center__btn-social']} onClick={() => setSendRequestState(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
          </svg>
          &nbsp;
          <span>Like</span>
        </button>
        <button className={styles['wrapper-center__btn-social']} onClick={() => setShowAddComment(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
          </svg>
          &nbsp;
          <span>Comment</span>
        </button>
        <button className={styles['wrapper-center__btn-social']}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
          </svg>
          &nbsp;
          <span>Share</span>
        </button>
        <button className={styles['wrapper-center__btn-social']}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
          </svg>
          &nbsp;
          <span>Send</span>
        </button>
      </div>
    </Fragment>
  );
};

export default SocialActions;
