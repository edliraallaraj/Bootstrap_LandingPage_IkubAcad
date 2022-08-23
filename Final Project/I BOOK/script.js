
const contactForm = () => {

    let userContact = document.forms["contactFrom"]["cForm"].value
    if (userContact = " ") {
        return false
    } else {
        alert('Thank you for contacting us! Your message is sent.')
    }
}

