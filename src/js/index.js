const loginForm = document.getElementById('loginForm')
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const regExpUsername = /[a-z\d]{2,15}/mi
const regExpPass = /[a-z\d](?=.*[#$]){6,15}/mi
let validUserName, validPassword

loginForm.addEventListener('submit', function (event) {
    event.preventDefault()
    if (validUserName && validPassword) {
        console.log("validUserName ",username.value)
        console.log("validPassword ",password.value)
        loginForm.reset()
        username.classList.remove('valid')
        password.classList.remove('valid')
    }
});

username.addEventListener('input', function () {
    validUserName = validate(username, username.value, regExpUsername)
})

password.addEventListener('input', function () {
    validPassword = validate(password, password.value, regExpPass)
})

function validate(el, value, exp) {
    let check = exp.test(value)
    if (check) {
        el.classList.add('valid')
        el.classList.remove('invalid')
    } else {
        el.classList.remove('valid')
        el.classList.add('invalid')
    }
    return check
}

