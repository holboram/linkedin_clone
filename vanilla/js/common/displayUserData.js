import { getJSON, currentUser, basePath } from './getData.js';

const imageProfile = document.querySelector('.wrapper-center__image-profile');
const profileImg = document.querySelector('.wrapper-left__avatar-image');
const modalAvatar = document.querySelector('.wrapper__image-profile');
const profileProfession = document.querySelector('.wrapper-left__profession');
const profileName = document.querySelector('.wrapper-left__profile-name');
const modalUserName = document.querySelector('.wrapper__modal-user-name');

const profileLink = document.getElementById('profile');
const userPhoneNo = document.getElementById('phone-no');
const userPhoneType = document.getElementById('phone-type');
const userAddress = document.getElementById('address');
const userEmail = document.getElementById('email');
const userBirthMonth = document.getElementById('month');
const userBirthDay = document.getElementById('day');

const profileLinkEdit = document.getElementById('profile-edit');
const userPhoneTypes = document.querySelectorAll('#phone-types');
const userAddressEdit = document.getElementById('address-edit');
const userEmailEdit = document.getElementById('email-edit');
const userBirthMonths = document.querySelectorAll('.month-edit');
const userBirthDays = document.querySelectorAll('.day-edit');

const userUrl = new URL(`api/users/${currentUser}?withPosts=true`, basePath);

export const displayUserData = () => {
  getJSON(userUrl).then(user => {
    const imageUrl = new URL(user.image, basePath);
    profileImg.src = imageUrl;
    imageProfile && (imageProfile.src = imageUrl);
    modalAvatar && (modalAvatar.src = imageUrl);
    profileName && (profileName.textContent = user.name);
    modalUserName && (modalUserName.textContent = user.name);
    profileProfession.textContent = user.profession;

    profileLink && (profileLink.textContent = user.profileLink);
    profileLink && (profileLink.href = user.profileLink);

    userPhoneNo && (userPhoneNo.textContent = user.phone.no);
    userPhoneType && (userPhoneType.textContent = user.phone.type);

    userAddress && (userAddress.textContent = user.address);

    userEmail && (userEmail.href = user.email);
    userEmail && (userEmail.textContent = user.email);

    userBirthMonth && (userBirthMonth.textContent = user.birthday.month);
    userBirthDay && (userBirthDay.textContent = user.birthday.day);

    profileLinkEdit && (profileLinkEdit.href = user.profileLink);
    profileLinkEdit && (profileLinkEdit.textContent = user.profileLink);

    userPhoneTypes &&
      userPhoneTypes.forEach(type => {
        if (type.value === user.phone.type) type.selected = true;
      });

    userAddressEdit && (userAddressEdit.value = user.address);

    userEmailEdit && (userEmailEdit.href = user.email);
    userEmailEdit && (userEmailEdit.textContent = user.email);

    userBirthMonths &&
      userBirthMonths.forEach(month => {
        if (month.value === user.birthday.month) {
          month.selected = true;
        }
      });

    userBirthDays &&
      userBirthDays.forEach(day => {
        if (day.value === user.birthday.day) {
          day.selected = true;
        }
      });

    localStorage.setItem('userId', user.id);
  });
};
