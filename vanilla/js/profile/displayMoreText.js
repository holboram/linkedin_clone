// Display full paragraph
const seeMoreBtn = document.querySelector('.wrapper-left__see-more-btn');
const textAbout = document.querySelector('.wrapper-left__text-about');
const dots = document.querySelector('.wrapper-left__dots');
const moreText = document.querySelector('.wrapper-left__more');

const displayText = () => {
  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    seeMoreBtn.innerHTML = 'see more';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    seeMoreBtn.innerHTML = 'see less';
    moreText.style.display = 'inline';
  }
};

export const displayMoreText = () => {
  textAbout.textContent.length > 300 && seeMoreBtn.addEventListener('click', displayText);
};
