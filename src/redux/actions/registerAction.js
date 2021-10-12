import * as ApiService from '../../../src/services/apiService';

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
            dispatch({ type: 'FETCH_REGISTER_DATA_FAILURE', payload: e })
        }

    }
}
