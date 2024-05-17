document.addEventListener("DOMContentLoaded", function () {
  const sliderOne = document.querySelector("#slide-1");
  const sliderTwo = document.querySelector("#slide-2");
  const nextEls = document.querySelectorAll(".next5");
  const prevEls = document.querySelectorAll(".prev5");

  nextEls.forEach((nextEl) => {
    nextEl.addEventListener("click", () => {
      sliderOne.classList.remove("active5");
      sliderTwo.classList.add("active5");
      nextEls.forEach((nextEl) => {
        nextEl.style.visibility = "hidden";
        nextEl.style.opacity = 0;
      });
      prevEls.forEach((prevEl) => {
        prevEl.style.visibility = "visible";
        prevEl.style.opacity = 1;
      });
    });
  });

  prevEls.forEach((prevEl) => {
    prevEl.addEventListener("click", () => {
      sliderTwo.classList.remove("active5");
      sliderOne.classList.add("active5");
      prevEls.forEach((prevEl) => {
        prevEl.style.visibility = "hidden";
        prevEl.style.opacity = 0;
      });
      nextEls.forEach((nextEl) => {
        nextEl.style.visibility = "visible";
        nextEl.style.opacity = 1;
      });
    });
  });
});

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');

  const menuIcon = document.querySelector('.menu-icon');
  menuIcon.classList.toggle('active');
  
  menuIcon.classList.toggle('closed', !menu.classList.contains('active'));
 
}