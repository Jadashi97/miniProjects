let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //this prevents the form from automatically submitting
  handleInput();
});

//handle the form so the input is not blank
let handleInput = () => {
  if (textInput.value === "") {
    console.log("failure");
    msg.innerHTML = "Task cannot be blank";
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();

    (() => {
      add.setAttribute("data-bs-dismiss", "");
    })();
  }
};

let data = [{}];

//grabs whatever data the user inputs and adds that to the localstorage
let acceptData = () => {
  data.push({
    text: textInput.value,
    date: dateInput.value,
    description: textarea.value,
  });

  localStorage.setItem("data", JSON.stringify(data)); //this adds the data to localstorage

  console.log(data);
  createTasks(); //call this to include the function
};

//creates new tasks using a map()
let createTasks = () => {
  tasks.innerHTML = "";
  data.map((x, y) => { //calls the function once for each element in an array

    //use backticks to include and push the data added by the user 
    return (tasks.innerHTML += ` 
    <div id=${y}>
          <span class="fw-bold">${x.text}</span>
          <span class="small text-secondary">${x.date}</span>
          <p>${x.description}</p>
  
          <span class="options">
            <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
            <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
          </span>
        </div>
    `);
  });

  resetForm();
};

//function to delete a task
let deleteTask = (e) => {
  e.parentElement.parentElement.remove(); //deletes html from the screen
  data.splice(e.parentElement.parentElement.id, 1); //removes targetted task form the data array
  localStorage.setItem("data", JSON.stringify(data)); //updates the local storage with the new data
  console.log(data);
  
};

let editTask = (e) => {
  let selectedTask = e.parentElement.parentElement; //target the selected task
//below target the values we need to edit
  textInput.value = selectedTask.children[0].innerHTML;
  dateInput.value = selectedTask.children[1].innerHTML;
  textarea.value = selectedTask.children[2].innerHTML;

  deleteTask(e); //calling the delete function
};

//function to clear the input field once we are done collecting the data from the user
let resetForm = () => {
  textInput.value = "";
  dateInput.value = "";
  textarea.value = "";
};

//get data from local storage using the IIFE
(() => {
  data = JSON.parse(localStorage.getItem("data")) || []
  console.log(data);
  createTasks();
})();