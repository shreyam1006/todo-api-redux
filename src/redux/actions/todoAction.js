import * as ApiService from '../../services/apiService';

export const storeAddItem = (item) => {
    return {
        type: "STORE_ADD_ITEM",
        payload: item
    }
}


export const addItemRequest = () => {

    return async function (dispatch, getState) {
        dispatch({ type: 'ADD_ITEM_REQUEST' })
        const state = getState()

        try {
            const APIObj = {
                endPoint: '/task',
                authenticationRequired: true,
                method: "POST",
                body: { description: state.todoReducer.newItem }
            }

            const response = await ApiService.callApi(APIObj)

            if (response.responseStatus !== 201) {
                dispatch({ type: 'ADD_ITEM_FAILURE' })
            } else {
                dispatch({ type: 'ADD_ITEM_SUCCESS' })
            }
        } catch (e) {
            dispatch({ type: 'ADD_ITEM_FAILURE' })
        }
    }
}

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
