"use strict"; 


//Self executing anonomys function
//IIFE - immediately Invoced Function Expression
(function(){

    let myFunctionalVariable = 0;


function Start(){

    let myLocalVariable = 0;
    console.log(`app started...${myFunctionalVariable}`);
}

window.addEventListener("load", Start)

})();