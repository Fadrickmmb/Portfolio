const publicKey = "wlC3wzB-HWCmX4-Ia";
const serviceID = "service_0p1b6do";
const templateID = "template_nlpmrxd";



    function sendMail(){
        var senderName = document.getElementById("nameInput").value;
        var senderEmail = document.getElementById("emailInput").value;
        var senderMessage = document.getElementById("messageInput").value;

        var params = {
            name_id: senderName,
            email_id: senderEmail,
            message_id: senderMessage
        }
    
        emailjs.send("service_0p1b6do", "template_nlpmrxd", params).then(function (res){
            alert("Message Sent! Thank you for contacting me. I will get back to you as soon as possible!");
        })
    }
