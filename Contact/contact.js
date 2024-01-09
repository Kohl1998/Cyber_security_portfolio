
const form = document.querySelector('.contact-form')


function sendMSG(e) {
    
    const email = document.querySelector('.email')
    const message = document.querySelector('.message')
    
    e.preventDefault()
    Email.send({
        SecureToken : "2c3720b6-be58-45da-bc73-6375efa3c1e9",
        To : 'kohlwebdev@gmail.com',
        From : email.value,
        Subject : "Contact Form",
        Body : message.value
    }).then(
        message => alert(message)
        ); 
    }
    
form.addEventListener('submit', sendMSG)