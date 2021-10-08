import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { fetchUserData, loginUser } from '../redux/actions/index'
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const loginButton = async () => {
        dispatch(fetchUserData(email, password))
    }

    return (
        <div>
            <input type="email" placeholder="Email id" onChange={e => setEmail(e.target.value)}></input>
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
            <button type="submit" onClick={loginButton}>Login</button>
        </div>
    )
}

export default LoginPage