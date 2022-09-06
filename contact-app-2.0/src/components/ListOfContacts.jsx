import React, { useState } from "react";
import ReadContactDetails from "./ReadContactDetails";

// agenda
// - condtionally render the details when clicked - (done)
// - click on item - (done)
// - item should show details of the contact (done)


const ListOfContacts = ({contacts,}) => {

    const [isDetails, setIsDetail] = useState(false);
    const [contact, setContact] = useState({});

    const readDetails = (e, contact) => {
       
        setIsDetail(true);
        setContact(contact);
    }

    const goBackToListOfContacts = ()=>{
        
        setIsDetail(false);
    }


    // function handleClick(e){
    //     e.preventDefault();

    //     // console.log("clicked!!");

    //     props.onDelete(props.id);

    // }

    // function handleEdit(e){
    //     e.preventDefault();

    //     console.log("Edit me!")
    // }

    

    return(
        <>
        {/* use the ternary operator to conditionally render the details of the contacts when clicked on */}
            {isDetails ? (
                <ReadContactDetails
                    goBackToListOfContacts={goBackToListOfContacts}
                    contact={contact}
                />
            ): (
                <div>
                 
                    <h2>List of Contacts</h2>
                    {contacts.map(({id, name, email}, index, arr)=>(

                        <div key={id}>
                            <p>{name}</p>
                            <button style={{cursor: "pointer"}} onClick={(e) => readDetails(e, arr[index])}>
                                view details
                            </button>
                            <button >delete</button>
                            <button >Edit</button>
                        </div>
                    ))}
                
                </div>
            )}
        
        </>
    );
};
 
export default ListOfContacts;
