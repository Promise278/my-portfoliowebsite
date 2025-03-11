let menuButton = document.getElementById("menu-open");

menuButton.onclick = () => {
    menuButton.name = menuButton.name === "menu" ? "close" : "menu";
};

const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})