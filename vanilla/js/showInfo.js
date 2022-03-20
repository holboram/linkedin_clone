const infoContainer = document.querySelector('.wrapper-right__info-container');
const infoIcon = document.querySelector('.wrapper-right__info-icon');
const timesIcon = document.querySelector('.wrapper-right__times-icon');

const hideInfo = () => {
  infoContainer.classList.remove('wrapper-right__info-container--show');
};

const displayInfo = () => {
  if (
    !infoContainer.classList.contains('wrapper-right__info-container--show')
  ) {
    infoContainer.classList.add('wrapper-right__info-container--show');
    timesIcon.addEventListener('click', hideInfo);
  } else {
    hideInfo();
  }
};

export const showInfo = () => {
  infoIcon.addEventListener('click', displayInfo);
};
