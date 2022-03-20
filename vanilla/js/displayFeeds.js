import { getJSON, currentUser, basePath } from './common/getData.js';
import { showDeleteBtn } from './showDeleteBtn.js';

const feedPostsUrl = new URL(`api/users/${currentUser}/feed`, basePath);
const feedList = document.querySelector('.wrapper-center__feed-list');

export const displayFeeds = () => {
  feedList.innerHTML = '';
  getJSON(feedPostsUrl).then(feedPosts => {
    if (feedPosts.length === 0) {
      feedList.innerHTML = 'No Post';
    }
    feedPosts.forEach(post => {
      feedList.innerHTML += `
              <li class="wrapper-center__list-item" data-post-id='${post.id}'>
                <div class="wrapper-center__users-posts">
                  <a href=" #"><img src="${basePath}${post.user.image}" width="48" class="wrapper-right__image-profile" /></a>
                  <a href="#">
                    <span class="wrapper-right__name">${post.user.name}</span>
                    <p class="wrapper-right__intro wrapper-right__intro--margin">
                      ${post.user.profession}
                    </p>
                    <span class="wrapper-center__time-post">3h&nbsp;<b>&middot;</b>&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor"
                        class="mercado-match" width="16" height="16" focusable="false">
                        <path
                          d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z">
                        </path>
                      </svg>
                    </span>
                  </a>
                  <div class="wrapper-center__option">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="wrapper-center__btn-show-option" width="24" height="24" focusable="false">
                      <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
                    </svg>
                    <div class="wrapper-center__option-delete wrapper-center__option-delete--hidden">
                      <button>Delete post</button>
                    </div>
                  </div>

                </div>
                <p class="wrapper-center__content-feed">
                  ${post.content}
                </p>
              </li>`;

      // Get all the elements with the class wrapper-center__btn-show-option
      const showOptionBtn = document.querySelectorAll('.wrapper-center__btn-show-option');

      // Add click event for all the elements and execute the showDeleteBtn for each btn (independent)
      showOptionBtn.forEach(btn => btn.addEventListener('click', showDeleteBtn));
    });
  });
};
