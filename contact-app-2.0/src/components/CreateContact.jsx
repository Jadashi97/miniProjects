import React from "react";
import { useState } from "react";


function  CreateContact(props){

    const [contact, setContacts] = useState({
        name: " ",
        phone: " ",
        email: " ",
    })

    // handling when a change in a form
    function handleChange(event){
        const {name, value} = event.target; // this help to grab the value of the targeted name 

        setContacts((prevContacts)=>{
            return{
                ...prevContacts,
                [name]: value
            }
        })
    }

    // handling the form when it submits
    const submitContact =(event) => {
        event.preventDefault();
        
        props.onAdd(contact);
    
    }

    
    const {name, phone, email} = contact; //destructure contact to practice DRY

    return(
        <div>
            <h3>Create Contact</h3>
            <form action="">
                <input 
                    type="text" 
                    onChange={handleChange} 
                    value={name} 
                    name="name"  
                    placeholder="name"
                />
                <input
                    type="tel" 
                    onChange={handleChange} 
                    value={phone} 
                    name="phone" 
                    placeholder="phone"/>

                <input 
                    type="text"
                    onChange={handleChange} 
                    value={email} 
                    name="email" 
                    placeholder="email"
                 /> 

                <button onClick={submitContact}>Create</button> 
            </form>  
        </div>)

}
export default CreateContact;
