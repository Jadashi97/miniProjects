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
        <button onClick= "updateContact(${contacts[i].id})">Update</button>
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



//UPDATE BTN
const editContact = contacts.map((contact) => {
    if (contact.id === id) {
		console.log("edit me!!")
	}else{
        console.log("not found!");
    }
    
});



//DELETE BTN done
const deleteContact = (id) => {
    console.log("take me off!!");
    
    //use the filter method to target exactly what criteria we looking for then delete that
    newContactPerson = contacts.filter((contact) => contact.id != id);

    //show in html

    contacts = newContactPerson;
    contactListHandle.innerHTML = readContacts(contacts);
}

// document.addEventListener("DOMContentLoaded", () => {
// 	contactListHandle.innerHTML = readContacts(contacts);
// });

