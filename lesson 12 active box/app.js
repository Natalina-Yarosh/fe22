const menuButton = document.querySelector(".header__menu");
const navigation = document.querySelector(".header__list");
const header = document.querySelector(".header");

function styleHeader() {
    if (scrollY > 50) {
        header.classList.add("header__blue");
    } else {
        header.classList.remove("header__blue");
    }
}

menuButton.addEventListener("click", function() {
    menuButton.classList.toggle("header__menu-open");
    navigation.classList.toggle("header__list-open");
});

window.addEventListener("scroll", styleHeader);
window.addEventListener("load", styleHeader);

navigation.addEventListener("click", function(e) {
    e.preventDefault();
    const anchor = e.target.href.split("#")[1];
    const elementTop = document.getElementById(anchor).offsetTop;
    const headerHeight = 105;
    window.scrollTo({ top: elementTop - headerHeight, behavior: "smooth" });
});

baguetteBox.run(".works");