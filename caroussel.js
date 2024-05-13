let slideIndex = 0;
let transitioning = false; // Variable pour suivre l'état de la transition

function plusSlides(n) {
    if (!transitioning) { // Vérifie si une transition est en cours
        showSlides(slideIndex += n);
    }
}

function showSlides() {
    let i;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }    
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    const offset = -slideIndex * 100;
    document.querySelector(".slides").style.transition = "transform 0.3s"; // Réinitialiser la transition
    document.querySelector(".slides").style.transform = `translateX(${offset}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[slideIndex].classList.add("active");

    transitioning = true; // Marquer le début de la transition

    // Délai avant de permettre une nouvelle transition
    setTimeout(() => {
        transitioning = false; // Marquer la fin de la transition
    }, 300); // Le même délai que la durée de la transition en millisecondes
}