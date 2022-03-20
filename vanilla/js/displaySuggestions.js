import { getJSON, basePath } from './common/getData.js';

const usersList = document.querySelector('.wrapper-right__users-list');
const usersUrl = new URL('api/users', basePath);

export const displaySuggestions = () => {
  getJSON(usersUrl).then(users => {
    users.forEach(user => {
      const imageUrl = new URL(user.image, basePath);
      usersList.innerHTML += `<li class='wrapper-right__user-suggestion'>
              <a href="#"><img src="${imageUrl}" width="48" class="wrapper-right__image-profile" /></a>
              <div class="wrapper-right__users-feed">
                <a href="#">
                  <span class="wrapper-right__name">${user.name}</span>
                  <p class="wrapper-right__intro">
                    ${user.profession}
                  </p>
                </a>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                    <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                  </svg>
                  Follow
                </button>
              </div>
            </li>`;
    });
  });
};
