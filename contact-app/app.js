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
        birthData: 05 / 20 / 2000,
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

    let initialContacts = "";
    let i = 0;

    while (i < contacts.length) {
        initialContacts += `<p id=${contacts[i].id}, ${contacts[i].firstName}, ${contacts[i].lastName}></p>`

        i++

    }
    return initialContacts;

}