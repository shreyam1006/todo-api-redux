import { fetchItems } from "../../services/fetch"
export const fetchUserRequest = (email, password) => {

  return async function (dispatch, getState) {
    dispatch({ type: 'FETCH_USER_DATA_REQUEST' })

    try {

      const response = await fetchItems(
        '/user/login',
        "POST",
        { 'Content-Type': 'application/json' },
        { email, password }
      )

      if (!response.ok) {
        dispatch({ type: 'FETCH_USER_DATA_FAILURE' })
      } else {
        const data = await response.json()
        console.log(data)
        dispatch({ type: 'FETCH_USER_DATA_SUCCESS', payload: data })
      }
    }
    catch (e) {
      dispatch({ type: 'FETCH_USER_DATA_FAILURE', payload: e })
    }

  }
}

export const fetchRegisterRequest = (name, email, password, age) => {

  return async function (dispatch, getState) {
    dispatch({ type: 'FETCH_REGISTER_REQUEST' })

    try {
      const response = await fetchItems(
        '/user/register',
        "POST",
        { 'Content-Type': 'application/json' },
        { name, email, password, age }
      )

      if (!response.ok) {
        dispatch({ type: 'FETCH_REGISTER_DATA_FAILURE' })
      } else {
        const data = await response.json()
        dispatch({ type: 'FETCH_REGISTER_DATA_SUCCESS', payload: data })
      }
    }
    catch (e) {
      dispatch({ type: 'FETCH_REGISTER_DATA_FAILURE', payload: e })
    }

  }
}

export const logoutUserRequest = () => {

  return async function (dispatch, getState) {
    dispatch({ type: 'FETCH_LOGOUT_REQUEST' })
    try {

      const response = await fetchItems(
        '/user/logout',
        "POST"
      )

      if (!response.ok) {
        dispatch({ type: 'LOGOUT_FAILURE' })
      } else {
        dispatch({ type: 'LOGOUT_SUCCESS' })
      }
    }
    catch (e) {
      dispatch({ type: 'LOGOUT_FAILURE', payload: e })
    }
  }
}
