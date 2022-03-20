import React from 'react';

import styles from './DeletePostBtn.module.scss';

const DeletePostBtn = props => {
  const { setSendRequestStateHandler } = props;
  return (
    <div className={styles['wrapper-center__option-delete']}>
      <button onClick={setSendRequestStateHandler}>Delete post</button>
    </div>
  );
};

export default DeletePostBtn;
