import { displayFeeds } from './displayFeeds.js';

export const deletePost = postId => {
  fetch(`http://127.0.0.1:5000/api/posts/${+postId}`, {
    method: 'DELETE',
  })
    .then(json => {
      displayFeeds();
    })
    .catch(err => console.log(err));
};
