const hamburger = document.querySelector("#hamburger");

document.addEventListener("DOMContentLoaded", function () {
  const sliderOne = document.querySelector("#slide-1");
  const sliderTwo = document.querySelector("#slide-2");
  const nextEls = document.querySelectorAll(".next1");
  const prevEls = document.querySelectorAll(".prev1");
  nextEls.forEach((nextEl) => {
    nextEl.addEventListener("click", () => {
      sliderOne.classList.remove("active");
      sliderTwo.classList.add("active");
      nextEl.style.visibility = "hidden";
      nextEl.style.opacity = 0;
      prevEls.forEach((prevEl) => {
        prevEl.style.visibility = "visible";
        prevEl.style.opacity = 1;
      });
    });
  });
  prevEls.forEach((prevEl) => {
    prevEl.addEventListener("click", () => {
      sliderTwo.classList.remove("active");
      sliderOne.classList.add("active");
      prevEl.style.visibility = "hidden";
      prevEl.style.opacity = 0;
      nextEls.forEach((nextEl) => {
        nextEl.style.visibility = "visible";
        nextEl.style.opacity = 1;
      });
    });
  });
});
