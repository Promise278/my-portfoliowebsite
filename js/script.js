let menuButton = document.getElementById("menu-open");

menuButton.onclick = () => {
    menuButton.name = menuButton.name === "menu" ? "close" : "menu";
};