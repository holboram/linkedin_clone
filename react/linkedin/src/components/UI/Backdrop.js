import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import styles from './Backdrop.module.scss';

const BackdropRoot = () => {
  return <div className={styles['backdrop']}></div>;
};

const Backdrop = () => {
  return <Fragment>{ReactDOM.createPortal(<BackdropRoot />, document.getElementById('backdrop-root'))}</Fragment>;
};

export default Backdrop;
