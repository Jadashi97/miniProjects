let contacts = [
	{
		id: 1,
		firstName: "Stephen",
		lastName: "lagu",
		nationality: "South Sudanese",
	},
	{
		id: 2,
		firstName: "Daniel",
		lastName: "Jada",
		nationality: "Ugandan",
	},
	{
		id: 3,
		firstName: "Artema",
		lastName: "Juma",
		nationality: "Egyptian",
	},
];

//this helps us get a handle on the list-contacts id
const contactListHandle = document.getElementById("list-contacts");


// CRUDL Read list view
const readContact = (contacts) => {
	let htmlContacts = "",
		i = 0;
	while (i < contacts.length) {
		//this is to add the above array of contacts including the delete and edit buttons to the DOM
		htmlContacts += `<p data-id=${contacts[i].id}>${contacts[i].firstName}, ${contacts[i].lastName}
		  ${contacts[i].nationality}
        <button onclick="deleteContact(${contacts[i].id})">delete</button>
        <button onclick="populateContactFormFields(${contacts[i].id - 1})">edit</button></p>`;
		i++; 
	}
	return htmlContacts; //as it states, it returns the above stuff appended to the created object
};

//CREATE new contact 
 
const createNewContact = (event) => {
	event.preventDefault();
	const firstName = event.target["first-name"].value;
	const lastName = event.target["last-name"].value;
	const nationality = event.target.nationality.value;

	//this is to allow us to create a new contact
	const newContact = {
		id: contacts.length + 1,
		firstName: firstName,
		lastName: lastName,
		nationality: nationality,
	};

	contacts.push(newContact);
	// update html
	contactListHandle.innerHTML = readContact(contacts);

	// clear form fields
	event.target["first-name"].value = "";
	event.target["last-name"].value = "";
	event.target.nationality.value = "";

};
// //// please explain the whole idea behind local storage and how to keep stuff on the page and not on the console??

// //add to local storage
// localStorage.setItem("contacts",JSON.stringify(contacts));

// // get item from localStorage
// localStorage.getItem("contacts");


const contactForm = document.querySelector("#create-new-contact"); //grab the form using the querry selector

contactForm.addEventListener("submit", createNewContact); //when create is clicked it adds the form objects on to the DOM

const populateContactFormFields = (id) => {
	document.getElementById("first-name").value = contacts[id].firstName;
	document.getElementById("last-name").value = contacts[id].lastName;
	document.getElementById("nationality").value = contacts[id].nationality;

	// switch button
	const createBtn = document.getElementById("create");
	const editBtn = document.getElementById("edit");
	const editBox = document.getElementById("edit-contact");

	editBtn.innerHTML = `<button id="save" type="submit">Save Changes</button>`;

	document.addEventListener(
		"click",
		function (e) {
			if (e.target && e.target.id == "delete-todo-item") {

	        }
		},
		false,
	);
};

//trying to figure out this edit feature please help???
const editContact = (event) => {
	event.preventDefault();
	console.log("trying to set the ball rolling for this contact!!");

};

const deleteContact = (id) => {
	newContacts = contacts.filter((contact) => contact.id != id);
	// update html
	contacts = newContacts;
	contactListHandle.innerHTML = readContact(contacts);
};

document.addEventListener("DOMContentLoaded", () => {
	contactListHandle.innerHTML = readContact(contacts);
	// when dom loaded
});