import {React,useState,useContext} from "react";
import { GlobalContext } from "../context/GlobalState";


//click create. 
// add new contact to set of contacts
// show contacts on the DOM

export default function CreateContact(){

    const initialFormState = {
        id: "",
        name: " ",
        phone: " ",
        email: " ",
    }

    const {addContact} = useContext(GlobalContext);

    const [contact, setContacts] = useState(initialFormState);


    // handling when a change in a form
    // function handleChange(event){
    //     const {name, value} = event.target; // this help to grab the value of the targeted name 

    //     setContacts((contact)=>{
    //         return{
    //             ...contact,
    //             [name]: value
    //         }
    //     })

    
    // }

    // handling the form when it submits
    const submitContact =(event) => {
        event.preventDefault();

        // saveContact(contact); //send to app.js 
        const newContact = {
            id: "",
            name: " ",
            phone: " ",
            email: " ",
        }

        addContact(newContact);

        // setContacts(initialFormState); //this clears the input form
    
    }

    
    const {id, name, phone, email} = contact; //destructure contact to practice DRY

    return(
        <div key={id}>
            <h3>Create Contact</h3>
            <form onSubmit={submitContact}>
                <input
                    type="text" 
                    onChange={(e)=> setContacts(e.target.value)} 
                    value={name} 
                    name="name"  
                    placeholder="name"
                />
                <input
                    type="tel" 
                    onChange={(e)=> setContacts(e.target.value)}
                    value={phone} 
                    name="phone" 
                    placeholder="phone"/>

                <input 
                    type="email"
                    onChange={(e)=> setContacts(e.target.value)}
                    value={email} 
                    name="email" 
                    placeholder="email"
                 /> 

                <button type="submit">Create</button> 
            </form>  
        </div>)

}
