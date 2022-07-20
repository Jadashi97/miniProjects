let contacts = [
    {
        id: 1,
        firstName: "Lokose",
        lastName: "Daniel",
        otherName: "Nyarji",
        birthData: 08/10/1997,
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


//get handle of the contact list

// document.getElementById("contact-list").innerHTML = JSON.stringify(contacts[0]);
// contactInfor.innerHTML = contacts.id;


//the CRUD list view 

// const readContactInfor = function(contact,index, arr) {
    
//     let initialContacts = document.createElement("h3");
    
//     initialContacts.innerHTML  = contact[index].id,contact[index].firstName, contact[index].lastName,contact[index].phoneNumber,contacts[index].email, contacts[index].country, contacts[index].city, contacts[index].state

//     //     i++;
//     // i = 0;

//     // while(i < contacts.length){
//     //     initialContacts += `<p data-id=${contacts[index].id}, ${contacts[index].firstName}, ${contacts[index].lastName},
//     //     ${contacts[index].phoneNumber},
//     //     ${contacts[index].email},${contacts[index].country},${contacts[index].city},${contacts[index].state}
//     //     </p>`
//     //     i++;
//     // };
//     // return initialContacts;
//     // console.log(initialContacts)
//     // contactInfor.innerHTML = initialContacts;
// };
// // let index = "0";
// // let initialContacts = document.createElement("h3");

// // for(let i = 0; i < contacts.length; i++){
// //     initialContacts.innerHTML  =+ contacts[i].id,contacts[i].firstName, contacts[i].lastName,contacts[i].phoneNumber,contacts[i].email, contacts[i].country, contacts[i].city, contacts[i].state
// //     contactInfor.appendChild(initialContacts);
// // }



let readList = contacts.map(contact =>{
    console.log(contact)
});

document.getElementById("contact-list").innerHTML = readList;


// console.log(readList);

// let addedContacts = contacts.push(readList)
// console.log(addedContacts);


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

