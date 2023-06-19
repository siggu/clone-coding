const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDo = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDo));
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
    toDo.push(newTodo);
    paintToDo(newTodo);
    saveToDos(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);