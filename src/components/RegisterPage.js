import React, { useState } from 'react'
import { fetchRegisterRequest } from '../redux/actions/index'
import { useDispatch, useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';

const RegisterPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState()
    const dispatch = useDispatch()
    const isLoading = useSelector((state) => state.loginReducer)

    const signUpButton = async () => {
        dispatch(fetchRegisterRequest(name, email, password, age))
    }

    return (
        <div>
            {isLoading.loading ? <BeatLoader loading /> : <div>
                <input type="name" placeholder="Name" onChange={e => setName(e.target.value)}></input>
                <input type="email" placeholder="Email id" onChange={e => setEmail(e.target.value)}></input>
                <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
                <input type="number" placeholder="Age" onChange={e => setAge(e.target.value)}></input>
                <button type="submit" onClick={signUpButton}>SignUp</button>
            </div>}

        </div>
    )
}

export default RegisterPage