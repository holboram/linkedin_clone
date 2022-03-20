import React, { useState, useEffect } from 'react';

import useHttp from '../../hooks/use-http.js';
import { basePath } from '../common/getData.js';

import userImg2 from '../../assets/768px-LinkedIn_logo_initials.png';

import styles from './Comments.module.scss';

const Comments = props => {
  const { commentsData } = props;
  const { commentContent, userId } = commentsData;

  const [getUserData, setGetUserData] = useState({});
  const [triggerGetUserData, setTriggerGetUserData] = useState(true);

  const { sendRequest: sendGetRequestUserData } = useHttp();

  useEffect(() => {
    const sendGetUrl = new URL(`api/users/${userId}`, basePath);

    triggerGetUserData &&
      sendGetRequestUserData(
        {
          url: sendGetUrl,
        },
        userData => setGetUserData(userData)
      );
    return () => {
      setTriggerGetUserData(false);
    };
  }, [userId, sendGetRequestUserData, setGetUserData, getUserData, triggerGetUserData]);

  const userImg = getUserData.image ? new URL(getUserData.image, basePath) : userImg2;
  return (
    <div className={styles['wrapper-center__comment']}>
      <img className={styles['wrapper-center__comment-user-img']} src={userImg} width="42" alt="name" />
      <div className={styles['wrapper-center__comment-content-container']}>
        <div className={styles['wrapper-center__comment-header-background']}>
          <div className={styles['wrapper-center__comment-header']}>
            <div className={styles['wrapper-center__name-profession']}>
              <span className={styles['wrapper-center__name']}>{getUserData.name}</span>
              <span className={styles['wrapper-center__profession']}>{getUserData.profession}</span>
            </div>
            <div className={styles['wrapper-center__time-wrapper']}>
              <time className={styles['wrapper-center__time']}>20h</time>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M3 9.5A1.5 1.5 0 114.5 8 1.5 1.5 0 013 9.5zM11.5 8A1.5 1.5 0 1013 6.5 1.5 1.5 0 0011.5 8zm-5 0A1.5 1.5 0 108 6.5 1.5 1.5 0 006.5 8z"></path>
              </svg>
            </div>
          </div>
          <div className={styles['wrapper-center__comment-content']}>
            <span className={styles['wrapper-center__comment-content-txt']}>{commentContent}</span>
          </div>
        </div>
        <div className={styles['wrapper-center__comment-social-actions']}>
          <div className={styles['wrapper-center__like-container']}>
            <button className={styles['wrapper-center__like-btn']}>
              <span className={styles['wrapper-center__btn-txt']}>Like</span>
            </button>
            <span className={styles['wrapper-center__no-likes']}>
              <span className={styles['wrapper-center__dot-divider']}>&#183;</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                id="like-consumption-small"
                data-supported-dps="16x16"
              >
                <g>
                  <path d="M8 0a8 8 0 018 8 8 8 0 01-8 8 8 8 0 01-8-8 8 8 0 018-8z" fill="none"></path>
                  <circle cx="8" cy="8" r="7" fill="#378fe9"></circle>
                  <path
                    d="M11.93 7.25h-.55c-.05 0-.15-.19-.4-.46-.37-.4-.78-.91-1.07-1.19a7.13 7.13 0 01-1.73-2.24c-.24-.51-.26-.74-.75-.74a.78.78 0 00-.67.81c0 .14.07.63.1.8a7.54 7.54 0 001 2.2H4.12a.88.88 0 00-.65.28.84.84 0 00-.23.66.91.91 0 00.93.85h.16a.82.82 0 00-.55.24.77.77 0 00-.21.54.81.81 0 00.74.8.8.8 0 00.33 1.42.76.76 0 00-.09.55.87.87 0 00.85.63h2.29a3.8 3.8 0 00.89-.11l1.42-.4h1.9c1.02-.04 1.29-4.64.03-4.64z"
                    fill="#d0e8ff"
                    fillRule="evenodd"
                  ></path>
                  <path
                    d="M7.43 6.43H4.11a.88.88 0 00-.88 1 .92.92 0 00.93.84h.16a.82.82 0 00-.55.24.77.77 0 00-.21.56.83.83 0 00.74.81.81.81 0 00-.31.63.81.81 0 00.65.8.78.78 0 00-.09.56.86.86 0 00.85.62h2.29a3.8 3.8 0 00.89-.11l1.42-.47h1.9c1 0 1.27-4.64 0-4.64a5 5 0 01-.55 0s-.15-.19-.4-.46h0c-.37-.4-.78-.91-1.07-1.19a7.08 7.08 0 01-1.7-2.25 2.14 2.14 0 00-.32-.52.83.83 0 00-1.16.09 1.39 1.39 0 00-.25.38 1.71 1.71 0 00-.09.3 2.38 2.38 0 00.07.84 4.12 4.12 0 00.27.84 6.65 6.65 0 00.66 1 .18.18 0 01.07.08"
                    fill="none"
                    stroke="#004182"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
              <span>1</span>
            </span>
          </div>
          <div className={styles['wrapper-center__social-divider']}></div>
          <div className={styles['wrapper-center__reply-container']}>
            <button className={styles['wrapper-center__reply-btn']}>
              <span className={styles['wrapper-center__btn-txt']}>Reply</span>
            </button>
            <span className={styles['wrapper-center__no-replies']}>
              <span className={styles['wrapper-center__dot-divider']}>&#183;</span>3 Replies
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
