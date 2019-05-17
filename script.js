const myForm = document.getElementById('my-form')
const username = document.getElementById('user')
const password1 = document.getElementById('pass1')
const password2 = document.getElementById('pass2')
const messageLabel = document.getElementById('msg-label')


window.onload = function() {
    messageLabel.style.visibility = "hidden"
        // Handle new todo item form submissions.
    myForm.onsubmit = function() {

        // Get the contact information.
        const user = username.value;
        const pass1 = password1.value;
        const pass2 = password2.value;

        if (user.length < 4 || user.length > 8 ||
            pass1.length < 4 || pass1.length > 8 ||
            pass2.length < 4 || pass2.length > 8) {

            messageLabel.innerHTML = "The length of user name and password must be between 4 and 8"
            messageLabel.style.color = "red"
            messageLabel.style.visibility = "visible"

        } else {
            if (pass1 !== pass2) {
                messageLabel.innerHTML = "The passwords are different"
                messageLabel.style.color = "red"
                messageLabel.style.visibility = "visible"
            } else {
                messageLabel.innerHTML = "The input values are correct"
                messageLabel.style.color = "green"
                messageLabel.style.visibility = "visible"
            }
        }

        return false
    }
}