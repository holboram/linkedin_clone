import { submitPost } from './submitPost.js';

const modal = document.querySelector('.wrapper__modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.wrapper__modal-close-btn');
const btnOpenModal = document.querySelector('.wrapper-center__post-btn');
const postBtn = document.getElementById('post-btn');
const postContent = document.getElementById('post-content');

const openModal = () => {
  modal.classList.remove('wrapper__modal--hidden');
  overlay.classList.remove('overlay--hidden');
};

export const closeModal = () => {
  modal.classList.add('wrapper__modal--hidden');
  overlay.classList.add('overlay--hidden');
};

// Activate post button
postContent.addEventListener('input', e => {
  if (e.target.value.length - 9 > 0) postBtn.disabled = false;
});

export const startPost = () => {
  btnOpenModal.addEventListener('click', openModal);

  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.classList.contains('wrapper__modal--hidden')) {
      closeModal();
    }
  });

  // Submit post
  postBtn.addEventListener('click', submitPost);
};
