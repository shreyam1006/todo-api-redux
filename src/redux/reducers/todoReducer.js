const initialState = {
    addItem: {
        newItem: '',
        loading: false
    },

    taskList: {
        list: [],
        loading: false
    }

}

const todoReducer = (state = initialState, action) => {

    switch (action.type) {
        case "STORE_ADD_ITEM":
            return { ...state, addItem: { ...state.addItem, newItem: action.payload } }
        case "ADD_ITEM_REQUEST":
            return { ...state, addItem: { ...state.addItem, loading: true } }
        case "ADD_ITEM_FAILURE":
            alert("Please Login Again")
            return { ...state, addItem: { ...state.addItem, loading: false } }
        case "ADD_ITEM_SUCCESS":
            return { ...state, addItem: { ...state.addItem, loading: false } }

        case "GET_ALL_ITEM_REQUEST":
            return { ...state, taskList: { ...state.taskList, loading: true } }
        case "GET_ALL_ITEM_SUCCESS":
            return { ...state, taskList: { ...state.taskList, list: action.payload, loading: false } }
        case "GET_ALL_ITEM_FAILURE":
            alert("Account already exists")
            return { ...state, taskList: { ...state.taskList, loading: true } }
        default: return state
    }
}

export default todoReducer