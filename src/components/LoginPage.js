import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { storeLoginEmail, storeLoginPassword, fetchUserRequest } from '../redux/actions/authAction'
import { BeatLoader } from 'react-spinners'

const LoginPage = () => {
    const history = useHistory()
    const isLoading = useSelector((state) => state.authReducer.loading)
    const dispatch = useDispatch()

    const signUpButton = () => {
        history.push('/register')
    }

    return (
        <div>
            <input type="email" placeholder="Email id" onChange={e => dispatch(storeLoginEmail(e.target.value))} />
            <br />
            <input type="password" placeholder="Password" onChange={e => dispatch(storeLoginPassword(e.target.value))} />
            <br />
            {isLoading ? <div>
                <div><BeatLoader loading /></div>
                <div>
                    <button type="submit" onClick={() => dispatch(fetchUserRequest())}>Login</button>
                </div>
            </div>
                : <div>
                    <button type="submit" onClick={() => dispatch(fetchUserRequest())}>Login</button>
                </div>}

            <br />
            <button type="submit" onClick={signUpButton}>SignUp</button>
        </div>
    )
}


export default LoginPage