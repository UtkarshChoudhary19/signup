const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signupButton = document.getElementById('signup');
const message  = document.querySelector(".message");
const currentUrl = window.location.href;
const arrURL = currentUrl.split("index.html");

signupButton.addEventListener('click', (event) => {
    event.preventDefault();
    if(nameInput.value=='' || emailInput.value=='' || passwordInput.value==''){
        message.innerHTML = "<p class='error'>Error : All Fields are mandatory<p>"
    }
    else{
        message.innerHTML = "<p class='success'>Successfully Signed Up!<p>"
        const name = nameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;

    const userData = {
        URL: arrURL[0],
        name: name,
        email: email,
        password: password
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    setTimeout(function() {
        window.location.href=`${arrURL[0]}profile.html`
    }, 1000);
}
});