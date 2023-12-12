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

function changeLookGif(){
    portDiv.style.backgroundImage = "url(/src/Logo.gif)";
}

function changePortColor(color){
    portDiv.style.backgroundColor = color;
    portDiv.style.backgroundImage = "";
}





const publicKey = "wlC3wzB-HWCmX4-Ia";
const serviceID = "service_0p1b6do";
const templateID = "template_nlpmrxd";

console.log("test01");


    function sendMail(){
        console.log("test02");
        var senderName = document.getElementById("nameInput").value;
        var senderEmail = document.getElementById("emailInput").value;
        var senderMessage = document.getElementById("messageInput").value;
        console.log(senderMessage);

        var params = {
            name_id: senderName,
            email_id: senderEmail,
            message_id: senderMessage
        }
        console.log("test03");
    
        emailjs.send("service_0p1b6do", "template_nlpmrxd", params).then(function (res){
            alert("Message Sent! Thank you for contacting me. I will get back to you as soon as possible!");
        })
    }
