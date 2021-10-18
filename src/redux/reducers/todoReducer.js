const initialState = {
    addItem: {
        newItem: '',
        loading: false
    },

    taskList: {
        list: [],
        loading: false
    },

    loadingTasks: []
}

const todoReducer = (state = initialState, action) => {

    switch (action.type) {
        case "STORE_ADD_ITEM":
            return { ...state, addItem: { ...state.addItem, newItem: action.payload } }
        case "ADD_ITEM_REQUEST":
            return { ...state, addItem: { ...state.addItem, loading: true } }
        case "ADD_ITEM_FAILURE":
            return { ...state, addItem: { ...state.addItem, loading: false } }
        case "ADD_ITEM_SUCCESS":
            return {
                ...state, addItem: { ...state.addItem, loading: false, newItem: '' },
                taskList: {
                    ...state.taskList,
                    list: [...state.taskList.list, action.payload]
                }
            }

        case "GET_ALL_ITEM_REQUEST":
            return { ...state, taskList: { ...state.taskList, loading: true } }
        case "GET_ALL_ITEM_SUCCESS":
            return { ...state, taskList: { ...state.taskList, list: action.payload, loading: false } }
        case "GET_ALL_ITEM_FAILURE":
            return { ...state, taskList: { ...state.taskList, loading: true } }

        case "CHECK_REQUEST":
            return { ...state, loadingTasks: [...state.loadingTasks, action.payload.id] }
        case "CHECK_SUCCESS":
            return {
                ...state, taskList: {
                    ...state.taskList, list: state.taskList.list.map((task) => {
                        if (task._id === action.payload.id) {
                            task.completed = !task.completed
                        }
                        return task
                    })
                }, loadingTasks: []
            }
        case "CHECK_FAILURE":
            return { ...state, loadingTasks: [] }


        case "DELETE_REQUEST":
            return state
        case "DELETE_SUCCESS":
            return {
                ...state, taskList: {
                    ...state.taskList, list: state.taskList.list.filter((task) =>
                        task._id !== action.payload.id
                    )
                }
            }
        case "DELETE_FAILURE":
            return state
        default: return state
    }
}

export default todoReducer