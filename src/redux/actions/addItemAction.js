import * as ApiService from '../../../src/services/apiService';


export const addItemRequest = (description) => {

    return async function (dispatch, getState) {
        dispatch({ type: 'ADD_ITEM_REQUEST' })

        try {
            const APIObj = {
                endPoint: '/task',
                authenticationRequired: true,
                method: "POST",
                body: { description }
            }

            const response = await ApiService.callApi(APIObj)

            if (!response.responseStatus === 201) {
                dispatch({ type: 'ADD_ITEM_FAILURE' })
            } else {
                dispatch({ type: 'ADD_ITEM_SUCCESS' })
            }
        } catch (e) {
            dispatch({ type: 'ADD_ITEM_FAILURE' })
        }
    }
}
