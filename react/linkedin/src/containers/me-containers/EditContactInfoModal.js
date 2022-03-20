import React, { Fragment, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import useHttp from '../../hooks/use-http.js';
import { basePath } from '../../containers/common/getData.js';

import styles from './EditContactInfoModal.module.scss';

import { phoneTypeOptions, birthMonthOptions, birthDayOptions } from '../../option-values/values.js';

const BackdropTransparent = props => {
  const { onConfirmEditInfo } = props;
  return <div className={styles['backdrop-transparent']} onClick={onConfirmEditInfo} />;
};

const EditContactInfo = props => {
  const { onConfirmEditInfo, data, getInfoState } = props;
  const { id, phone, address, birthday, email, profileLink } = data;

  const [enteredPhoneNo, setEnteredPhoneNo] = useState(phone.no);
  const [enteredPhoneType, setEnteredPhoneType] = useState(phone.type);
  const [enteredAddress, setEnteredAddress] = useState(address);
  const [enteredBirthDay, setEnteredBirthDay] = useState(birthday.day);
  const [enteredBirthMonth, setEnteredBirthMonth] = useState(birthday.month);
  const [sendRequestState, setSendRequestState] = useState(false);

  const { sendRequest: sendPatchRequest } = useHttp();

  const formSubmissionHandler = e => {
    e.preventDefault();

    getInfoState({
      enteredPhoneNo: +enteredPhoneNo,
      enteredPhoneType,
      enteredAddress,
      enteredBirthDay,
      enteredBirthMonth,
    });
    setSendRequestState(true);
  };

  useEffect(() => {
    const sendPatchUrl = new URL(`api/users/${id}`, basePath);
    let bodyData = {
      phone: { no: +enteredPhoneNo, type: enteredPhoneType },
      address: enteredAddress,
      birthday: { month: enteredBirthMonth, day: enteredBirthDay },
    };

    sendRequestState &&
      sendPatchRequest(
        {
          url: sendPatchUrl,
          method: 'PATCH',
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
          body: bodyData,
        },
        onConfirmEditInfo
      );
    return () => {
      setSendRequestState(false);
    };
  }, [
    id,
    enteredPhoneNo,
    enteredPhoneType,
    enteredAddress,
    enteredBirthMonth,
    enteredBirthDay,
    onConfirmEditInfo,
    sendPatchRequest,
    sendRequestState,
  ]);

  return (
    // Modal Edit Contact Info
    <div className={styles['wrapper-contact__modal']}>
      <div className={styles['wrapper-contact__modal-header']}>
        <h2>Edit contact info</h2>
        <button className={styles['wrapper-contact__modal-close-btn']} onClick={onConfirmEditInfo}>
          &times;
        </button>
      </div>
      <form
        className={styles['wrapper-contact__modal-form']}
        id="edit-form"
        name="edit-form"
        onSubmit={formSubmissionHandler}
      >
        <div className={styles['wrapper-contact__modal-url']}>
          <label htmlFor="profileURL">Profile URL</label>
          <a id="profile-edit" href={profileLink} name="profileURL">
            {profileLink}
          </a>
        </div>
        <div className={styles['wrapper-contact__modal-phone']}>
          <label htmlFor="phone">Phone</label>
          <div className={styles['wrapper-contact__modal-phone-values']}>
            <input
              type="text"
              id="phone-edit"
              list="phones"
              name="phone"
              defaultValue="0747424070"
              onChange={e => setEnteredPhoneNo(e.target.value)}
            ></input>
            &emsp;
            <select defaultValue={enteredPhoneType} onChange={e => setEnteredPhoneType(e.target.value)}>
              {phoneTypeOptions.map((option, key) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles['wrapper-contact__modal-address']}>
          <label htmlFor="address">Address</label>
          <textarea id="address-edit" name="address" onChange={e => setEnteredAddress(e.target.value)}></textarea>
        </div>
        <div className={styles['wrapper-contact__modal-email']}>
          <label htmlFor="email">Email address</label>
          <a id="email-edit" name="email" href={`mailto:${email}`}>
            {email}
          </a>
        </div>

        <div className={styles['wrapper-contact__modal-birthday']}>
          <label htmlFor="month">Birthday</label>
          <div className={styles['wrapper-contact__modal-dates']}>
            <select defaultValue={enteredBirthMonth} onChange={e => setEnteredBirthMonth(e.target.value)}>
              {birthMonthOptions.map((option, key) => (
                <option className={styles['month-edit']} key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            &emsp;
            <select defaultValue={enteredBirthDay} onChange={e => setEnteredBirthDay(e.target.value)}>
              {birthDayOptions.map((option, key) => (
                <option className={styles['day-edit']} key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles['wrapper-contact__modal-save']}>
          <button id="save-btn" onClick={formSubmissionHandler}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

const EditContactInfoModal = props => {
  const close = e => {
    if (e.key === 'Escape') {
      return;
    }
  };

  window.addEventListener('keydown', close);

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackdropTransparent onConfirmEditInfo={props.onConfirmEditInfo} />,
        document.getElementById('backdrop-transparent-root')
      )}
      {ReactDOM.createPortal(
        <EditContactInfo
          getInfoState={props.getInfoState}
          data={props.data}
          onConfirmEditInfo={props.onConfirmEditInfo}
        />,
        document.getElementById('edit-contact-info-root')
      )}
    </Fragment>
  );
};

export default EditContactInfoModal;
