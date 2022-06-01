const form = document.getElementById("add-to"); // grab the form thru the ID


//this is the event handler to help grab input from the user
function getFormInput(event){
    event.preventDefault(); //this prevents the browser from executing the default submit behavior for a form
    let input = document.getElementById("my-input").value;

    if(input.value != " "){
        console.log(input);
    }else{
        console.log("add a todo item!!");
    }
}

//this is to add a selector 
form.addEventListener("submit", getFormInput);