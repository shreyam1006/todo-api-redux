import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchUserData } from '../redux/actions/index'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const dispatch = useDispatch()

    const loginButton = async () => {
        dispatch(fetchUserData(email, password))
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