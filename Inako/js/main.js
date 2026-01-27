document.addEventListener("DOMContentLoaded", function () {
    console.log("Inako Business Consultants website loaded successfully");
});

document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slides");
    let index = 0;

    function showNextSlide() {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }

    setInterval(showNextSlide, 5000); // change slide every 5 seconds
});

document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });
});
