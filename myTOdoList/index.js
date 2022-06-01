const form = document.getElementById("add-to"); // grab the form thru the ID


//this is the event handler to help grab input from the user
function getFormInput(event){
    event.preventDefault(); //this prevents the browser from executing the default submit behavior for a form
    let input = document.getElementById("my-input").value; //grabs value if the input

    //logic behind what to add onto the list
    if(input.value != " "){
        addtodo(input)
    }else{
        input.value = " "; //this resets the input space to empty string after submitting
     };
};

//function to help handle the added item
function addtodo(todo){
    let ol = document.getElementById("my-ol"); //grabs the id element and assigns it to the var ul
    let li = document.createElement("li"); // creates a list element and assigns it to the var li

    //add span element to integrate into the todo list
    li.innerHTML = `
    <span class="todo-item">${todo}</span> 
    <button name ="inprogress">Doing</button>
    <button name ="checkBtn">completed</button>
    <button name ="deleteBtn">delete</button>

    `;
    ol.appendChild(li); // this adds the input to the ordered list of todos 

};
//this is to add a selector to handle what the should happen when the button is clicked
form.addEventListener("submit", getFormInput);
