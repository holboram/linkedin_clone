import React, { Fragment, useState, useEffect } from 'react';

import useHttp from '../../hooks/use-http.js';
import { basePath, currentUser } from '../common/getData.js';

import CardMainSection from '../../components/UI/CardMainSection.js';
import Card from '../../components/UI/Card.js';
import PeopleViewedElement from '../../components/Me/PeopleViewedElement.js';
import Advertising from '../../components/Advertising.js';
import ContactInfoModal from '../me-containers/ViewContactInfoModal.js';

import imageUser_1 from '../../assets/FB_IMG_1588881980469.jpg';
import imageUser_2 from '../../assets/FB_IMG_1588881980469.jpg';
import imageUser_3 from '../../assets/FB_IMG_1588881980469.jpg';
import imageUser_4 from '../../assets/FB_IMG_1588881980469.jpg';
import tetedoieImg from '../../assets/tetedoie.jpeg';
import openclassroomsImg from '../../assets/openclassrooms.png';

import styles from './Me.module.scss';

const Me = () => {
  const [data, setData] = useState();
  const [toggleModalState, setToggleModalState] = useState(false);

  const userDataUrl = `${basePath}/api/users/${currentUser}`;

  const { isLoading, error, sendRequest: displayData } = useHttp();

  useEffect(() => {
    displayData({ url: userDataUrl }, setData);
  }, [userDataUrl, displayData, toggleModalState]);

  return (
    <Fragment>
      {toggleModalState && (
        <ContactInfoModal onConfirm={() => setToggleModalState(false)} data={data} isLoading={isLoading} />
      )}

      {!isLoading && data && (
        <CardMainSection>
          <article className={styles['wrapper-left']}>
            <div className={styles['wrapper-left__name']}>
              <div className={styles['wrapper-left__profile-container']}>
                <div className={styles['wrapper-left__image-background']}></div>
                <a href="upload" className={styles['wrapper-left__upload-img']}>
                  <img
                    width="160"
                    src={`${basePath}${data.image}`}
                    // src={imageUser_1}
                    className={styles['wrapper-left__avatar-image']}
                    alt="Marius"
                  />
                </a>

                <div className={styles['wrapper-left__info-container']}>
                  <div className={styles['wrapper-left__user-info']}>
                    <h1 className={styles['wrapper-left__profile-name']}>{data.name}</h1>
                    <p className={styles['wrapper-left__profession']}>{data.profession}</p>
                    <span className={styles['wrapper-left__contact-area']}>
                      {data.address} &#8231;{' '}
                      <button className={styles['wrapper-left__contact-btn']} onClick={() => setToggleModalState(true)}>
                        Contact info
                      </button>
                    </span>
                    <a href="connections" className={styles['wrapper-left__contact-connections']}>
                      25 connections
                    </a>
                    <div className={styles['wrapper-left__cta-btns']}>
                      <button
                        className={`${styles['wrapper-left__cta-btn']} ${styles['wrapper-left__cta-btn--primary']}`}
                      >
                        Open to
                      </button>
                      <button className={styles['wrapper-left__cta-btn']}>Add section</button>
                      <button className={styles['wrapper-left__cta-btn']}>More</button>
                    </div>
                  </div>
                  <div className={styles['wrapper-left__exprerience']}>
                    <a className={styles['wrapper-left__experience-link']} href="previous-company">
                      <img width="32px" src={tetedoieImg} alt="tetedoie" />
                      Maison Christian TETEDOIE
                    </a>
                    <a className={styles['wrapper-left__experience-link']} href="openclassrooms">
                      <img width="32px" src={openclassroomsImg} alt="openclassrooms" />
                      OpenClassrooms
                    </a>
                  </div>
                </div>
                <div className={styles['wrapper-left__open-to-container']}>
                  <a className={styles['wrapper-left__open-to-wrapper']} href="open-to-work">
                    <h3>
                      <strong>Open to work</strong>
                    </h3>
                    <p>{data.open}</p>
                    <p>See all details</p>
                  </a>
                  <svg
                    className={styles['wrapper-left__pen']}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z"></path>
                  </svg>
                </div>
              </div>
              <div className={styles['wrapper-left__about']}>
                <h2>About</h2>
                <p className={styles['wrapper-left__text-about']}>
                  After having different professional experiences in various industries I decided that web development
                  is the path I want to take. Therefore I passed a course in web development to start my new career.
                  Dedication, pugnacity and curiosity define my mind set, I then would like to enter a company where I
                  ca
                  <span className={styles['wrapper-left__dots']}>
                    ...<button className={styles['wrapper-left__see-more-btn']}>see more</button>
                  </span>
                  <span className={styles['wrapper-left__more']}>
                    n share my skills and develop new ones. Getting a web development position would be the stepping
                    stone to this new professional adventure. My goal is to become a professional web developer and to
                    help companies achieving their goal by using my knowledge in React.JS, JavaScript, CSS3 and HTML5.
                    Even though I have no experience, I worked on small projects of my own in which I gained invaluable
                    experience.
                  </span>
                </p>
              </div>
              <div className={`${styles['wrapper-left__about']} ${styles['wrapper-left__about--no-radius-bottom']}`}>
                <h2>Activity</h2>
                <p className={styles['wrapper-left__text-about']}>
                  Posts you created, shared, or commented on in the last 90 days are displayed here.
                </p>
              </div>
              <div className={`${styles['wrapper-left__about']} ${styles['wrapper-left__about--no-margin-top']}`}>
                <button>See all activity</button>
              </div>
            </div>
          </article>
          <Card className={styles['wrapper-right']}>
            <div className={styles['wrapper-right__top-container']}>
              <div className={styles['wrapper-right__edit-profile']}>
                <a href="edit-profile" className={styles['wrapper-right__edit-profile-link']}>
                  <span className={styles['wrapper-right__edit-profile-text']}>Edit public profile & URL</span>
                </a>
                <span>
                  <svg
                    xmlns=" http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className={styles['wrapper-right__question-mark']}
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm0 11.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zM8.82 9H7v-.95l.93-.46C8.64 7.24 9 6.89 9 6.6S8.57 6 8 6a6.49 6.49 0 00-3 .91V4.84A6.35 6.35 0 018.1 4c2 0 2.9 1 2.9 2.4 0 .9-.5 1.83-2.18 2.6z"></path>
                  </svg>
                </span>
              </div>
              <hr />
              <div className={styles['wrapper-right__edit-profile']}>
                <a href="profile-link" className={styles['wrapper-right__edit-profile-link']}>
                  <span className={styles['wrapper-right__edit-profile-text']}>Add profile in another language</span>
                </a>
                <span>
                  <svg
                    xmlns=" http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className={styles['wrapper-right__question-mark']}
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm0 11.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zM8.82 9H7v-.95l.93-.46C8.64 7.24 9 6.89 9 6.6S8.57 6 8 6a6.49 6.49 0 00-3 .91V4.84A6.35 6.35 0 018.1 4c2 0 2.9 1 2.9 2.4 0 .9-.5 1.83-2.18 2.6z"></path>
                  </svg>
                </span>
              </div>
            </div>
            <Advertising />
            <ul className={styles['wrapper-right__people-viewed-list']}>
              <h2>People also viewed</h2>
              <PeopleViewedElement userImg={imageUser_1} name="Alex" profession="dev" />
              <PeopleViewedElement userImg={imageUser_2} name="Rodney" profession="dev" />
              <PeopleViewedElement userImg={imageUser_3} name="Alexander" profession="dev" />
              <PeopleViewedElement userImg={imageUser_4} name="Alex" profession="dev" />
            </ul>
            <a className={styles['wrapper-right__show-more']} href="show-more">
              Show more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
              </svg>
            </a>
          </Card>
        </CardMainSection>
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </Fragment>
  );
};

export default Me;
