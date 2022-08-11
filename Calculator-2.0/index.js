let form = document.getElementById("form-result");
let result = document.getElementById("calc-result");



function processForm(event){

    event.preventDefault();

    let num1 = parseInt(document.getElementById("n1").value);
    let num2 = parseInt(document.getElementById("n2").value);
    let operator = document.getElementById("operator").value;

    result.innerHTML = `Result: ${num1}`


}




// process form //////pay attention more to this and make sure you internalize it.
form.addEventListener("submit", processForm);



