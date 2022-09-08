import React, { useState } from "react";
import ListOfContacts from "./components/ListOfContacts";
import CreateContact from "./components/CreateContact";

// handling delete
// - set the delete btn to each contact
// - handle for when it is clicked
// - write the logic to delete the contact
// - 

function App() {

  const [contact, setContact] = useState([]);
  
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
      
      //function to manage saving contacts
      const saveContact = (contact)=> {
        setContacts([...contacts, contact]);
      };

      //handle for the delete btn
      function deleteContact(id){
          setContact(prevContacts => {
            return prevContacts.filter((contactItems, index) => {
                return index !== id;
            })
        })
      }


  // console.log(contacts);

      return (
        <div>
          <h1> contacts app 2-0 </h1>
          <CreateContact
            saveContact={saveContact}
          />
          <ListOfContacts
            contacts= {contacts}
            onDelete={deleteContact}
          />
          
        </div>
      );
}

export default App;
