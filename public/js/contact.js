$(document).ready(function () {
    var user, to, subject, text;
    $("#send_email").click(function () {
        // enter your email account that you want to recieve emails at.
        to = "mosesthonze@gmail.com";
        name = $("#name").val();
        user = $("#phone number").val();
        text = $("#message").val();
        // $("#message").text("Sending E-mail...Please wait");
        $.get("http://localhost:8080/send", {
            to: to,
            name: name,
            user: user,
            text: text
        }, function (data) {
            if (data == "sent") {
                console.log("Email sent");
            }
        });
    });
});
