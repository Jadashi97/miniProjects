import React, { useState } from "react";

const ListOfContacts = ({contacts})=>{

    const [contact, setContacts] = useState({});

    // console.log(contacts);
    
    //handle the delete button when clicked
    function deleteContact(id){
         setContacts(prevContacts => {
            return prevContacts.filter((contactItem, index) => {
                return index !== id;
            })
        })
    }

    function handleClick(e){
        e.preventDefault();

        console.log("clicked!!")

       deleteContact(contact);
    }
    
    return(
        <div>
            {contacts.map(({id, name, phone, email}, index)=>(
                <div>
                    <p>{index}</p>
                    {/* <p>{id}</p> */}
                    <p>{name}</p>
                    <p>{phone}</p>
                    <p>{email}</p>{" "}
                    <button onClick={handleClick}>delete</button>
                </div>
            ))}
        </div>
    )

}

export default ListOfContacts;