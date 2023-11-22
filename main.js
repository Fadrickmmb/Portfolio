const toggleHome = document.getElementById("main_menu_home");
const togglePortfolio = document.getElementById("main_menu_portfolio");
const toggleAbout = document.getElementById("main_menu_aboutme");
const homeDiv = document.getElementById("home_div");
const portDiv = document.getElementById("portfolio_div");
const aboutDiv = document.getElementById("about_me_div");

const hide = el => el.style.setProperty("display", "none");
const show = el => el.style.setProperty("display", "block");

hide(aboutDiv);
hide(portDiv);

toggleHome.addEventListener("click", () => {
    hide(portDiv);
    hide(aboutDiv);
    show(homeDiv);
});

togglePortfolio.addEventListener("click", () => {
    hide(aboutDiv);
    hide(homeDiv);
    show(portDiv);
});

toggleAbout.addEventListener("click", () => {
    show(aboutDiv);
    hide(homeDiv);
    hide(portDiv);
});

