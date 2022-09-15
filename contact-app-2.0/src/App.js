import React, { useEffect, useState } from "react";
import ListOfContacts from "./components/ListOfContacts";
import CreateContact from "./components/CreateContact";
import EditContact from "./components/EditForm";
import ContactItem from "./components/ContactItem";


function App() {
  // same as how we initially set an array of objectss
  // const initialContacts = [
  //     {
  //         id: 1,
  //         name: "kose",
  //         phone: 12434232,
  //         email: "dsfagd@gmail.com",
  //       },
  //       {
  //           id: 2,
  //           name: "kose",
  //           phone: 12434232,
  //           email: "dsfagd@gmail.com",
  //         },
  //         {
  //             id: 3,
  //             name: "kose",
  //             phone: 12434232,
  //             email: "dsfagd@gmail.com",
  //           },
          
  //         ]
          
  //     const [contacts, setContacts] = useState(initialContacts); //using the useState hook to manage the state
      

      // this is way to save the contacts to local storage
      // helps when we refresh the page we wil still have the created contacts

      const [contacts, setContacts] = useState(()=>{
        const saveContacts = localStorage.getItem("contacts");
        if(saveContacts){
          return JSON.parse(saveContacts);
        }else{
          return [];
        }
      });

      const [contact, setContact] = useState(" ");

      const [initialEditContact, setInitialEditContact] = useState({});

      const [isEditing, setIsEditing] = useState(false);

      //useEffect to run once the component mounts
      useEffect(()=> { //use the IIFE
        localStorage.setItem("contacts", JSON.stringify(contacts)); 
      }, [contacts]);


      //handling new contact input
      function handleAddInputChange(e){

        setContact(e.target.value);
      }

      // handling when a change in a form
      function handleAddFormSubmit(event){
            event.preventDefault();

            // if (contact !== " "){
            //   setContacts([
            //     ...contacts,
            //     // {
            //     //   id: new Date(),
            //     //   value: contact.trim()
            //     // }
            //   ]);
            // }
            
            // setContact("");

            const {name, value} = event.target; // this help to grab the value of the targeted name 

            setContacts((contact)=>{
                return{
                    ...contact,
                    [name]: value
                }
            })
      }

      // handle for the delete btn
      function handleDeleteClick(id){

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

      // handling EditClick
      function handleEditClick(contact){
        setIsEditing(true);

        setInitialEditContact({...contact})
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
              contact={contact}
              onAddInputChange={handleAddInputChange}
              onAddFormSubmit={handleAddFormSubmit}
          />
          )}
          {/* <ListOfContacts
            contacts= {contacts}
            onDelete={deleteContact}
            prepopulateEditForm={prepopulateEditForm}
            setIsEditing={setIsEditing}
          /> */}
          <ul>
            {contacts.map((contact)=>(
              <ContactItem
                contact={contact}
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteClick}
              
              />
            ))}
          </ul>
          
        </div>
      );
}

export default App;
