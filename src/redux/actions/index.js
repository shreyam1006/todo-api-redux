import * as ApiService from '../../../src/services/apiService';

export const fetchUserRequest = (email, password) => {

  return async function (dispatch, getState) {
    dispatch({ type: 'FETCH_USER_DATA_REQUEST' })

    try {

      const APIObj = {
        endPoint: '/user/login',
        authenticationRequired: false,
        method: 'POST',
        body: { email, password }
      };

      const response = await ApiService.callApi(APIObj);

      if (!response.responseStatus === 200) {
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

export const fetchRegisterRequest = (name, email, password, age) => {

  return async function (dispatch, getState) {
    dispatch({ type: 'FETCH_REGISTER_DATA_REQUEST' })

    try {

      const APIObj = {
        endPoint: '/user/register',
        authenticationRequired: false,
        method: 'POST',
        body: { name, email, password, age }
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
