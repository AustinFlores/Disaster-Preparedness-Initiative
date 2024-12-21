  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show"); // Toggle the "show" class
  });

// Show/hide the button based on scroll position
window.onscroll = function () {
  const backToTopButton = document.getElementById("backToTop");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Scroll smoothly to the top when the button is clicked
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}


// Select all containers that hold the videos
const videoContainers = document.querySelectorAll('.disaster-tile');

videoContainers.forEach((container) => {
  const video = container.querySelector('.hover-video'); // Get the video inside the container

  // Play video when the mouse enters the container
  container.addEventListener('mouseenter', () => {
    video.play();
  });

  // Pause video when the mouse leaves the container
  container.addEventListener('mouseleave', () => {
    video.pause();
  });
});
