const toggleHome = document.getElementById("main_menu_home");
const togglePortfolio = document.getElementById("main_menu_portfolio");
const toggleAbout = document.getElementById("main_menu_aboutme");
const toggleContact = document.getElementById("main_menu_contact");
const homeDiv = document.getElementById("home_div");
const portDiv = document.getElementById("portfolio_div");
const aboutDiv = document.getElementById("about_me_div");
const contactDiv = document.getElementById("contact_me_div");
const quoteDiv = document.getElementById("main_subcontent_02");
const formButton = document.getElementById("formButton");
const hiddenInput = document.getElementById("hiddenInput");

const hide = el => el.style.setProperty("display", "none");
const show = el => el.style.setProperty("display", "block");

hide(aboutDiv);
hide(portDiv);
hide(contactDiv);   

toggleHome.addEventListener("click", () => {
    hide(portDiv);
    hide(aboutDiv);
    hide(contactDiv);
    show(homeDiv);
});

togglePortfolio.addEventListener("click", () => {
    hide(aboutDiv);
    hide(homeDiv);
    hide(contactDiv);
    show(portDiv);
});

toggleAbout.addEventListener("click", () => {
    show(aboutDiv);
    hide(homeDiv);
    hide(portDiv);
    hide(contactDiv);
});

toggleContact.addEventListener("click", () => {
    hide(aboutDiv);
    hide(homeDiv);
    hide(portDiv);
    show(contactDiv);
    hide(hiddenInput);
});

function changeLookColor(){
   //portDiv.style.backgroundImage = "url(/src/Logo.gif)";
   portDiv.style.backgroundColor = "#E73C7E"
}

function changePiggyColor(){
    portDiv.style.backgroundColor = "#FF80AF"
}

function changeGithubColor(){
    portDiv.style.backgroundColor = '#333'
}

function changePortColor(color){
    portDiv.style.backgroundColor = color;
    portDiv.style.backgroundImage = "";
}




