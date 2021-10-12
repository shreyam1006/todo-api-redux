const todoReducer = (state = [], action) => {

    switch (action.type) {
        case "ADD_ITEM_FAILURE":
            alert("Please Login Again")
            return []
        case "ADD_ITEM_SUCCESS":
            return [...state, action.payload]
        case "GET_ITEM_SUCCESS":
            return [...state, action.payload]
        case "GET_ITEM_FAILURE":
            alert("Account already exists")
            return []
        default: return state
    }
}

export default todoReducer