// Emails rec
email = function(rec,subject,body){
  nodemailer.send_mail({
    sender: "awesomegame@awesome.com",
    to: rec,
    subject: subject,
    body: body},
    function(error, success){
        console.log("Message "+ ( success? "sent" : "failed" ));
    });
}