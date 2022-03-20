import React, { useState, useCallback, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { basePath, currentUser } from './common/getData.js';
import Backdrop from '../components/UI/Backdrop.js';

import useHttp from '../hooks/use-http.js';

import styles from './Search.module.scss';

const getFilteredPosts = (query, posts) => {
  if (!query) {
    return posts;
  }
  return posts.filter(post => post.content.includes(query));
};

const getConclusiveWords = (content, query) => {
  let result = content;

  const regex = new RegExp(`\\b${query}\\b`, 'i');
  const wordIndex = result.search(regex);

  if (wordIndex === 0) {
    result = result.slice(wordIndex, wordIndex + 15);

    result = result.replace(regex, `<strong>${query}</strong>`);

    return result;
  }

  result = result.slice(wordIndex - 10, wordIndex + 15);

  result = result.replace(regex, `<strong>${query}</strong>`);

  return result;
};

const Search = () => {
  const [feedData, setFeedData] = useState([]);
  const [query, setQuery] = useState('');
  const [toggleViewPost, setToggleViewPost] = useState(false);

  const filteredPosts = getFilteredPosts(query, feedData);
  // const firstFivePosts = filteredPosts.slice(0, 5);

  const feedPostsUrl = `${basePath}/api/users/${currentUser}/feed`;

  const { sendRequest: displayFeedData } = useHttp();

  const refreshFeedData = useCallback(() => {
    displayFeedData({ url: feedPostsUrl }, setFeedData);
  }, [displayFeedData, feedPostsUrl]);

  const setToggleViewHandler = () => {
    if (toggleViewPost) {
      setToggleViewPost(false);
    } else {
      setToggleViewPost(true);
    }
  };

  useEffect(() => {
    if (toggleViewPost) {
      refreshFeedData();
    }
  }, [refreshFeedData, toggleViewPost]);

  useEffect(() => {
    if (toggleViewPost) {
      const close = e => {
        if (e.keyCode === 27) {
          setToggleViewHandler();
        }
      };
      window.addEventListener('keydown', close);
    }
  });

  const closeModal = e => {
    if (!e.relatedTarget || e.relatedTarget.classList.contains('Navbar_header__links__2xGDm')) {
      setToggleViewHandler();
      e.target.value = '';
    }
  };

  return (
    <form className={styles['header__search']}>
      <label htmlFor="header-search">
        <span className={styles['header__search-label-hidden']}>Search</span>
      </label>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" focusable="false">
          <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
        </svg>
        <input
          className={styles['header__search__input']}
          id="header-search"
          type="text"
          placeholder="Search"
          name="search"
          onFocus={setToggleViewHandler}
          onChange={e => setQuery(e.target.value)}
          onBlur={e => closeModal(e)}
        ></input>
      </div>
      {toggleViewPost && query && (
        <Fragment>
          <ul className={styles['header__search-list']}>
            {filteredPosts.map(value => (
              <li key={value.id} className={styles['header__search-item']}>
                <Link
                  to={{ pathname: '/view-post', viewPost: { data: value } }}
                  id="exception"
                  onClick={setToggleViewHandler}
                >
                  <div dangerouslySetInnerHTML={{ __html: getConclusiveWords(value.content, query) }} />
                </Link>
              </li>
            ))}
            <Link to="/" className={styles['header__search-btn']} onClick={e => closeModal(e)}>
              See all results
            </Link>
          </ul>
          <Backdrop />
        </Fragment>
      )}
    </form>
  );
};

export default Search;
