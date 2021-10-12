const initialState = { loading: false }

const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case "FETCH_USER_DATA_REQUEST":
            return { ...state, loading: true }
        case "FETCH_USER_DATA_FAILURE":
            alert("Email id or password incorrect")
            return {}
        case "FETCH_USER_DATA_SUCCESS":
            return { ...state, loading: false }
        case "FETCH_REGISTER_DATA_REQUEST":
            return { ...state, loading: true }
        case "FETCH_REGISTER_DATA_SUCCESS":
            return { ...state, loading: false }
        case "FETCH_REGISTER_DATA_FAILURE":
            alert("Account already exists")
            return {}
        case "LOGOUT_REQUEST":
            return { ...state, loading: true }
        case "LOGOUT_SUCCESS":
            return { ...state, loading: false }
        case "LOGOUT_FAILURE":
            alert("Login again")
            return {}
        default: return state
    }
}

export default loginReducer