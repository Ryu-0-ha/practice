const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");

let toDos=[]
const TODOS_KEY="toDos"

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
    const newToDoObj={
        text:newToDo,
        id:Date.now(),
    }
    toDos.push(newToDoObj);
    saveToDo(toDos);
    paintToDo(newToDoObj);
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id=newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}   

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo)=> toDo.id !== parseInt(li.id));
    saveToDo();
}

function saveToDo(toDos){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}



const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);//이해 x
}
/*  parsedToDos.forEach((item)=> console.log(item));
    ===
    function sayHello(item){
    console.log(item);
}*/
toDoForm.addEventListener("submit",handleToDoSubmit) 