const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event){
    event.preventDefault();  // preventDefault(): 어떤 event의 기본 행동이든지 발생되지 않도록 막음
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);

/*
loginForm을 "submit" 하게 되면 "기본적으로" 페이지를 새로고침 하게 된다.
하지만, `preventDefault()` 함수를 추가해주면 브라우저의 기본 동작을 막을 수 있다.
*/