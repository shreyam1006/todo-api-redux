import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchUserRequest } from '../redux/actions/index'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const dispatch = useDispatch()

    const loginButton = async () => {
        dispatch(fetchUserRequest(email, password))
        // console.log(('auth-token' in localStorage))
        if ('auth-token' in localStorage) {
            history.push('/todo')
        }
    }

    const signUpButton = async () => {
        history.push('/register')
    }

    return (
        <div>
            <input type="email" placeholder="Email id" onChange={e => setEmail(e.target.value)}></input>
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
            <button type="submit" onClick={loginButton}>Login</button>
            <button type="submit" onClick={signUpButton}>SignUp</button>
        </div>
    )
}

export default LoginPage