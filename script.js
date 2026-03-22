const sidebar = document.querySelector('.sidebar');
const menuToggle = document.getElementById('menuToggle');


function toggleSidebar() {
    const nav = document.querySelector(".nav");

    sidebar.classList.toggle('show-sidebar');
    menuToggle.classList.toggle('open');
    nav.classList.toggle('open');
}


window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});