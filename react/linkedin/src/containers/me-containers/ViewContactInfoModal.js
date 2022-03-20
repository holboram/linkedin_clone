import React, { Fragment, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import EditContactInfoModal from './EditContactInfoModal.js';

import styles from './ViewContactInfoModal.module.scss';

const Backdrop = props => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ViewContactInfoModal = props => {
  const [EditContactInfoModalState, setEditContactInfoModal] = useState(false);
  const { data, isLoading, onConfirm } = props;
  const { address, birthday, email, name, phone, profileLink } = data;

  const [userInfoState, setUserInfoState] = useState({
    info: {
      enteredPhoneNo: phone.no,
      enteredPhoneType: phone.type,
      enteredAddress: address,
      enteredBirthDay: birthday.day,
      enteredBirthMonth: birthday.month,
    },
  });

  const getInfoState = info => {
    setUserInfoState(prevState => ({
      info: {
        ...prevState.info,
        enteredPhoneNo: info.enteredPhoneNo,
        enteredPhoneType: info.enteredPhoneType,
        enteredAddress: info.enteredAddress,
        enteredBirthDay: info.enteredBirthDay,
        enteredBirthMonth: info.enteredBirthMonth,
      },
    }));
  };

  return (
    //  Modal Contact Info
    <Fragment>
      {EditContactInfoModalState && (
        <EditContactInfoModal
          getInfoState={getInfoState}
          data={data}
          onConfirmEditInfo={() => setEditContactInfoModal(false)}
        />
      )}
      {
        <div className={styles['wrapper__modal']}>
          <div className={styles['wrapper__modal-header']}>
            <h2 className={styles['wrapper__modal-user-name']}>{name}</h2>
            <button className={styles['wrapper__modal-close-btn']} onClick={onConfirm}>
              &times;
            </button>
          </div>
          <div className={styles['wrapper__modal-body']}>
            <div className={styles['wrapper__modal-info']}>
              <h2>Contact Info</h2>
              <button className={styles['wrapper__modal-edit-btn']} onClick={() => setEditContactInfoModal(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                </svg>
              </button>
            </div>
            <div className={styles['wrapper__modal-info-details']}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
              <div className={styles['wrapper__modal-info-body']}>
                <h3>Your Profile</h3>
                <a id="profile" href={profileLink}>
                  {profileLink}
                </a>
              </div>
            </div>
            <div className={styles['wrapper__modal-info-details']}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M21.7 19.18l-1.92 1.92a3.07 3.07 0 01-3.33.67 25.52 25.52 0 01-8.59-5.63 25.52 25.52 0 01-5.63-8.59 3.07 3.07 0 01.67-3.33L4.82 2.3a1 1 0 011.41 0l3.15 3.11A1.1 1.1 0 019.41 7L7.59 8.73a20.51 20.51 0 007.68 7.68l1.78-1.79a1.1 1.1 0 011.54 0l3.11 3.11a1 1 0 010 1.41z"></path>
              </svg>
              <div className={styles['wrapper__modal-info-body']}>
                <h3>Phone</h3>
                <span id="phone-no">{userInfoState.info.enteredPhoneNo}</span>&nbsp;(
                <span id="phone-type">{userInfoState.info.enteredPhoneType}</span>)
              </div>
            </div>
            <div className={styles['wrapper__modal-info-details']}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M12 2a7 7 0 00-6.1 10.43L12 23l6.1-10.57A7 7 0 0012 2zm0 10a3 3 0 113-3 3 3 0 01-3 3z"></path>
              </svg>
              <div className={styles['wrapper__modal-info-body']}>
                <h3>Address</h3>
                <a href={`http://maps.google.com/?q=${userInfoState.info.enteredAddress}`} id="address">
                  {userInfoState.info.enteredAddress}
                </a>
              </div>
            </div>
            <div className={styles['wrapper__modal-info-details']}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M2 4v13a3 3 0 003 3h14a3 3 0 003-3V4zm18 2v1.47l-8 5.33-8-5.33V6zm-1 12H5a1 1 0 01-1-1V8.67L12 14l8-5.33V17a1 1 0 01-1 1z"></path>
              </svg>
              <div className={styles['wrapper__modal-info-body']}>
                <h3>Email</h3>
                <a id="email" href={`mailto:${email}`}>
                  {email}
                </a>
              </div>
            </div>
            <div className={styles['wrapper__modal-info-details']}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M21 18V9a1 1 0 00-1-1h-2V4h-2v4h-3V4h-2v4H8V4H6v4H4a1 1 0 00-1 1v9H2v2h20v-2h-1zm-2-8v3H5v-3h14zM5 14h14v4H5v-4z"></path>
              </svg>
              <div className={styles['wrapper__modal-info-body']}>
                <h3>Birthday</h3>
                <span id="month">{userInfoState.info.enteredBirthMonth}</span>&emsp;
                <span id="day">{userInfoState.info.enteredBirthDay}</span>
              </div>
            </div>
          </div>
        </div>
      }
      {isLoading && <p>Loading...</p>}
    </Fragment>
  );
};

const ContactInfoModal = props => {
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
        <ViewContactInfoModal data={props.data} isLoading={props.isLoading} onConfirm={props.onConfirm} />,
        document.getElementById('contact-info-root')
      )}
    </Fragment>
  );
};

export default ContactInfoModal;
