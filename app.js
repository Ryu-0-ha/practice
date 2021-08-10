
/*function calculatekrAge(ageOfForeigner){
    return ageOfForeigner+2;
}

const krAge = calculatekrAge(20);

const calculate={
    plus: function (a,b){
        return a+b;
    },
    minus: function (a,b){
        return a-b;
    },
    divide: function (a,b){
        return a/b;
    },
    power: function (a,b){
        return a**b;
    },
}

const plusResult=calculate.plus(3,2);
const minusResult=calculate.minus(3,2);
const divideResult=calculate.divide(3,2);
const powerResult=calculate.power(3,2);

const age = parseInt(("How old are you"));

if(isNaN(age)|| age<0){//숫자가 아닌가=> 아니면 아닌게 맞으니까 true 
               //맞으면 아닌게 아니니까 false
    console.log("positive number plz")
} else if(age <= 18){
    console.log("Too young")
} else if(age > 18 && age <= 50){
    console.log("you can drink")
} 
else{
    console.log("you can't drink")
}


h1.innerText="Got you!";

function handleTitleClick(){
    const currentColor=h1.style.color;
    let newColor;
    if(currentColorr==="blue"){
        newColor="tomato"
    }else{
        newColor="blue"
    }
    h1.style.color=newColor;
}

//h1.onclick=handleTitleClick;
//window.addEventListener("resize",handleWindowResize);
h1.addEventListener("click",handleTitleClick);
*/
const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleClick(){
    const clickedClass="clicked";
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    }else{
        h1.classList.add(clickedClass);
    }
    //===h1.classList.toggle("clicked");
}

h1.addEventListener("click",handleTitleClick);