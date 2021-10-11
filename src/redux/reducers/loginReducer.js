const loginReducer = (state = [], action) => {

    switch (action.type) {
        case "FETCH_USER_DATA_FAILURE":
            alert("Email id or password incorrect")
            return [...state]
        case "FETCH_USER_DATA_SUCCESS":
            return [...state]
        case "FETCH_REGISTER_DATA_SUCCESS":
            return [...state]
        case "FETCH_REGISTER_DATA_FAILURE":
            alert("Account already exists")
            return [...state]
        case "LOGOUT_SUCCESS":
            return [...state]
        case "LOGOUT_FAILURE":
            alert("Login again")
            return [...state]
        default: return state
    }
}

export default loginReducer