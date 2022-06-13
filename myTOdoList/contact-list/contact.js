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

const contactListHandle = document.getElementById("list-contacts");

// CRUDL Read list view
const readContact = (contacts) => {
	let htmlContacts = "",
		i = 0;
	while (i < contacts.length) {
		htmlContacts += `<p data-id=${contacts[i].id}>${contacts[i].firstName}, ${
			contacts[i].nationality
		}
        <button onclick="deleteContact(${contacts[i].id})">delete</button>
        <button onclick="populateContactFormFields(${
					contacts[i].id - 1
				})">edit</button>
        </p>`;
		i++;
	}
	return htmlContacts;
};

const createNewContact = (event) => {
	event.preventDefault();
	const firstName = event.target["first-name"].value;
	const lastName = event.target["last-name"].value;
	const nationality = event.target.nationality.value;

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
const contactForm = document.querySelector("#create-new-contact");

contactForm.addEventListener("submit", createNewContact);

const populateContactFormFields = (id) => {
	document.getElementById("first-name").value = contacts[id].firstName;
	document.getElementById("last-name").value = contacts[id].lastName;
	document.getElementById("nationality").value = contacts[id].nationality;

	// switch button
	const createBtn = document.getElementById("create");
	const editBtn = document.getElementById("edit");
	const editBox = document.getElementById("edit-contact");

	editBox.innerHTML = `<button id="save" type="submit">Save Changes</button>`;

	// document.addEventListener(
	// 	"click",
	// 	function (e) {
	// 		if (e.target && e.target.id == "delete-todo-item") {

	//         }
	// 	},
	// 	false,
	// );
};

const editContact = (event) => {
	//  do somthing
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