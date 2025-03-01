const nav = document.querySelector(".nav-bar");

function updateNavBar() {
  if (window.scrollY > 50) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

window.addEventListener("scroll", updateNavBar);

// Run on page load to check the initial scroll position
window.addEventListener("DOMContentLoaded", updateNavBar);
window.addEventListener("load", updateNavBar); // Ensures it runs after full load

const about = document.querySelector('.mobile-nav [href="#about"]');
// const colorChange = document.querySelector('.mobile-nav [href="#about"]');
about &&
  about.addEventListener("click", () => {
    console.warn("ll");
    onCloseMenu();
  });
