const storedUserData = localStorage.getItem('userData');

    const userData = JSON.parse(storedUserData);

    document.querySelector("#name").innerHTML += userData.name; 
    document.querySelector("#email").innerHTML += userData.email; 
    document.querySelector("#password").innerHTML += userData.password;

    document.querySelector("button").addEventListener('click', () => {
        console.log(userData.URL)
        window.location.href=`${userData.URL}index.html`
        localStorage.clear();
    });