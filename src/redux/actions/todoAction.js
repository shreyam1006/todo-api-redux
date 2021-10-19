import * as ApiService from '../../services/apiService';

export const storeAddItem = (item) => {
    return {
        type: "STORE_ADD_ITEM",
        payload: item
    }
}

export const storeEditItem = (item) => {
    return {
        type: "STORE_EDIT_ITEM",
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
                body: { description: state.todoReducer.addItem.newItem }
            }

            const response = await ApiService.callApi(APIObj)

            if (response.responseStatus !== 201) {
                dispatch({ type: 'ADD_ITEM_FAILURE' })
            } else {
                dispatch({ type: 'ADD_ITEM_SUCCESS', payload: response.data })
            }
        } catch (e) {
            dispatch({ type: 'ADD_ITEM_FAILURE' })
        }
    }
}

export const getAllItemsRequest = () => {

    return async function (dispatch, getState) {
        dispatch({ type: 'GET_ALL_ITEM_REQUEST' })

        try {
            const APIObj = {
                endPoint: '/task',
                authenticationRequired: true,
                method: "GET"
            }

            const response = await ApiService.callApi(APIObj)

            if (response.responseStatus !== 200) {
                dispatch({ type: 'GET_ALL_ITEM_FAILURE' })
            } else {
                dispatch({ type: 'GET_ALL_ITEM_SUCCESS', payload: response.data })
            }
        } catch (e) {
            dispatch({ type: 'GET_ALL_ITEM_FAILURE' })
        }
    }
}

export const checkRequest = (id, completed) => {

    return async function (dispatch, getState) {
        dispatch({ type: 'CHECK_REQUEST', payload: { id } })

        try {
            const APIObj = {
                endPoint: '/task/' + id,
                authenticationRequired: true,
                method: "PUT",
                body: { completed }
            }

            const response = await ApiService.callApi(APIObj)

            if (response.responseStatus !== 200) {
                dispatch({ type: 'CHECK_FAILURE' })
            } else {
                dispatch({ type: 'CHECK_SUCCESS', payload: { id } })
            }
        } catch (e) {
            dispatch({ type: 'CHECK_FAILURE' })
        }
    }
}

export const deleteTaskRequest = (id) => {

    return async function (dispatch, getState) {
        dispatch({ type: 'DELETE_REQUEST' })
        dispatch({ type: 'DELETE_SUCCESS', payload: { id } })
    }
}

export const editTaskRequest = (id) => {

    return async function (dispatch, getState) {
        dispatch({ type: 'EDIT_REQUEST', payload: { id } })
        const state = getState()

        try {
            const APIObj = {
                endPoint: '/task/' + id,
                authenticationRequired: true,
                method: "PUT",
                body: { description: state.todoReducer.taskList.description }
            }

            const response = await ApiService.callApi(APIObj)

            if (response.responseStatus !== 200) {
                dispatch({ type: 'EDIT_FAILURE' })
            } else {
                dispatch({ type: 'EDIT_SUCCESS', payload: { id } })
            }
        } catch (e) {
            dispatch({ type: 'EDIT_FAILURE' })
        }
    }
}
