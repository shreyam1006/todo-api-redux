import React, { useState } from 'react'
import { fetchRegisterRequest } from '../redux/actions/index'
import { useDispatch } from 'react-redux';

const RegisterPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState()
    const dispatch = useDispatch()

    const signUpButton = async () => {
        dispatch(fetchRegisterRequest(name, email, password, age))
    }

    return (
        <div>
            <input type="name" placeholder="Name" onChange={e => setName(e.target.value)}></input>
            <input type="email" placeholder="Email id" onChange={e => setEmail(e.target.value)}></input>
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
            <input type="number" placeholder="Age" onChange={e => setAge(e.target.value)}></input>
            <button type="submit" onClick={signUpButton}>SignUp</button>
        </div>
    )
}

export default RegisterPage