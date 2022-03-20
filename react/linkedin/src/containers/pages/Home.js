import React, { Fragment, useState, useEffect, useCallback } from 'react';
import ActivitiesList from '../../components/home/ActivitiesList.js';
import ShareBtn from '../../components/home/ShareBtn.js';
import Advertising from '../../components/Advertising.js';
import Footer from '../../components/Footer.js';
import Card from '../../components/UI/Card.js';
import DisplayFeed from '../../components/home/DisplayFeed.js';
import FeedSuggestions from '../home-containers/FeedSuggestions.js';
import CreatePostModal from '../../components/home/CreatePostModal.js';
import { basePath, currentUser } from '../common/getData.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useHttp from '../../hooks/use-http.js';

import styles from './Home.module.scss';

const Home = () => {
  // Get user data
  const [userData, setUserData] = useState([]);
  const [feedData, setFeedData] = useState([]);
  const [toggleTopRecent, setToggleTopRecent] = useState('Top');
  const [infoContainerState, setInfoContainerState] = useState('none');
  const [dropdownState, setDropdownState] = useState('none');
  const [toggleModalState, setToggleModalState] = useState(false);

  const userDataUrl = `${basePath}/api/users/${currentUser}`;
  const feedPostsUrl = `${basePath}/api/users/${currentUser}/feed`;

  const { sendRequest: displayData } = useHttp();
  const { isLoading: feedLoading, error: feedError, sendRequest: displayFeedData } = useHttp();

  const refreshFeedData = useCallback(() => {
    displayFeedData({ url: feedPostsUrl }, setFeedData);
  }, [displayFeedData, feedPostsUrl]);

  useEffect(() => {
    displayData({ url: userDataUrl }, setUserData);
  }, [displayData, userDataUrl, toggleModalState]);

  useEffect(() => {
    if (toggleModalState) return;
    refreshFeedData();
  }, [refreshFeedData, toggleModalState]);

  // Toggle show/hide sort button
  const toggleContentDropdownHandler = () => {
    if (dropdownState !== 'flex') {
      setDropdownState('flex');
    } else {
      setDropdownState('none');
    }
  };

  // Toggle show/hide info container
  const toggleContentInfoContainerHandler = () => {
    if (infoContainerState !== 'flex') {
      setInfoContainerState('flex');
    } else {
      setInfoContainerState('none');
    }
  };

  // Toggle show/hide post modal
  const modalHandler = () => {
    if (toggleModalState) {
      setToggleModalState(false);
    } else {
      setToggleModalState(true);
    }
  };

  // Toggle Top/Recent handler
  const toggleTopRecentHandler = () => {
    if (toggleTopRecent === 'Top') {
      setToggleTopRecent('Recent');
      toggleContentDropdownHandler();
    } else {
      setToggleTopRecent('Top');
      toggleContentDropdownHandler();
    }
  };

  const imageUrl = `http://localhost:5000${userData.image}`;
  return (
    <Fragment>
      {toggleModalState && (
        <CreatePostModal onConfirm={modalHandler} userId={userData.id} userImg={imageUrl} userName={userData.name} />
      )}

      <section className={styles['main-section']}>
        <div className={styles['main-wrapper']}>
          <div className={styles['height']}>
            <Card>
              <div className={styles['wrapper-left__name']}>
                <div className={styles['wrapper-left__profile-container']}>
                  <div className={styles['wrapper-left__image-background']}></div>
                  <a href="./profile.html" className={styles['wrapper-left__profile-link']}>
                    <img width="64" src={imageUrl} alt="avatar" className={styles['wrapper-left__avatar-image']} />
                    <span className={styles['wrapper-left__profile-name']}>{userData.name}</span>
                  </a>
                  <p className={styles['wrapper-left__profession']}>{userData.profession}</p>
                </div>
                <a
                  href="/dfsf.html"
                  className={`${styles['wrapper-left__connections-container']} ${styles['wrapper-left__connections-container--hide-content']}`}
                >
                  <div className={styles['wrapper-left__connections']}>
                    <span className={styles['wrapper-left__light']}>Connections</span>
                    <span>24</span>
                  </div>
                  <span>Grow Your Network</span>
                </a>
                <a
                  href="/sdfsd.html"
                  className={`${styles['wrapper-left__premium']} ${styles['wrapper-left__premium--hide-content']}`}
                >
                  <h3>Access exclusive tools & insights</h3>
                  <span className={styles['wrapper-left__activate-premium']}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="wrapper-left__"
                      viewBox="0 0 24 24"
                      data-supported-dps="18x18"
                      width="18"
                      height="18"
                      focusable="false"
                    >
                      <path
                        d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                        fill="#f8c77e"
                      ></path>
                      <path
                        d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                        fill="#e7a33e"
                      ></path>
                    </svg>
                    <span className="wrapper-left__reactivate-premium">Reactivate Premium</span>
                  </span>
                </a>
                <a
                  className={`${styles['wrapper-left__my-items']} ${styles['wrapper-left__my-items--hide-content']}`}
                  href="/fsfd.html"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="18x18"
                    fill="currentColor"
                    width="18"
                    height="18"
                    focusable="false"
                  >
                    <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"></path>
                  </svg>
                  <span>My items</span>
                </a>
              </div>
            </Card>
            <Card
              className={`${styles['wrapper-left__user-details']} ${styles['wrapper-left__user-details--hide-content']}`}
            >
              <div className={styles['wrapper-left__wrapper-list']}>
                <h2>Recent</h2>
                <ActivitiesList></ActivitiesList>
              </div>
              <div className={styles['wrapper-left__wrapper-list']}>
                <a className={styles['wrapper-left__groups']} href="groups.html">
                  Groups
                </a>
                <ActivitiesList></ActivitiesList>
                <a href="show-more.ghtml" className={styles['wrapper-left__align-left']}>
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
              </div>
              <div className={styles['wrapper-left__flex']}>
                <a href="events.html" className={styles['wrapper-left__groups']}>
                  Events
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                </svg>
              </div>
              <a href="Fpllowed-hashtags.html" className={styles['wrapper-left__groups']}>
                Followed Hashtags
              </a>
              <a href="discover-more.html" className={styles['wrapper-left__align-center']}>
                Discover more
              </a>
            </Card>
          </div>

          <button className={styles['main-wrapper__show-btn']}>Show more</button>

          {/* Center */}
          <div className={styles['wrapper-center-right']}>
            <main className={styles['wrapper-center']}>
              <div className={styles['wrapper-center__top']}>
                <div className={styles['wrapper-center__post']}>
                  <a href="profile.html">
                    <img width="48" src={imageUrl} className={styles['wrapper-center__image-profile']} alt="profile" />
                  </a>
                  <button className={styles['wrapper-center__post-btn']} onClick={modalHandler}>
                    <span className={styles['wrapper-center__btn-text']}>Start a post</span>
                  </button>
                </div>
                <div className={styles['wrapper-center__share']}>
                  <ShareBtn
                    svgImage={
                      'M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z'
                    }
                    text={'Photo'}
                    className={styles['photo']}
                  ></ShareBtn>
                  <ShareBtn
                    svgImage={'M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z'}
                    text={'Video'}
                    className={styles['video']}
                  ></ShareBtn>
                  <ShareBtn
                    svgImage={
                      'M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z'
                    }
                    text={'Event'}
                    className={styles['calendar']}
                  ></ShareBtn>
                  <ShareBtn
                    svgImage={'M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z'}
                    text={'Article'}
                    className={styles['article']}
                  ></ShareBtn>
                </div>
              </div>
              {/* Sort Button */}
              <div className={styles['wrapper-center__sort-feed-container']}>
                <div className={styles['wrapper-center__content-dropdown']} style={{ display: dropdownState }}>
                  <span className={styles['wrapper-center__content-option']} onClick={toggleTopRecentHandler}>
                    Top
                  </span>
                  <span className={styles['wrapper-center__content-option']} onClick={toggleTopRecentHandler}>
                    Recent
                  </span>
                </div>
                <button className={styles['wrapper-center__sort-btn']} onClick={toggleContentDropdownHandler}>
                  <hr />
                  <div className={styles['wrapper-center__filter-container']}>
                    <span>Sort By:&nbsp;&nbsp;</span>
                    <span>
                      <strong>{toggleTopRecent}</strong>
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      data-supported-dps="16x16"
                      fill="currentColor"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path d="M8 11L3 6h10z" fillRule="evenodd"></path>
                    </svg>
                  </div>
                </button>
              </div>
              {/* Feed */}
              <DisplayFeed
                toggleTopRecent={toggleTopRecent}
                userId={userData.id}
                userData={userData}
                sortBtn={toggleTopRecent}
                data={feedData}
                error={feedError}
                isLoading={feedLoading}
                setRefreshAfterDelete={refreshFeedData}
              />
            </main>

            {/* Aside Right */}
            <aside className={styles['wrapper-right']}>
              <div className={styles['wrapper-right__feed-ad-container']}>
                <div className={styles['wrapper-right__container-feed-suggestions']}>
                  <div className={styles['wrapper-right__add-feed']}>
                    <h2>Add to your feed</h2>
                    <button onClick={toggleContentInfoContainerHandler}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        className={styles['wrapper-right__info-icon']}
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
                      </svg>
                    </button>
                    <div style={{ display: infoContainerState }} className={styles['wrapper-right__info-container']}>
                      <span className={styles['wrapper-right__text']}>
                        Follow things that interest you to personalize your feed.
                      </span>
                      <FontAwesomeIcon
                        icon="times"
                        className={`${styles['fas']} ${styles['wrapper-right__times-icon']}`}
                        onClick={toggleContentInfoContainerHandler}
                      />
                    </div>
                  </div>

                  {/* Add to Feed Sugestions */}
                  <FeedSuggestions />

                  <a href="view-recomandations" className={styles['wrapper-right__recomandations']}>
                    View all recomandations
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      data-supported-dps="16x16"
                      fill="currentColor"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path d="M11.45 3L15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z"></path>
                    </svg>
                  </a>
                </div>
                <Advertising />
              </div>
              <Footer />
            </aside>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
