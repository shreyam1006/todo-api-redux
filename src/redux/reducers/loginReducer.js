const loginReducer = (state = [], action) => {

    switch (action.type) {
        case "FETCH_USER_DATA_REJECT":
            localStorage.setItem('auth-token', '')
            alert("Email id or password incorrect")
            return [...state, action.payload]
        case "FETCH_USER_DATA_RESPONSE":
            localStorage.setItem('auth-token', JSON.stringify(action.payload.token))
            alert("Success!")
            return [...state, action.payload]
        case "FETCH_REGISTER_DATA_RESPONSE":
            localStorage.setItem('auth-token', JSON.stringify(action.payload.token))
            alert("Success!")
            return [...state, action.payload]
        case "FETCH_REGISTER_DATA_REJECT":
            localStorage.setItem('auth-token', '')
            alert("This account already exists")
            return [...state, action.payload]
        default: return state
    }
}

export default loginReducer