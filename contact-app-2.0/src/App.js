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
      
      const saveContact = (contact)=> {
        setContacts([...contacts, contact]);
      };

      //handle for the delete btn
      //handle the delete button when clicked
      // function deleteContact(id){
      //     setContacts(prevContacts => {
      //       return prevContacts.filter((contactItem, index) => {
      //           return index !== id;
      //       })
      //   })
      // }


  // console.log(contacts);

      return (
        <div>
          <h1> contacts app 2-0 </h1>
          <CreateContact
            saveContact={saveContact}
          />
          <ListOfContacts
            contacts= {contacts}
          />
          
        </div>
      );
}

export default App;
