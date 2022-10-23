import React,{useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

export default function ContactItem({contact}) {

    const {deleteContact} = useContext(GlobalContext);

    return (
       <ul>
            {contact.name}{" "} <br />
            {contact.phone}{" "}<br />
            {contact.email}{" "}<br /> 
            {/* {contact.name}{" "}<br />
            {/* <button onClick={(e) => onEditClick(contact)}>Edit</button> */}
            <button onClick={()=> deleteContact(contact._id)}>delete</button>
        </ul>
    );
}
