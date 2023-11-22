const testButton = document.getElementById("test_button");
const portDiv = document.getElementById("portfolio_div");
const aboutDiv = document.getElementById("about_me_div");

const hide = el => el.style.setProperty("display", "none");
const show = el => el.style.setProperty("display", "block");

hide(aboutDiv);

testButton.addEventListener("click", () => {
    hide(portDiv);
    show(aboutDiv);
})