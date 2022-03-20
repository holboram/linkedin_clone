const nav = document.getElementById('nav');

const header = `<header class="header">
      <div class="header__logo-wrapper">
        <img class="header__logo" width="34" height="34" alt="linkedin logo" />
        <div class="header__search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" focusable="false">
            <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
          </svg>
          <input class='header__search__input' type="text" placeholder="Search" name="search" />
        </div>
      </div>
      <nav class="header__nav">
        <div class='header__links header__links--display'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" focusable="false">
            <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
          </svg><span class='header__links-text'>Search</span>
        </div>
        <a href="index.html" class="header__links"><i class="fas fa-home"></i><span class='header__links-text'>Home</span></a>
        <a href="my-network.html" class="header__links"><i class="fas fa-users"></i><span class='header__links-text'>My Network</span></a>
        <a href="jobs.html" class="header__links"><i class="fas fa-briefcase"></i><span class='header__links-text'>Jobs</span></a>
        <a href="messaging.html" class="header__links"><i class="fas fa-comment-dots"></i><span class='header__links-text'>Messaging</span></a>
        <a href="notifications.html" class="header__links"><i class="fas fa-bell"></i><span class='header__links-text'>Notifications</span></a>
        <a href="profile.html" class="header__links"><img class="header__avatar-image" width="24" /><span class='header__links-text'>Me</span></a>
        <a href="pages/work.html" class="header__links"><i class="fas fa-th"></i><span class='header__links-text'>Work</span></a>
      </nav>
    </header>`;

nav.insertAdjacentHTML('beforeend', header);

document.querySelector('.header__logo').src =
  '../assets/768px-LinkedIn_logo_initials.png';

document.querySelector('.header__avatar-image').src =
  '../assets/FB_IMG_1588881980469.jpg';
