// Sale
let heroSale = document.getElementById("hero-sale");
let bodySale = document.getElementById("body-sale");

async function fetchSale() {
  try {
    const res = await fetch(
      "https://h-creations.net/back-end/public/api/sale/1"
    );
    const saleData = await res.json();
    const sale = saleData.sale.sale.toString();

    heroSale.innerHTML = `${sale}%`;
    bodySale.innerHTML = `${sale}%`;
  } catch (error) {
    console.log(error);
  }
}

fetchSale();

// Carusel images
let carusel = document.getElementById("carusel-swiper");
async function fetchImages() {
  try {
    const res = await fetch(
      "https://h-creations.net/back-end/public/api/images"
    );
    const images = await res.json();
    // console.log(images);

    carusel.innerHTML = images.map(
      ({ id, image, title, link }) =>
        `<div class="swiper-slide"><div class="slider-item"><div class="slider-item-img"><img src=${image} alt="slider-img" /><a href=${link} target="_blank"></a> </div><h3><a href=${link} target="_blank">${title}</a></h3></div></div>`
    );
  } catch (error) {
    console.log(error);
  }
}

fetchImages();

// Services
const firstUl = document.getElementById("first_ul");
const secondUl = document.getElementById("second_ul");

async function fetchServices() {
  try {
    const res = await fetch(
      "https://h-creations.net/back-end/public/api/services"
    );
    const services = await res.json();
    // console.log(services);

    firstUl.innerHTML = services
      .slice(0, 5)
      .map(
        ({ service }) =>
          `<li class="u_padd"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-119a5lz" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="VerifiedUserIcon"><path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></svg>${service}</li>`
      )
      .join("");

    secondUl.innerHTML = services
      .slice(5, 10)
      .map(
        ({ service }) =>
          `<li class="u_padd"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-119a5lz" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="VerifiedUserIcon"><path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></svg>${service}</li>`
      )
      .join("");
  } catch (error) {
    console.log(error);
  }
}

fetchServices();

// iFrame video
let videoBox = document.getElementById("hiden_vid");
async function fetchVideo() {
  try {
    const res = await fetch(
      "https://h-creations.net/back-end/public/api/video/1"
    );
    const videoData = await res.json();
    const videoCode = videoData.video.video;
    // console.log(videoData)

    videoBox.innerHTML = videoCode;
  } catch (error) {
    console.log(error);
  }
}

fetchVideo();

// Hide Show wahtsapp window
const whatsappBtnClick = () => {
  document.getElementById("Window").classList.toggle("hideShowWinow");
};

setTimeout(() => {
  document.getElementById("Window").classList.add("hideShowWinow");
}, 10000);
