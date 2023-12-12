//const contactForm = document.querySelector("#contact_form");
//const contactName = document.querySelector("#name");
//const contactEmail = document.querySelector("#email");
//const contactMessage = document.querySelector("#message");
//const contactSubmit = document.querySelector("#submitContact");

const publicKey = "wlC3wzB-HWCmX4-Ia";
const serviceID = "service_0p1b6do";
const templateID = "template_nlpmrxd";


//emailjs.init(publicKey);


    console.log("test01");


    function sendMail(){
        console.log("test02");
        var senderName = document.getElementById("nameInput").value;
        var senderEmail = document.getElementById("emailInput").value;
        var senderMessage = document.getElementById("messageInput").value;
        console.log(senderMessage);

        var params = {
            name_id: senderName + "1",
            email_id: senderEmail,
            message_id: senderMessage
        }
        console.log("test03");
    
        emailjs.send("service_0p1b6do", "template_nlpmrxd", params).then(function (res){
            alert("Success" + res.status);
        })
    }


//contactForm.addEventListener("submit", e => {
//    contactSubmit.innerHTML = "Sending Message";
//    console.log("Test02");

//    const inputFields = {
//        name: contactName.value,
//        email: contactEmail.value,
//        message: contactMessage.value
//    }

//    emailjs.send(serviceID, templateID, inputFields)
//    .then(() => {
        //contactSubmit.innerHTML = "Message Sent";

//        contactName.value = "";
//        contactEmail.value = "";
//        contactMessage.value = "";
//    }, (error) => {
//        console.log(error);
        //contactSubmit.innerHTML = "Something went wrong";
//    });
//});