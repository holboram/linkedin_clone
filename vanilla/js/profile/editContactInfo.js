import { displayUserData } from '../common/displayUserData.js';

const modal = document.querySelector('.wrapper-contact__modal');
const overlay = document.querySelector('.overlay');
const phoneTypeData = document.querySelector('#phone-type');
const monthData = document.querySelector('#month');
const dayData = document.querySelector('#day');

const inputs = document.getElementById('edit-form').elements;
const inputPhone = inputs['phone'].value;
const inputPhoneType = inputs['phones'];
const inputAddress = inputs['address'];
const inputMonth = inputs['month'];
const inputDay = inputs['day'];

let phoneType, address, month, day;

const closeModal = () => {
  modal.classList.add('wrapper-contact__modal--hidden');
  overlay.classList.add('overlay--hidden');
};

inputPhoneType.addEventListener('change', e => (phoneType = e.target.value));
inputAddress.addEventListener('change', e => (address = e.target.value));
inputMonth.addEventListener('change', e => (month = e.target.value));
inputDay.addEventListener('change', e => (day = e.target.value));

export const editContactInfo = () => {
  let data = JSON.stringify({
    phone: { no: inputPhone, type: `${phoneType || phoneTypeData.getAttribute('data-phone-type')}` },
    address: address,
    birthday: {
      month: `${month || monthData.getAttribute('data-month')}`,
      day: `${day || dayData.getAttribute('data-day')}`,
    },
  });

  fetch(`http://127.0.0.1:5000/api/users/${+localStorage.getItem('userId')}`, {
    method: 'PATCH',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: data,
  })
    .then(response => response.json())
    .then(json => {
      displayUserData();
    })
    .catch(err => console.log(err));

  closeModal();
};
