import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchUserRequest } from '../redux/actions/index'
import { BeatLoader } from 'react-spinners'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const isLoading = useSelector((state) => state.loginReducer)
    const dispatch = useDispatch()

    const signUpButton = async () => {
        history.push('/register')
    }

    return (
        <div>
            {isLoading.loading ? <div><BeatLoader loading /></div> : <div>
                <input type="email" placeholder="Email id" onChange={e => setEmail(e.target.value)}></input>
                <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
                <button type="submit" onClick={() => dispatch(fetchUserRequest(email, password))}>Login</button>
                <button type="submit" onClick={signUpButton}>SignUp</button>
            </div>}

        </div>
    )
}

export default LoginPage