const ad = document.getElementById('ad');

const adContent = `
<div class="wrapper-left__ad-dots-container">
    <span>Ad</span>
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>overflow-web-small</title>
      <g>
        <g>
          <path d="M3,9.5A1.5,1.5,0,1,1,4.5,8,1.5,1.5,0,0,1,3,9.5ZM11.5,8A1.5,1.5,0,1,0,13,6.5,1.5,1.5,0,0,0,11.5,8Zm-5,0A1.5,1.5,0,1,0,8,6.5,1.5,1.5,0,0,0,6.5,8Z"></path>
        </g>
      </g>
    </svg>
  </div>
  <header>
    <span>Marius</span>, invest in your future with this exclusive offer
  </header>
  <main>
    <img src="../assets/FB_IMG_1588881980469.jpg" width="70" alt="Marius" />
    <img src="../assets/1631010989710.jpeg" width="70" alt="Linked In logo" />
  </main>
  <h2>Enjoy 50% off 2 months of LinkedeIn Premium!</h2>
  <button class="btn btn--resize">Get 50% off today</button>`;

ad.insertAdjacentHTML('afterbegin', adContent);
