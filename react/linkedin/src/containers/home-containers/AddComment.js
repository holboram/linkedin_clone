import React, { useState, useEffect, useRef } from 'react';
import userImg from '../../assets/FB_IMG_1588881980469.jpg';
import TextareaAutosize from 'react-textarea-autosize';
import Comments from './Comments';

import useHttp from '../../hooks/use-http.js';
import { basePath } from '../common/getData.js';

import styles from './AddComment.module.scss';

const AddComment = props => {
  const { data, setShowAddComment, userData, sendGetRequestState, setSendGetRequestState } = props;
  const { id: userId } = userData;
  const { id } = data;
  const [togglePostBtn, setTogglePostBtn] = useState(false);
  const [sendRequestState, setSendRequestState] = useState(false);
  const [commentsState, setGetCommentsState] = useState([]);

  const textaRef = useRef();

  const { sendRequest: sendPatchRequest } = useHttp();
  const { sendRequest: sendGetRequest } = useHttp();

  useEffect(() => {
    const sendPatchUrl = new URL(`api/comments`, basePath);

    let bodyData = { postId: id, userId: userId, commentContent: textaRef.current.value };

    sendRequestState &&
      sendPatchRequest(
        {
          url: sendPatchUrl,
          method: 'POST',
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
          body: bodyData,
        }
        // commentsData => setDisplayComment(commentsData.data)
      );
    return () => {
      setTogglePostBtn(false);
    };
  }, [sendPatchRequest, sendRequestState, id, userId, setShowAddComment]);

  useEffect(() => {
    const sendGetUrl = new URL(`api/comments/${id}`, basePath);

    // sendGetRequestState &&
    sendGetRequest(
      {
        url: sendGetUrl,
      },
      commentsData => setGetCommentsState(commentsData)
    );
    return () => {
      setSendGetRequestState(false);
    };
  }, [sendGetRequest, setGetCommentsState, id, sendGetRequestState, setSendGetRequestState]);

  const togglePostBtnHandler = e => {
    if (e.target.value.length > 0) {
      setTogglePostBtn(true);
    } else {
      setTogglePostBtn(false);
    }
  };

  const sendRequestHandler = e => {
    e.preventDefault();
    setSendRequestState(true);
  };
  console.log(commentsState);

  return (
    <div className={styles['wrapper-center__add-comments-wrapper']}>
      <div className={styles['wrapper-center__add-comment']}>
        <img className={styles['wrapper-center__img-add-comment']} src={userImg} alt="user" width="42" />
        <form className={styles['wrapper-center__add-comment-form']}>
          <TextareaAutosize
            ref={textaRef}
            className={styles['wrapper-center__text-area']}
            onChange={togglePostBtnHandler}
            placeholder="Add a comment..."
          />
          {togglePostBtn && (
            <button className={styles['wrapper-center__add-comment-post-btn']} onClick={sendRequestHandler}>
              Post
            </button>
          )}
        </form>
      </div>
      {commentsState.length === 0
        ? null
        : commentsState.map(comment => <Comments commentsData={comment} key={comment.id} />)}
    </div>
  );
};

export default AddComment;
