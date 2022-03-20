import React from 'react';

import Advertising from '../Advertising.js';
import Footer from '../Footer.js';

import { getTime } from '../../containers/common/getTime.js';

import styles from './ViewPost.module.scss';

const ViewPost = props => {
  const { content, user, date } = props.location.viewPost.data;
  const { name, profession, image } = user;

  getTime(date);

  const imageUrl = `http://localhost:5000${image}`;
  return (
    //  Main Section
    <section className={styles['main-section']}>
      <div className={styles['main-wrapper']}>
        <div className={styles['wrapper-center-right']}>
          {/* Center  */}
          <main className={styles['wrapper-center']}>
            <div className={styles['wrapper-center__feed-list']}>
              <div className={styles['wrapper-center__list-item']}>
                <div className={styles['wrapper-center__users-posts']}>
                  <div className={styles['wrapper-center__header']}>
                    <a className={styles['wrapper-center__image']} href=" #">
                      <img src={imageUrl} width="48" className={styles['wrapper-right__image-profile']} alt="user" />
                    </a>
                    <div className={styles['wrapper-center__header-width']}>
                      <a href="user">
                        <strong>{name}</strong>
                      </a>
                      <div>{profession}</div>
                      <div className={styles['wrapper-center__date']}>
                        <span>{getTime(date)}</span>
                      </div>
                    </div>
                    <div className={styles['wrapper-center__btn']}>
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
                          <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22zm-3-1a1 1 0 011 1v12.51L12 13l-5 4.51V4z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className={styles['wrapper-center__text-wrapper']}>
                    <span className={styles['wrapper-center__about-summary']}>{content}</span>
                  </div>
                </div>
              </div>
            </div>
          </main>
          {/* Aside right */}
          <aside className={styles['wrapper-right']}>
            <Advertising />
            <Footer />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ViewPost;
