let contacts = [
    {
        id: 1,
        firstName: "Lokose",
        lastName: "Daniel",
        otherName: "Nyarji",
        birthDate: "08/10/1997",
        phoneNumber: 0240034232,
        email: "ksdfkaj@gmail.com",
        country: "USA",
        city: "Minneapolis",
        street: 4000,
        state: "MN"
    },

    {
        id: 2,
        firstName: "Wani",
        lastName: "Ronald",
        otherName: "Jada",
        birthDate: "05/20/2000",
        phoneNumber: 0240034232,
        email: "ksdfkaj@yahoo.com",
        country: "USA",
        city: "st.Paul",
        street: 2000,
        state: "MN"
    }

];

let contactListHandle =  document.getElementById("contact-list");



//READ
const readContacts = (contacts, index, arr)=> {
    let htmlContacts = " ";
    let i = 0;
    while(i < contacts.length){
        htmlContacts += `<p data-id= ${contacts[i].id}>${contacts[i].firstName},${contacts[i].lastName},
        ${contacts[i].otherName}, <br/>${contacts[i].birthDate}, ${contacts[i].phoneNumber}, ${contacts[i].email},<br/>
        ${contacts[i].country}, ${contacts[i].city}, ${contacts[i].state}, ${contacts[i].street}\

        <button onClick= "deleteContact(${contacts[i].id})">Delete</button>
        <button onClick= "populateContactFormFields(${contacts[i].id} - 1 )">edit</button>
        </p>`

        i++;
    }
    return htmlContacts;

};
//List objects in the array

contactListHandle.innerHTML = readContacts(contacts)





//CREATE a new contact

const createNewContact = function(event){
    event.preventDefault();
    const firstName = event.target["first-name"].value;
    const lastName = event.target["last-name"].value;
    const otherName = event.target["Oname"].value;
    const birthDate = event.target["bday"].value;
    const phoneNumber = event.target["phone"].value;
    const email = event.target["email"].value;
    const country = event.target["country"].value;
    const city = event.target["city"].value;
    const street = event.target["street"].value;
    const state = event.target["state"].value;

    const newContactPerson = {

        id: contacts.length + 1,
        firstName: firstName,
        lastName: lastName,
        otherName: otherName,
        birthDate: birthDate,
        phoneNumber: phoneNumber,
        email: email,
        country: country,
        city: city,
        street: street,
        state: state

    };

    contacts.push(newContactPerson);
    contactListHandle.innerHTML = readContacts(contacts);

}


const contactForm = document.querySelector("#create-new-contact");

contactForm.addEventListener("submit", createNewContact);


//Populate formfields

const populateContactFormFields = (id) => {
	document.getElementById("first-name").value   //= contacts[id].firstName;
	document.getElementById("last-name").value = contacts[id].lastName;
	document.getElementById("nationality").value = contacts[id].nationality;

	// switch button
	const createBtn = document.getElementById("create");
	const editBtn = document.getElementById("edit");
	const editBox = document.getElementById("edit-contact");

	editBox.innerHTML = `<button id="save" type="submit">Save Changes</button>`;

	document.addEventListener(
		"click",
		function (e) {
			if (e.target && e.target.id == "delete-todo-item") {

	        }
		},
		false,
	);
};



// //UPDATE BTN
const editContact = (event) =>{
    // if(button.textContent === "Edit"){
    //     const span = li.firstElementChild;
    //     const input = document.createElement('input')
    //     input.type = "text";
    //     input.value = span.textContent
    // }


    console.log(selectedContact);
    console.log("edit me");


    // deleteContact(event);
};






//DELETE BTN done
const deleteContact = (id) => {
    console.log("take me off!!");
    
    //use the filter method to target exactly what criteria we looking for then delete that
    newContactPerson = contacts.filter((contact) => contact.id != id);

    //show in html

    contacts = newContactPerson;
    contactListHandle.innerHTML = readContacts(contacts);
}

document.addEventListener("DOMContentLoaded", () => {
	contactListHandle.innerHTML = readContacts(contacts);
});

//ADD INDEXEDB TO THE CONTACT APP

const dbName = "Daniel's contacts";

const request = indexedDB.open(dbName, 3);

//this handles errors
dbName.onerror = (event) => {
    // Generic error handler for all errors targeted at this database's
    // requests!
    console.error(`Database error: ${event.target.errorCode}`);
  };


//create objectstore to hold contact infor

request.onupgradeneeded = (event) => {
    const db = event.target.result;

    const objectStore = db.createObjectStore("contactList", { keyPath: "id" });


    objectStore.createIndex("firsName", "firstName", {unique: false}); //searches contacts by first name
    objectStore.createIndex("lastName", "lastName", {unique: true}); //searches contacts by last name

    //this makes sure object store creation is complete before adding any data

    objectStore.transaction.oncomplete =(event) =>{
        //store values in my contacts
        const contactListStore = db.transaction("contactList", "readwrite").objectStore("contactList");
        contacts.forEach(function(contact){
            contactListStore.add(contact);
        });
    };
};

