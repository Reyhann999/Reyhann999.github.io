const menu = {
  "Martabak Coklat":20000,
  "Martabak Keju":22000,
  "Pancake":15000
};

const menuItem = Object.keys(menu);
const menuPrice = Object.values(menu);

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
};

setInterval(() => {
  plusSlides(1);
}, 4000);

const price = document.querySelectorAll(".price");
const item = document.querySelectorAll(".item");
for (let i = 0; i < item.length; i++) {
  item[i].textContent = menuItem[i];
  price[i].textContent = menuPrice[i];
}


const cart = document.querySelector(".cart");

function sumPrice(el) {
  const id = Number(el.dataset.id);
  cart.textContent = "halo, aku adalah " + menuItem[id];
}
