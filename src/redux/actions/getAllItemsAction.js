import * as ApiService from '../../../src/services/apiService';

export const getAllItemsRequest = () => {

    return async function (dispatch, getState) {
        dispatch({ type: 'GET_ITEM_REQUEST' })

        try {
            const APIObj = {
                endPoint: '/task',
                authenticationRequired: true,
                method: "GET"
            }

            const response = await ApiService.callApi(APIObj)
            // console.log(response.data)

            if (!response.responseStatus === 200) {
                dispatch({ type: 'GET_ITEM_FAILURE' })
            } else {
                dispatch({ type: 'GET_ITEM_SUCCESS', payload: response.data })
            }
        } catch (e) {
            dispatch({ type: 'GET_ITEM_FAILURE' })
        }
    }
}
