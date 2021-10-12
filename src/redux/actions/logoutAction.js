import * as ApiService from '../../../src/services/apiService';

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
            dispatch({ type: 'LOGOUT_FAILURE', payload: e })
        }
    }
}
