const loginReducer = (state = [], action) => {

    switch (action.type) {
        case "FETCH_USER_DATA":
            if (action.payload === "Unable to login") {
                alert("Email id or password incorrect")
            } else {
                localStorage.setItem('auth-token', JSON.stringify(action.payload.token))
                alert("Success!")
            }
            return [...state, action.payload]
        default: return state
    }
}

export default loginReducer