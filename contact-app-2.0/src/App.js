import React, { useEffect, useState } from "react";
import ListOfContacts from "./components/ListOfContacts";
import CreateContact from "./components/CreateContact";
import EditContact from "./components/EditForm";
/*
DONE 
handling delete
- set the delete btn to each contact
- handle for when it is clicked
- write the logic to delete the contact
- pass the the the logic to each btn 
*/


/*
  - Make an edit button
  - Make edit form
  - Get the id/record the user has selected by clicking edit button
  - Pre-populate edit form fields with selected record/id
  - user makes changes
  - save changes button
  - show the user the edit record
    - show the edited record
    - show pop out successfully edited
  */

function App() {

  const [contact, setContact] = useState(" ");
  
  // same as how we initially set an array of objectss
    const initialContacts = [
      {
        id: 1,
        name: "kose",
        phone: 12434232,
        email: "dsfagd@gmail.com",
      },
      {
        id: 2,
        name: "kose",
        phone: 12434232,
        email: "dsfagd@gmail.com",
      },
      {
        id: 3,
        name: "kose",
        phone: 12434232,
        email: "dsfagd@gmail.com",
      },
    
    ]
  

      const [contacts, setContacts] = useState(initialContacts); //using the useState hook to manage the state
      
      const [initialEditContact, setInitialEditContact] = useState({});

      const [isEditing, setIsEditing] = useState(false);

      //useEffect to run once the component mounts

      useEffect(()=> { //use the IIFE
        localStorage.setItem("contacts", JSON.stringify(contacts)); 
      }, [contacts]);

      //function to manage saving contacts
      const saveContact = (contact)=> {
        setContacts([...contacts, contact]);
      };

      // handle for the delete btn
      function deleteContact(id){

        const removeContact = contacts.filter((contact)=>{
          return contact.id !== id;
        });

        setContacts(removeContact);

      }


      //handling the edit contact
      // get the id of contact when clicked
      const editContact = (editingContact)=>{

        const myContacts = contacts.map(
          (contact) => (contact.id === editingContact.id ? editingContact : contact)
        );

        setContacts(myContacts);
      };

      // pre-populate the edit form with the selected edit contact form
      const prepopulateEditForm = (contact)=>{
        // console.log("prepopulate form");
        // console.log(contact);

        setInitialEditContact(contact);
      }


    // console.log(contacts);

      return (
        <div>
          <h1> contacts app 2-0 </h1>
          {isEditing ? (
            <EditContact
              editContact={editContact}
              initialEditContact={initialEditContact}
            />
          ) :(
            <CreateContact
            saveContact={saveContact}
          />
          )}
          <ListOfContacts
            contacts= {contacts}
            onDelete={deleteContact}
            prepopulateEditForm={prepopulateEditForm}
            setIsEditing={setIsEditing}
          />
          
        </div>
      );
}

export default App;
