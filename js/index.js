// Menu Mobile Bar
function menuBar() {
    const menubar = document.querySelector(".sideBar")
    menubar.style.display = 'flex'
}

// Close Menu Bar
function closeBar() {
    const menubar = document.querySelector(".sideBar")
    menubar.style.display = 'none'
}

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
}

// Initialize the first slide
showSlide(slideIndex);

// Optionally, automatically change slides every 5 seconds
setInterval(() => changeSlide(1), 5000);