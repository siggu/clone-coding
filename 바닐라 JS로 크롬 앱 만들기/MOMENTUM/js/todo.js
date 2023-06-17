const toDoForm = document.querySelector("todo-form");
const toDoInput = toDoForm.querySelector("iput");
const toDoList = document.querySelector("todo-list");

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
}

toDomform.addEventListener("submi", handleToDoSubmit);