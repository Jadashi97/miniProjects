import React, { useState } from "react";
import ReadContactDetails from "./ReadContactDetails";



const ListOfContacts = ({contacts}) => {

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


    // //handle for the delete btn
    // function deleteContact(id){
    //     setContact(prevContacts => {
    //     return prevContacts.filter((contactItems, index) => {
    //         return index !== id;
    //     })
    // })
    // }


    // function handleClick(e){
    //     e.preventDefault();

    //     // console.log(deleteContact);
    //     // deleteContact(contact);
    //     // props.onDelete(props.id)

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
                            <button>delete</button>
                            <button >Edit</button>
                        </div>
                    ))}
                
                </div>
            )}
        
        </>
    );
};
 
export default ListOfContacts;
