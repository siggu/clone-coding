const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    /*  
        localStorage에는 배열이 저장되지 않고 텍스트만 저장되기 때문에 
        JSON.stringify를 이용해 객체, 배열을 문자열로 바꿔준다.
    */
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
/*
function sayHello(item) {   // 실행되고 있는 item에 대한 정보도 알 수 있음
    console.log("this is the turn of as", item);
}
함수를 사용하지 않고도 쓸 수 있는 방법이 있음
*/
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;
    parseToDos.forEach(paintToDo);
    /*
    parsedToDos.forEach();  //  parsedToDos에는 array에 있는 각각의 item에 대해 
    function을 한 개만 실행해줄 수 있는 forEach()가 있다.

    arrow function을 이용해 함수를 사용하지 않고도 같은 역할을 할 수 있다.
    */
    
}