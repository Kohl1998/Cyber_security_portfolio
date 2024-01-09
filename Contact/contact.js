
const form = document.querySelector('.contact-form')

function sendMSG(e) {
    e.preventDefault();
    email = document.querySelector('.email')
    message = document.querySelector('.message')

    Email.send({
        Host: "smtp.gmail.com",
        SecureToken: "658c7ef7-c558-42b3-8808-8a76e5109423",
        username: "kohlwebdev@gmail.com",
        password: "50FA902495944ABD5D7ED0FA81289496F4C2",
        To: 'kohlwebdev@gmail.com',
        From: email.value,
        Subject: "Contact Form",
        Body: message.value
    }).then(
        message => alert(message)
    );
}

