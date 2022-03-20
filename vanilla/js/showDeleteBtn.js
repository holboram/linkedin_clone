import { deletePost } from './deletePost.js';

export const showDeleteBtn = e => {
  const btn = e.target.closest('div').querySelector('div');
  if (!btn.classList.contains('wrapper-center__option-delete--hidden')) {
    btn.classList.add('wrapper-center__option-delete--hidden');
  } else {
    btn.classList.remove('wrapper-center__option-delete--hidden');
  }

  const postId = e.target.closest('li').getAttribute('data-post-id');

  btn.addEventListener('click', () => deletePost(postId));
};
