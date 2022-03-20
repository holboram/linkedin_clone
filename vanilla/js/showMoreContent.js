// Show more info button
const showBtn = document.querySelector('.main-wrapper__show-btn');
const connectionsContent = document.querySelector(
  '.wrapper-left__connections-container'
);
const premiumContent = document.querySelector('.wrapper-left__premium');
const myItems = document.querySelector('.wrapper-left__my-items');
const userDetails = document.querySelector('.wrapper-left__user-details');

const toggleContent = () => {
  if (
    connectionsContent.classList.contains(
      'wrapper-left__connections-container--hide-content'
    ) &&
    myItems.classList.contains('wrapper-left__my-items--hide-content') &&
    userDetails.classList.contains('wrapper-left__user-details--hide-content')
  ) {
    connectionsContent.classList.remove(
      'wrapper-left__connections-container--hide-content'
    );
    premiumContent.classList.remove('wrapper-left__premium--hide-content');
    userDetails.classList.remove('wrapper-left__user-details--hide-content');
    showBtn.textContent = 'Show less';

    myItems.classList.remove('wrapper-left__my-items--hide-content');
  } else {
    connectionsContent.classList.add(
      'wrapper-left__connections-container--hide-content'
    );
    premiumContent.classList.add('wrapper-left__premium--hide-content');
    showBtn.textContent = 'Show more';

    myItems.classList.add('wrapper-left__my-items--hide-content');
    userDetails.classList.add('wrapper-left__user-details--hide-content');
  }
};

export const showMoreContent = () => {
  showBtn.addEventListener('click', toggleContent);
};
