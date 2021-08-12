//const loginForm = document.querySelector("#login-form");
//loginForm.querySelector("input");
//loginForm.querySelector("button");
const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");
const loginInput= document.querySelector("#login-form input");
const link = document.querySelector("a");
const greetion = document.querySelector("#greeting")
const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";
function onLoginSubmit(event){
    event.preventDefault();
    const username =loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,username);
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.innerText= `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event){
    event.preventDefault()
}

link.addEventListener("click",handleLinkClick);
const savedUsername=localStorage.getItem(USERNAME_KEY);
if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreeting(savedUsername);
}