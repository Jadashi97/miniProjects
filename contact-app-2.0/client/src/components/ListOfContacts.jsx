import React, { useContext, useEffect } from "react";
import ContactItem from "./ContactItem";
// import ReadContactDetails from "./ReadContactDetails";
import { GlobalContext } from "../context/GlobalState";



function ListOfContacts() {

    const {contacts, getContacts} = useContext(GlobalContext);

    // console.log(contacts);

    useEffect(()=>{
        getContacts();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // const [isDetails, setIsDetail] = useState(false);
    // const [contact, setContact] = useState([]);
    // const [contactItems, setContactItems] = useState([]);
    

    // const readDetails = (e, contact) => {
       
    //     setIsDetail(true);
    //     setContact(contact);
    // }

    // const goBackToListOfContacts = ()=>{
        
    //     setIsDetail(false);
    // }


    // handling the EditMode

    // const handleEditMode = (e, contact)=>{
    //     setIsEditing(true);

    //     prepopulateEditForm(contact);
    // }

    return(
        <>
            <h2>List of Contacts</h2>
                    {contacts.map((contact)=> (<ContactItem key={contact.id} contact={contact}/>))}

        {/* use the ternary operator to conditionally render the details of the contacts when clicked on
            {isDetails ? (
                <ReadContactDetails
                    goBackToListOfContacts={goBackToListOfContacts}
                    // contact={contact}
                    {...contact}
                />
            ): (
                <div>
                 
                    <h2>List of Contacts</h2>
                    {contacts.map(({id,name,email},index, arr)=>(

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
            )} */}
        
        </>
    );
};
 
export default ListOfContacts;
