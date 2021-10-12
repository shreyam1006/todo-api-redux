import * as ApiService from '../../../src/services/apiService';

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
            dispatch({ type: 'FETCH_USER_DATA_FAILURE', payload: e })
        }

    }
}