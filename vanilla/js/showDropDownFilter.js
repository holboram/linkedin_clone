// Dropdown filter feed
const btnOpenDropdownFilter = document.querySelector(
  '.wrapper-center__sort-btn'
);
const dropdownFilter = document.querySelector(
  '.wrapper-center__content-dropdown'
);

const hideContentDropdown = () => {
  dropdownFilter.classList.add('wrapper-center__content-dropdown--hidden');
};

const checkDropdownState = e => {
  if (
    e.key === 'Escape' &&
    !dropdownFilter.classList.contains(
      'wrapper-center__content-dropdown--hidden'
    )
  ) {
    hideContentDropdown();
  }
};

const showContentDropdown = () => {
  if (
    !dropdownFilter.classList.contains(
      'wrapper-center__content-dropdown--hidden'
    )
  ) {
    hideContentDropdown();
  } else {
    dropdownFilter.classList.remove('wrapper-center__content-dropdown--hidden');

    document.addEventListener('keydown', function (e) {
      checkDropdownState(e);
    });
  }
};

export const showDropDownFilter = () => {
  btnOpenDropdownFilter.addEventListener('click', showContentDropdown);
};
