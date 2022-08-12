let form = document.getElementById("form-result");
let result = document.getElementById("calc-result");

const add = (num1, num2)=> {
    return num1 + num2
};

const subtract = (num1, num2)=> {
    return num1 - num2
};

const multiply = (num1, num2)=> {
    return num1 * num2
};

const divide = (num1, num2)=> {
    return num1 / num2
};



function processForm(event){

    event.preventDefault();

    let num1 = parseInt(document.getElementById("n1").value);
    let num2 = parseInt(document.getElementById("n2").value);
    let operator = document.getElementById("operator").value;

    result.innerHTML = `Result: ${computeResult(num1, operator, num2)}`
}

function computeResult(num1, operator, num2){
    if(operator === "+"){
        return add(num1, num2);

    } else if(operator === "-"){
        return subtract(num1, num2);

    }else if(operator === "*"){
        return multiply(num1, num2);

    }else if(operator === "/"){
        return divide(num1,  num2);
    }
}

// console.log(add(2, 4));




// process form //////pay attention more to this and make sure you internalize it.
form.addEventListener("submit", processForm);



