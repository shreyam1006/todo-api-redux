const loginReducer = (state = [], action) => {

    switch (action.type) {
        case "FETCH_USER_DATA_FAILURE":
            localStorage.removeItem('auth-token')
            alert("Email id or password incorrect")
            return [...state]
        case "FETCH_USER_DATA_SUCCESS":
            localStorage.setItem('auth-token', JSON.stringify(action.payload.token))
            alert("Success!")
            return [...state, action.payload]
        case "FETCH_REGISTER_DATA_SUCCESS":
            localStorage.setItem('auth-token', JSON.stringify(action.payload.token))
            alert("Success!")
            return [...state, action.payload]
        case "FETCH_REGISTER_DATA_FAILURE":
            localStorage.removeItem('auth-token')
            alert("This account already exists")
            return [...state]
        case "LOGOUT_SUCCESS":
            localStorage.removeItem('auth-token')
            alert("Successful Logout")
            return [...state]
        case "LOGOUT_FAILURE":
            alert("Login Again, Already logged out")
            return [...state]
        default: return state
    }
}

export default loginReducer