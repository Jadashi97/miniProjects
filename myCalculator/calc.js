
const form = document.getElementById("result"); // this grabs the (form) by its id
const result = document.getElementById("compute-result"); //this grabs the (p) element by its id

function processFormInput(event){
    event.preventDefault(); // this cancels the default if it is cancelable, the default action that belongs to the event will not occur
    
    // this is to initiate what should be gotten from the user input

    let num1 = parseInt(document.getElementById("num1").value); // grabs value input by user as num1
    let num2 = parseInt(document.getElementById("num2").value); //grabs value input by user as num2
    let operator = document.getElementById("operator").value; // grabs the operator used by the user as operator
    
    //this sets the result answer to the worked out function and displays it as the innerHTML
    result.innerHTML = `Result: ${computeResult(num1, num2, operator)}`
};

function computeResult(num1, num2, operator){
         // this logic excutes the operator chosen by the user and returns an answer accordinf to the user inputs
         if (operator === "+") {    
           return num1 + num2;
        }else if (operator === "-") {
            return num1 - num2;
        }else if (operator === "*") {
            return num1 * num2;
        }else if(operator === "/"){
            return num1 / num2;
        }

};

form.addEventListener("submit", processFormInput);
