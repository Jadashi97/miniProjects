import React, { useState } from "react";

const ListOfContacts = ({contacts})=>{
    
    const [contact, setContacts] = useState({});

    console.log(contacts);
    
    return(
        <div>
            {contacts.map(({id, name, email}, index)=>(
                <div>
                    <p>{id}</p>
                    <p>{name}</p>
                    <p>{email}</p>
                </div>
            ))}
        </div>
    )

}

export default ListOfContacts;