import React, { useState, useEffect } from "react";
import ReadContactDetails from "./ReadContactDetails";
// import { useEffect } from "react";



const ListOfContacts = ({saveContact, onDelete, setIsEditing, prepopulateEditForm}) => {

    const [isDetails, setIsDetail] = useState(false);
    const [contact, setContact] = useState([]);
    // const [contactItems, setContactItems] = useState([]);
    

    const readDetails = (e, contact) => {
       
        setIsDetail(true);
        setContact(contact);
    }

    const goBackToListOfContacts = ()=>{
        
        setIsDetail(false);
    }


    // handling the EditMode

    const handleEditMode = (e, contact)=>{
        setIsEditing(true);

        prepopulateEditForm(contact);
    }

    return(
        <>
        {/* use the ternary operator to conditionally render the details of the contacts when clicked on */}
            {isDetails ? (
                <ReadContactDetails
                    goBackToListOfContacts={goBackToListOfContacts}
                    // contact={contact}
                    {...contact}
                />
            ): (
                <div>
                 
                    <h2>List of Contacts</h2>
                    {saveContact.map(({id,name,email},index, arr)=>(

                        <div key={index}>
                            <p>{id}</p>
                            <p>{name}</p>
                            <button style={{cursor: "pointer"}} onClick={(e) => readDetails(e, arr[index])}>
                                view details
                            </button>
                            <button onClick={()=> onDelete(id)}>delete</button>
                            <button onClick={(e) => handleEditMode(e, arr[index])}>Edit</button>
                        </div>
                    ))}
                
                </div>
            )}
        
        </>
    );
};
 
export default ListOfContacts;
