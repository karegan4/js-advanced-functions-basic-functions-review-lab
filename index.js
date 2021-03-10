// Your code here

/* 1)
Implement a function called saturdayFun. 
It should return a String like "This Saturday, I want to ....!" 
Fill in the ... with the activity that's passed in as the first parameter. 
If nothing is passed in, default to "roller-skate".*/
function saturdayFun(parameter="roller-skate"){
    return `This Saturday, I want to ${parameter}!`
}

/* 2)
 Implement a function expression called mondayWork. 
 The function should return a String like "This Monday, I will ... ." 
 Fill in the ... with the activity that's passed in as the first parameter. 
 If nothing is passed in, default to "go to the office".
*/
function mondayWork(parameter="go to the office"){
    return `This Monday, I will ${parameter}.`
}

/* 3)
Implement a function called wrapAdjective.
- It should return a function
    -This "inner" function should:
        -take a single parameter that should default to "special". Name it however you wish.
        -return a String in the form "You are..." where ... should be the adjective
        this function received wrapped in visual flair.
    - It should take as parameter a String that will be used to create visual flair.
    - You may call the parameter whatever you like, but its default value should be "*"
    Call example: const encouragingPromptFunction = wrapAdjective("!!!")
    Thus a total call should be:
    wrapAdjective("%")("a dedicated programmer") //=> "You are %a dedicated programmer%!"
*/
let wrapAdjective = function(style="*"){
    return function(adjective="special"){
        return `You are ${style}${adjective}${style}!`
    }
}

/* 3)
Define a function called Calculator that has a function called:
    -add
    -subtract
    -multiply
    -divide
*/
const Calculator = {
    add: function(a,b) {
        return a+b;
    },
    subtract: function(a,b) {
        return a-b;
    },
    multiply: function(a,b) {
        return a*b;
    },
    divide: function(a,b){
        return a/b;
    }
}

function actionApplyer(integer, array){
    let a = integer

    for (let i=0; i < array.length; i++) {
        a = array[i](a)
    }
    return a
}