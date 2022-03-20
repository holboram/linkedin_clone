import { displayFeeds } from './displayFeeds.js';
import { closeModal } from './startPost.js';

const postContent = document.getElementById('post-content');

export const submitPost = () => {
  let data = JSON.stringify({
    userId: +localStorage.getItem('userId'),
    date: Date.now(),
    content: postContent.value,
  });

  fetch('http://127.0.0.1:5000/api/posts', {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: data,
  })
    .then(response => response.json())
    .then(json => {
      displayFeeds();
    })
    .catch(err => console.log(err));

  closeModal();
};
