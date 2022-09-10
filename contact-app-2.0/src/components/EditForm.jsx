import {React, useState} from "react";


const  EditContact = ({initialEditContact, editContact}) => {

    const initialFormState = {
        name: " ",
        phone: " ",
        email: " ",
    };

    const [contact, setContacts] = useState(
        initialEditContact ||initialFormState
    );

    // handling when a change in a form
    function handleChange(event){
        const {name, value} = event.target; // this help to grab the value of the targeted name 

        setContacts((contact)=>{
            return{
                ...contact,
                [name]: value
            }
        })
    }

    // handling the form when it submits
    const submitContact =(event) => {
        event.preventDefault();
        
        editContact(contact); //send to app.js 

        setContacts(initialFormState); //this clears the input form
    
    }

    
    const {name, phone, email} = contact; //destructure contact to practice DRY

    return(
        <div>
            <h3>Edit Contact</h3>
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

                <button onClick={submitContact}>save changes</button> 
            </form>  
        </div>)

}
export default EditContact;