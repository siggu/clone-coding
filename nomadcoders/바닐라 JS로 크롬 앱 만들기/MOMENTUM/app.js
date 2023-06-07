const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";


function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    greeting.innerText = `Hello ${username}`;
    // greeting.innerText = "Hello " + username; 이거랑 같은 역할을 해준다.
    greeting.classList.remove(HIDDEN_CLASSNAME);
}



loginForm.addEventListener("submit", onLoginSubmit);