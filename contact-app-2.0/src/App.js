import React, { useState } from "react";
import ListOfContacts from "./components/ListOfContacts";
import CreateContact from "./components/CreateContact";

function App() {

  
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
  

  const [contacts, setContacts] = useState(initialContacts);
  
  function addContact(newContact){
    setContacts((prevContact)=>{
      return[
        ...prevContact,
        newContact
      ];

    })
  }

  // console.log(contacts);

  return (
    <div>
      <h1>
        contacts app 2-0
      </h1>
      <ListOfContacts contacts={contacts}/>
      <CreateContact
        onAdd={addContact}
      />
    </div>
  );
}

export default App;
