// Implement CRUD Operations

//create array of objects for particular todo item with progress details
const dateTime = new Date().toLocaleString();
let todos = [
	{
		id: 1,
		item: "Go birthday party",
		status: "todo", // todo, doing, done
		createdAt: dateTime,
		updatedAt: dateTime,
	},
	{
		id: 2,
		item: "Learn driving",
		status: "doing", // todo, doing, done
		createdAt: dateTime,
		updatedAt: dateTime,
	},
	{
		id: 3,
		item: "Learn coding",
		status: "Done", // todo, doing, done
		createdAt: dateTime,
		updatedAt: dateTime,
	},
];

//handles to grab stuff using the id
const todoList = document.getElementById("todo-lists");
const newTodoElement = document.getElementById("create-new-todo-item");
const todoDetails = document.getElementById("todo-details");
const editButton = "Save Changes";

let currentTodo = null;
let currentTodoId; //not sure why this line of code is a variable assigned to nothing

//function to map thru the item list and render the todo items to the detals page
//Please exaplain clearly what is happening in line 44??????
const readTodoList = (todos) => {
	let mapTodos = "";
	for (let i = 0; i < todos.length; i++) {
		mapTodos += `<p id="todo-details">
            <a href="todo-detail.html?id=${todos[i].id}">${todos[i].item}</a>
            <button id="edit-todo-item" data-id="${todos[i].id}">edit</button>
            <button id="delete-todo-item" data-id="${todos[i].id}">delete</button>
        </p>`;
	}
	return mapTodos;
};

// any additive explanation here will help knowing that this is an easy way to pass objects to the html
const readTodoDetails = (todos, todoDetails) => {
	const urlParams = new URLSearchParams(window.location.search);
	const currentId = urlParams.get("id") - 1;

	const currentTodo = todos[currentId];
	if (currentTodo) {
		todoDetails.innerHTML = `
        <p>${currentTodo.item}</p>
        <p>${currentTodo.status}</p>
        <p>${currentTodo.createdAt}</p>
        <p>${currentTodo.updatedAt}</p>
        `;
	}
};


//Create new todo item
//just need abit more elaboration here
const createNewTodoItem = (event) => {
	event.preventDefault();
	if (currentTodo) return;
	console.log("creating new form");
	const formData = {
		status: event.target.status.value,
		item: event.target.item.value,
	};

	let newTodoItem = {
		id: todos.length + 1,
		...formData, //does this mean we are adding to the above formdata on line 74??
		createdAt: dateTime,
		updatedAt: dateTime,
	};
	todos.push(newTodoItem);

	// clear form field

	// refresh todos
	todoList.innerHTML = readTodoList(todos);
};

const deleteTodoItem = (currentId) => {
	// get id if you are using href, best when you have database set
	// const urlParams = new URLSearchParams(window.location.search);
	// const currentId = urlParams.get("id") - 1;
	console.log(currentId);
	const newTodos = todos.filter((todo) => todo.id != currentId);
	// refresh database
	todos = newTodos;
	todoList.innerHTML = readTodoList(newTodos);
};


const fillTodoFormValues = (currentTodoId) => {
	console.log("filling form fields");
	let item = document.getElementById("item");
	currentTodo = todos[currentTodoId - 1];
	console.log(currentTodo);
	item.value = currentTodo.item;
	// change form button
	// <div id="create-edit-btn"><button type="submit">create</button></div>
	const btn = document.getElementById("create-edit-btn");
	btn.innerHTML = `<button id="edit-btn" type="submit">Save changes</button>`;
};

//update todo 
const editTodoItem = (event) => {
	event.preventDefault();
	console.log("editing new form");
	const formData = {
		id: currentTodo.id,
		status: event.target.status.value,
		item: event.target.item.value,
		createdAt: dateTime,
		updatedAt: dateTime,
	};

	const newTodos = todos.map((todo) =>
		todo.id === currentTodo.id ? formData : todo,
	);

	// save new todo db
	console.log(newTodos);
	// refresh todos
	todoList.innerHTML = readTodoList(newTodos);
	currentTodo = null;
};

// Make sure you are reading this function after the html dom contents have loaded...
window.addEventListener("DOMContentLoaded", (event) => {
	// Read List of Todos
	if (todoList) {
		todoList.innerHTML = readTodoList(todos);
	}

	// Read Details of Todos
	if (todoDetails) {
		readTodoDetails(todos, todoDetails);
	}
	if (newTodoElement && !currentTodo) {
		newTodoElement.addEventListener("submit", createNewTodoItem);
	}

	// Event Delegation
	// https://stackoverflow.com/a/34896387/10959788
	document.addEventListener(
		"click",
		function (e) {
			if (e.target && e.target.id == "delete-todo-item") {
				currentTodoId = e.target.dataset.id;
				deleteTodoItem(currentTodoId);
			}
			if (e.target && e.target.id == "edit-todo-item") {
				currentTodoId = e.target.dataset.id;
				fillTodoFormValues(currentTodoId, e);
			}
			if (e.target && e.target.id == "edit-btn") {
				newTodoElement.addEventListener("submit", editTodoItem);
			}
		},
		false,
	);

	//add to local storage

	localStorage.setItem("todos", JSON.stringify( {item: "currentTodo"}));


	// console.log(localStorage.getItem("currentTodo"));

});



//still figuring out how to set to local storage

// let acceptData = () => {
// 	currentTodo.push({
	  
// 	});
  
// 	localStorage.setItem("lists", JSON.stringify(currentTodo)); //this sets the item in JSON format
  
// 	console.log(currentTodo);
  
//   };


