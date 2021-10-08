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

    dispatch({ type: 'FETCH_USER_DATA', payload: response })
  }
}
