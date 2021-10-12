import * as ApiService from '../../../src/services/apiService';

export const storeLoginEmail = (email) => {
    return {
        type: "STORE_LOGIN_EMAIL",
        payload: email
    }
}

export const storeLoginPassword = (password) => {
    return {
        type: "STORE_LOGIN_PASSWORD",
        payload: password
    }
}

export const storeRegisterEmail = (email) => {
    return {
        type: "STORE_REGISTER_EMAIL",
        payload: email
    }
}

export const storeRegisterPassword = (password) => {
    return {
        type: "STORE_REGISTER_PASSWORD",
        payload: password
    }
}

export const storeRegisterName = (name) => {
    return {
        type: "STORE_REGISTER_NAME",
        payload: name
    }
}

export const storeRegisterAge = (age) => {
    return {
        type: "STORE_REGISTER_AGE",
        payload: age
    }
}

export const fetchUserRequest = () => {

    return async function (dispatch, getState) {
        dispatch({ type: 'FETCH_USER_DATA_REQUEST' })
        const state = getState()
        console.log(state)
        try {

            const APIObj = {
                endPoint: '/user/login',
                authenticationRequired: false,
                method: 'POST',
                body: { email: state.authReducer.login.email, password: state.authReducer.login.password }
            };

            const response = await ApiService.callApi(APIObj);

            if (response.responseStatus !== 200) {
                localStorage.removeItem('auth-token')
                alert("Email id or password incorrect")
                dispatch({ type: 'FETCH_USER_DATA_FAILURE' })
            } else {
                localStorage.setItem('auth-token', JSON.stringify(response.token))
                alert("Success!")
                dispatch({ type: 'FETCH_USER_DATA_SUCCESS', payload: response })
            }
        }
        catch (e) {
            alert("Email id or password incorrect")
            dispatch({ type: 'FETCH_USER_DATA_FAILURE', payload: e })
        }

    }
}

export const logoutUserRequest = () => {

    return async function (dispatch, getState) {
        dispatch({ type: 'LOGOUT_REQUEST' })
        try {

            const APIObj = {
                endPoint: '/user/logout',
                authenticationRequired: true,
                method: "POST"
            };
            const response = await ApiService.callApi(APIObj);

            if (!response.responseStatus === 200) {
                alert("Logout Failed")
                dispatch({ type: 'LOGOUT_FAILURE' })
            } else {
                localStorage.removeItem('auth-token')
                alert("Successful Logout")
                dispatch({ type: 'LOGOUT_SUCCESS' })
            }
        }
        catch (e) {
            alert("Login again")
            dispatch({ type: 'LOGOUT_FAILURE', payload: e })
        }
    }
}
export const fetchRegisterRequest = () => {

    return async function (dispatch, getState) {
        dispatch({ type: 'FETCH_REGISTER_DATA_REQUEST' })
        const state = getState()
        try {

            const APIObj = {
                endPoint: '/user/register',
                authenticationRequired: false,
                method: 'POST',
                body: {
                    name: state.authReducer.register.name,
                    email: state.authReducer.register.email,
                    password: state.authReducer.register.password,
                    age: state.authReducer.register.age
                }
            };

            const response = await ApiService.callApi(APIObj);

            if (!response.responseStatus) {
                localStorage.removeItem('auth-token')
                alert("This account already exists")
                dispatch({ type: 'FETCH_REGISTER_DATA_FAILURE' })
            } else {
                localStorage.setItem('auth-token', JSON.stringify(response.token))
                alert("Success!")
                dispatch({ type: 'FETCH_REGISTER_DATA_SUCCESS', payload: response })
            }
        }
        catch (e) {
            alert("Account already exists")
            dispatch({ type: 'FETCH_REGISTER_DATA_FAILURE', payload: e })
        }

    }
}
