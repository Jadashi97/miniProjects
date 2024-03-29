function AppReducer(state, action){
    switch (action.type) {
        case "GET_CONTACTS":
            return{
                ...state,
                loading: false,
                contacts: action.payload
            }
        case "DELETE_CONTACT":
            return{
                ...state,
                contacts: state.contacts.filter(contact => contact._id !== action.payload)
            }
        case "ADD_CONTACT":
            return{
                ...state,
                contacts: [...state.contacts, action.payload]

            }
        case "CONTACT_ERROR":
            return{
                ...state,
                error: action.payload
            }
    
        default:
            return state;
    }
}

export default AppReducer;