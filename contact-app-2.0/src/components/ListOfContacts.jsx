import React, { useState } from "react";
import ReadContactDetails from "./ReadContactDetails";

// agenda
// - condtionally render the details when clicked
// - click on item
// - item should show details of the contact


function ListOfContacts(props){

    const [isDetails, setIsDetail] = useState(false);
    const [contact, setContact] = useState({});

    const readDetails = (e, contact) => {
       
        setIsDetail(true);
        setContact(contact);
    }

    const goBackToListOfContacts = ()=>{
        
        setIsDetail(false);
    }


    function handleClick(e){
        e.preventDefault();

        // console.log("clicked!!");

        props.onDelete(props.id);

    }

    function handleEdit(e){
        e.preventDefault();

        console.log("Edit me!")
    }

    

    return(
        <>
            {isDetails ? (
                <ReadContactDetails
                    goBackToListOfContacts={goBackToListOfContacts}
                    contact={contact}
                />
            ): (
            
                 <div>
                    <form action="">
                        <p>{props.name}</p>
                        <p>{props.index}</p>
                        {/* <p>{props.id}</p>
                        <p>{props.phone}</p>
                        <p>{props.email}</p>{" "} */}
                        <button onClick={handleClick}>delete</button>
                        <button onClick={handleEdit}>Edit</button>
                    </form>
                </div>

            )}
        

        </>
    )
}
 
export default ListOfContacts;
