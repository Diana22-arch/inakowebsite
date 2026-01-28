document.addEventListener("DOMContentLoaded", function () {

    console.log("Inako Business Consultants website loaded successfully");

    /* =====================
       SLIDESHOW
    ===================== */
    let slides = document.querySelectorAll(".slides");
    let index = 0;

    if (slides.length > 0) {
        setInterval(() => {
            slides[index].classList.remove("active");
            index = (index + 1) % slides.length;
            slides[index].classList.add("active");
        }, 5000);
    }

    /* =====================
       MOBILE NAV MENU
    ===================== */
    const navMenu = document.getElementById("navMenu");

    document.querySelectorAll("#navMenu a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("show");
        });
    });

});
