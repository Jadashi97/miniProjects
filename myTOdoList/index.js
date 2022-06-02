const addbutton = document.getElementById("btn"); // grab the form thru the ID

//this is the event handler to help grab input from the user
function getFormInput(event){
    event.preventDefault(); //this prevents the browser from executing the default submit behavior for a form
    let input = document.getElementById("myInput").value; //grabs value if the input

    //logic behind what to add onto the list
    if(input.value != " "){
        addtodo(input)
    }else{
        input.value = " "; //this resets the input space to empty string after submitting
     };
};

//function to add new item to do list when 
function addtodo(todo){
    let ol = document.getElementById("my-ol"); //grabs the id element and assigns it to the var ul
    let li = document.createElement("li"); // creates a list element and assigns it to the var li

    //add span element to integrate into the todo list
    li.innerHTML = `
    <span class="todo-item">${todo}</span>
    <button name ="inprogress">👨🏾‍💻</button>
    <button name ="checkBtn">✅</button>
    <button name ="deleteBtn">🗑</button>
    `;
    ol.appendChild(li); // this adds the input to the ordered list of todos 

};

//this is to add a selector to handle what the should happen when the button is clicked
addbutton.addEventListener("submit", getFormInput);

