// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika menu diklik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar navbar untuk menyembunyikan menu
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!navbarNav.contains(e.target) && !menu.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Slider
const images = document.querySelectorAll(".slider img");
const prevButton = document.querySelector(".slider .prev");
const nextButton = document.querySelector(".slider .next");

let currentIndex = 0;

// Fungsi untuk memperbarui slider
function updateSlider(index) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}

// Navigasi ke gambar sebelumnya
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider(currentIndex);
});

// Navigasi ke gambar berikutnya
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider(currentIndex);
});
