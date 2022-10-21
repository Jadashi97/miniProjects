function AppReducer(state, action){
    switch (action.type) {
        case "GET_CONTACTS":
            return{
                ...state,
                loading: false,
                transactions: action.payload
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