export const fetchUserData = (email, password) => {

  return async function (dispatch, getState) {
    const response = await fetch('https://api-nodejs-todolist.herokuapp.com/user/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(res => { return res.json() })
      .catch(err => { console.log('Error', err) })

    if (typeof response === 'string') {
      dispatch({ type: 'FETCH_USER_DATA_REJECT', payload: response })
    } else {
      dispatch({ type: 'FETCH_USER_DATA_RESPONSE', payload: response })
    }
  }
}

export const fetchRegisterData = (name, email, password, age) => {

  return async function (dispatch, getState) {
    const response = await fetch('https://api-nodejs-todolist.herokuapp.com/user/register', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password,
        age
      })
    }).then(res => { return res.json() })
      .catch(err => { console.log('Error', err) })

    if (typeof response === 'string') {
      dispatch({ type: 'FETCH_REGISTER_DATA_REJECT', payload: response })
    } else {
      dispatch({ type: 'FETCH_REGISTER_DATA_RESPONSE', payload: response })
    }

  }
}
