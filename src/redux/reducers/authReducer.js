const initialState = {
    login: {
        email: '', password: ''
    },

    register: {
        email: '', password: '', name: '', age: 0
    },

    loading: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case "STORE_REGISTER_EMAIL":
            return { ...state, register: { ...state.register, email: action.payload } }
        case "STORE_REGISTER_PASSWORD":
            return { ...state, register: { ...state.register, password: action.payload } }
        case "STORE_REGISTER_NAME":
            return { ...state, register: { ...state.register, name: action.payload } }
        case "STORE_REGISTER_AGE":
            return { ...state, register: { ...state.register, age: action.payload } }
        case "STORE_LOGIN_EMAIL":
            return { ...state, login: { ...state.register, email: action.payload } }
        case "STORE_LOGIN_PASSWORD":
            return { ...state, login: { ...state.login, password: action.payload } }
        case "FETCH_USER_DATA_REQUEST":
            return { ...state, loading: true }
        case "FETCH_USER_DATA_FAILURE":
            return { ...state, loading: false }
        case "FETCH_USER_DATA_SUCCESS":
            return { ...state, loading: false }
        case "FETCH_REGISTER_DATA_REQUEST":
            return { ...state, loading: true }
        case "FETCH_REGISTER_DATA_SUCCESS":
            return { ...state, loading: false }
        case "FETCH_REGISTER_DATA_FAILURE":
            return { ...state, loading: false }
        case "LOGOUT_REQUEST":
            return { ...state, loading: true }
        case "LOGOUT_SUCCESS":
            return { ...state, loading: false }
        case "LOGOUT_FAILURE":
            return { ...state, loading: false }
        default: return state
    }
}

export default authReducer