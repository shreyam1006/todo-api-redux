import React from 'react'
import { useEffect } from 'react'
import { logoutUserRequest } from '../redux/actions/index'
import { useDispatch } from 'react-redux'

const Todo = () => {
    useEffect(() => {

    }, [])
    const dispatch = useDispatch()

    const logoutButton = async () => {
        dispatch(logoutUserRequest())
    }
    return (
        <div>
            <h1>Todos</h1>
            <ul>
            </ul>
            <button onClick={logoutButton}>Logout</button>
        </div>
    )
}

export default Todo
