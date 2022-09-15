import {React,useState} from "react";


//click create. 
// add new contact to set of contacts
// show contacts on the DOM

export default function CreateContact({
    //pass these are props

    contact,

    onAddFormSubmit,

    onAddInputChange,


}){

    // const initialFormState = {
    //     name: " ",
    //     phone: " ",
    //     email: " ",
    // }

    // const [contact, setContacts] = useState(initialFormState);

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
    // const submitContact =(event) => {
    //     event.preventDefault();
        
    //     saveContact(contact); //send to app.js 

    //     setContacts(initialFormState); //this clears the input form
    
    // }

    
    const {name, phone, email} = contact; //destructure contact to practice DRY

    return(
        <div>
            <h3>Create Contact</h3>
            <form action="">
                <input 
                    type="text" 
                    onChange={onAddInputChange} 
                    value={name} 
                    name="name"  
                    placeholder="name"
                />
                <input
                    type="tel" 
                    onChange={onAddInputChange} 
                    value={phone} 
                    name="phone" 
                    placeholder="phone"/>

                <input 
                    type="text"
                    onChange={onAddInputChange} 
                    value={email} 
                    name="email" 
                    placeholder="email"
                 /> 

                <button onClick={onAddFormSubmit}>Create</button> 
            </form>  
        </div>)

}
