const sidebar = document.querySelector('.sidebar');
const menuToggle = document.getElementById('menuToggle');

function toggleSidebar() {
    sidebar.classList.toggle('show-sidebar');
    menuToggle.classList.toggle('open');
}