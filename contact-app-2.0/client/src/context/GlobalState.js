import React, {createContext, useReducer} from "react";
import AppReducer from "../context/AppReducer";
import axios from "axios";


// initial State

const initialState = {
    
    contacts: [],
    error: null,
    loading: true
}

// create context
export const GlobalContext = createContext(initialState);

// Perovider Component 
export const GlobalProvider = ({children}) => {
    const [state, dispatch] =useReducer(AppReducer, initialState);


    // Actions
    
    //use axios to fetch data from backend
    async function getContacts(){
        try {
            const res = await axios.get('/api/v1/contacts');

            // below will dispatch the getContacts from the AppReducer
            dispatch({
                type: "GET_CONTACTS",
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: "CONTACT_ERROR",
                payload: err.response.data.error
            });
            
        }
    } 

    return(<GlobalContext.Provider value={{
        contacts: state.contacts,
        error: state.error,
        loading: state.loading,
        getContacts
    }}
    
        
    >
        {children}
    </GlobalContext.Provider>)
}