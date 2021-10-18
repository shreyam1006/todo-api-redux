const initialState = {
    addItem: {
        newItem: ''
    },

    loading: false

}

const todoReducer = (state = initialState, action) => {

    switch (action.type) {
        case "STORE_ADD_ITEM":
            return { ...state, addItem: { ...state.addItem, newItem: action.payload } }
        case "ADD_ITEM_REQUEST":
            return { ...state, loading: true }
        case "ADD_ITEM_FAILURE":
            alert("Please Login Again")
            return { ...state, loading: false }
        case "ADD_ITEM_SUCCESS":
            return { ...state, loading: false }
        case "GET_ITEM_SUCCESS":
            return state
        case "GET_ITEM_FAILURE":
            alert("Account already exists")
            return state
        default: return state
    }
}

export default todoReducer