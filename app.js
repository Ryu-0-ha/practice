
function calculatekrAge(ageOfForeigner){
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

const age = parseInt(prompt("How old are you"));

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