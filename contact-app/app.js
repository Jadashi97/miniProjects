let contacts = [
    {
        id: 1,
        firstName: "Lokose",
        lastName: "Daniel",
        otherName: "Nyarji",
        birthData: "08/10/1997",
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
        birthDate: 05 / 20 / 2000,
        phoneNumber: 0240034232,
        email: "ksdfkaj@yahoo.com",
        country: "USA",
        city: "st.Paul",
        street: 2000,
        state: "MN"
    }

];

// List contacts on the DOM
let myArray = Object.values(contacts[0]);

document.getElementById("contact-list").innerHTML = myArray;


//READ
const readContacts = (contact, index, arr)=> {
    console.log(contact)
}
contacts.map(readContacts);




// const readContactDetail = (contact) => contact.id ===  1;
// const detail = contacts.find(readContactDetail)
// console.log(detail);

// CREATE




//CREATE a new contact

// const createNewContact = function(event){
//     event.preventDefault();
//     const firstName = event.target["first-name"].value;
//     const lastName = event.target["last-name"].value;
//     // const otherName = event.target["Oname"].value;
//     // const birthDate = event.target["bday"].value;
//     const phoneNumber = event.target["phone"].value;

//     const newContactPerson = {

//         id: contacts.length + 1,
//         firstName: "Lokose",
//         lastName: "Daniel",
//         otherName: "Nyarji",
//         birthData: 08/10/1997,
//         phoneNumber: 0240034232,
//         email: "ksdfkaj@gmail.com",
//         country: "USA",
//         city: "Minneapolis",
//         street: 4000,
//         state: "MN"

//     };

//     // contacts.push(newContactPerson);
//     // contactInfor.innerHTML = readContactInfor(contacts);

// }


// const contactForm = document.querySelector("#create-new-contact");

// contactForm.addEventListener("submit", createNewContact);


// const populateContactForm = (id) => {
//     document.getElementById("first-name").value = contacts[id].firstName;
// 	document.getElementById("last-name").value = contacts[id].lastName;


//     const createBtn = document.getElementById("create");
// }


// document.addEventListener("DOMContentLoaded", () => {
// 	contactInfor.innerHTML = readContactInfor(contacts);
// });

