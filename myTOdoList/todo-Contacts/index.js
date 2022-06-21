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