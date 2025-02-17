document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.querySelector(".theme-toggle");
  const bodyElement = document.body;

  // Check if dark mode is already set in localStorage
  if (localStorage.getItem("theme") === "dark") {
    bodyElement.classList.add("dark-mode");
    themeToggleButton.textContent = "☀️";
  }

  // Toggle theme on button click
  themeToggleButton.addEventListener("click", () => {
    bodyElement.classList.toggle("dark-mode");

    // Update the button icon
    if (bodyElement.classList.contains("dark-mode")) {
      themeToggleButton.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      themeToggleButton.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });
});

// -----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const nameElement = document.getElementById("dynamic-name");

  // Set initial custom styles dynamically
  nameElement.style.fontFamily = "'Times New Roman', Times, serif";
  nameElement.style.color = "#3b5998"; // Default color for the name
});

// -----------------------------------------------------------------------------
// Toggle Navbar Menu in Mobile View
const menuToggle = document.querySelector('.menu-toggle');
const navbarLinks = document.querySelector('.navbar-links');

menuToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

// -------------------------------------------------------------------------
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

function updateCarousel() {
  const carouselInner = document.querySelector('.carousel-inner');
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentIndex);
  });
}

function goPrev() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
}

function goNext() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

updateCarousel();
