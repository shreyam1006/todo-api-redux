import React from 'react'
import { useState } from 'react'
import { addItemRequest, getAllItemsRequest } from '../redux/actions/todoAction'
import { logoutUserRequest } from '../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import { BeatLoader } from 'react-spinners'

const Todo = () => {
    const [newItem, setNewItem] = useState('')
    const taskList = useSelector((state) => state.todoReducer)
    const isLoading = useSelector((state) => state.authReducer.loading)

    const dispatch = useDispatch()

    return (
        <div>
            {isLoading ? <BeatLoader loading /> : <div>
                <h1>Todos</h1>
                <input type="text"
                    placeholder="Add Item"
                    value={newItem}
                    onChange={e => { setNewItem(e.target.value) }}
                    onKeyDown={e => { if (e.key === "Enter") { return (dispatch(addItemRequest(newItem)), setNewItem('')) } }} />
                <ul>
                    {taskList.map((item) => <li key={item._id}>{item.description}</li>)}
                </ul>
                <button onClick={() => dispatch(getAllItemsRequest())}>Get All</button>
                <button onClick={() => dispatch(logoutUserRequest())}>Logout</button>
            </div>}

        </div>
    )
}

export default Todo
