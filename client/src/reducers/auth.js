const authReducer = (state = {authData: null}, action) => {
    switch (action.type) {
        case "LOGOUT":
            localStorage.clear();
            return state;
            break;
    
        default:
            return state
    }
}

export default authReducer;