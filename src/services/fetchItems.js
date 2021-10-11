export const fetchItems = (path, method, headers = { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('auth-token')) }, body = {}) => {
    const baseURL = 'https://api-nodejs-todolist.herokuapp.com'

    const fetchItems = fetch(baseURL + path, {
        method,
        headers,
        body: JSON.stringify(body)
    })

    return fetchItems
}

