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

]

//get handle of the contact list

const contactInfor = document.getElementById("contact-list");

//the CRUD list view 

const ReadContactInfor = function (contacts) {

    let initialContacts = " ";

    for(let i = 0;i <= contacts.length, i++;){
        initialContacts += `<p data-id=${contacts[i].id}>${contacts[i].firstName}, ${contacts[i].lastName},
        ${contacts[i].otherName}, ${contacts[i].birthDate}, ${contacts[i].phoneNumber}, ${contacts[i].birthDate},
        ${contacts[i].email},${contacts[i].country},${contacts[i].city}, ${contacts[i].street},
         ${contacts[i].state}></p>`
        
    }
    return initialContacts;
};


//CREATE a new contact

const CreateNewContact = function(event){
    event.preventDefault();
    const firstName = event.target["first-name"].value;
    const lastName = event.target["last-name"].value;
    const otherName = event.target["Oname"].value;
    const birthDate = event.target["bday"].value;
    const phoneNumber = event.target["phone"].value;

    const newContactPerson = {

        id: contacts.lenght + 1,
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

    };

    contacts.push(newContactPerson);

    contactInfor.innerHTML = ReadContactInfor(contacts);
}

const contactForm = document.querySelector("#create-new-contact");

contactForm.addEventListener("submit", CreateNewContact);