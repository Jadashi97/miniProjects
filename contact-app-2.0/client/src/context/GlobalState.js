import React, {createContext, useReducer} from "react";
import AppReducer from "../context/AppReducer";
import axios from "axios";

export const CONTACTS_URL = '/api/v1/contacts';

const initialState = {
    contacts: [],
    error: null,
    loading: true
}

export const GlobalContext = createContext(initialState);
 
export const GlobalProvider = ({children}) => {
    const [state, dispatch] =useReducer(AppReducer, initialState);

    async function getContacts(){
        try {
            const {data} = await axios.get(CONTACTS_URL);

            dispatch({
                type: "GET_CONTACTS",
                payload: data.data
            })
        } catch (err) {
            dispatch({
                type: "CONTACT_ERROR",
                payload: err.response.data.error
            });
            
        }
    }

    async function deleteContact(id){
        try {
            await axios.delete(`/api/v1/contacts/${id}`);

            dispatch({
                type: 'DELETE_CONTACT',
                payload: id
            });

        } catch (err) {
            dispatch({
                type: 'CONTACT_ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function addContact(contact){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/v1/contacts', contact, config);

            dispatch({
                type: 'ADD_CONTACT',
                payload: res.data.data
            });

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
        getContacts,
        deleteContact,
        addContact
    }}
    >
        {children}
    </GlobalContext.Provider>)
}