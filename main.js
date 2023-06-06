// JAVASCRIPT TIL SLIDE UD TIL NAVIGATIONSBAR | Kilde fra: https://www.youtube.com/watch?v=oYRda7UtuhA&t=3245s //

var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.left = "0";
}

function hideMenu(){
    navLinks.style.left = "-100%";
}

// JAVASCRIPT TIL SCROLL HORIZONT | Kilde fra: https://alvarotrigo.com/blog/scroll-horizontally-with-mouse-wheel-vanilla-java/ //

const scrollContainer = document.querySelector(".wrapper");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});