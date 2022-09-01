import React, { useState } from "react";
import ListOfContacts from "./components/ListOfContacts";

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
  
  // const saveContacts = (contact)=>{
    
  //   setContacts([
  //     ...contacts,
  //     contact
  //   ])
  // }

  // console.log(contacts);

  return (
    <div>
      <h1>
        contacts app 2-0
      </h1>
      <ListOfContacts contacts={contacts}/>
    </div>
  );
}

export default App;
