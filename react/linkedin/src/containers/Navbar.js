import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Search from './Search.js';

import useHttp from '../hooks/use-http.js';
import { basePath, currentUser } from './common/getData.js';

import styles from './Navbar.module.scss';
import logo from '../assets/768px-LinkedIn_logo_initials.png';

const Navbar = () => {
  const [data, setData] = useState([]);
  const { sendRequest: displayData } = useHttp();

  const userDataUrl = `${basePath}/api/users/${currentUser}`;

  useEffect(() => {
    displayData({ url: userDataUrl }, setData);
  }, [displayData, userDataUrl]);

  const imageUrl = `http://localhost:5000${data.image}`;

  return (
    <section className={styles['header-section']}>
      <header className={styles['header']}>
        <div className={styles['header__logo-wrapper']}>
          <Link to="/">
            <img
              className={styles['header__logo']}
              src={logo}
              alt="LinkedIn logo"
              width="34"
              height="34"
              loading="lazy"
            ></img>
          </Link>
          <Search />
          {/* <div className={styles['header__search']}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" focusable="false">
              <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
            </svg>
            <input className={styles['header__search__input']} type="text" placeholder="Search" name="search"></input>
          </div> */}
        </div>
        <nav className={styles['header__nav']}>
          <div className={styles['header__search-mobile']}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" focusable="false">
              <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
            </svg>
            <span className={styles['header__links-text']}>Search</span>
          </div>
          <NavLink
            exact
            className={styles['header__links']}
            to="/"
            activeStyle={{
              fontWeight: 'bold',
              color: 'black',
              textDecoration: 'underline',
            }}
          >
            <FontAwesomeIcon icon="home" className={styles['fas']} />
            <span className={styles['header__links-text']}>Home</span>
          </NavLink>
          <NavLink
            exact
            className={styles['header__links']}
            to="/my-network"
            activeStyle={{
              fontWeight: 'bold',
              color: 'black',
              textDecoration: 'underline',
            }}
          >
            <FontAwesomeIcon icon="users" className={styles['fas']} />
            <span className={styles['header__links-text']}>My Network</span>
          </NavLink>
          <NavLink
            exact
            className={styles['header__links']}
            to="/jobs"
            activeStyle={{
              fontWeight: 'bold',
              color: 'black',
              textDecoration: 'underline',
            }}
          >
            <FontAwesomeIcon icon="briefcase" className={styles['fas']} />
            <span className={styles['header__links-text']}>Jobs</span>
          </NavLink>
          <NavLink
            exact
            className={styles['header__links']}
            to="/messaging"
            activeStyle={{
              fontWeight: 'bold',
              color: 'black',
              textDecoration: 'underline',
            }}
          >
            <FontAwesomeIcon icon="comment-dots" className={styles['fas']} />
            <span className={styles['header__links-text']}>Messaging</span>
          </NavLink>
          <NavLink
            exact
            className={styles['header__links']}
            to="/notifications"
            activeStyle={{
              fontWeight: 'bold',
              color: 'black',
              textDecoration: 'underline',
            }}
          >
            <FontAwesomeIcon icon="bell" className={styles['fas']} />
            <span className={styles['header__links-text']}>Notifications</span>
          </NavLink>
          <NavLink
            exact
            className={styles['header__links']}
            to="/me"
            activeStyle={{
              fontWeight: 'bold',
              color: 'black',
              textDecoration: 'underline',
            }}
          >
            <img src={imageUrl} className={styles['header__avatar-image']} width="24" alt="User avatar" />
            <span className={styles['header__links-text']}>Me</span>
          </NavLink>
          <NavLink
            exact
            className={styles['header__links']}
            to="/work"
            activeStyle={{
              fontWeight: 'bold',
              color: 'black',
              textDecoration: 'underline',
            }}
          >
            <FontAwesomeIcon icon="th" className={styles['fas']} />
            <span className={styles['header__links-text']}>Work</span>
          </NavLink>
        </nav>
      </header>
    </section>
  );
};

export default Navbar;
