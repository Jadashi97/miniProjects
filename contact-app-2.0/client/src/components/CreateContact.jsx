import {React,useState,useContext} from "react";
import { GlobalContext } from "../context/GlobalState";


//click create. 
// add new contact to set of contacts
// show contacts on the DOM

export default function CreateContact(){

    // const initialFormState = {
    //     id: "",
    //     name: " ",
    //     phone: " ",
    //     email: " ",
    // }

    const {addContact} = useContext(GlobalContext);

    const [contact, setContact] = useState('');
    
    const {id, name, phone, email} = contact; //destructure contact to practice DRY

    // handling when a change in a form
    function handleChange(event){
        const {name, value} = event.target; // this help to grab the value of the targeted name 

        setContact((contact)=>{
            return{
                ...contact,
                [name]: value
            }
        })

    
    }

    // handling the form when it submits
    const submitContact =(event) => {
        event.preventDefault();

        // saveContact(contact); //send to app.js 
        const newContact = {
            id: Math.floor(Math.random() * 100000000),
            text: name,
            phone: phone,
            email: email


        }

        addContact(newContact);

        // setContacts(initialFormState); //this clears the input form
    
    }

    

    return(
        <div key={id}>
            <h3>Create Contact</h3>
            <form onSubmit={submitContact}>
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
                    type="email"
                    onChange={handleChange}
                    value={email} 
                    name="email" 
                    placeholder="email"
                 /> 

                <button type="submit">Create</button> 
            </form>  
        </div>)

}
