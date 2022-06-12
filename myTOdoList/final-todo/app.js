// Implement CRUD Operations
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