import { storeRegisterAge, storeRegisterEmail, storeRegisterName, storeRegisterPassword } from '../redux/actions/index'
import { fetchRegisterRequest } from '../redux/actions/registerAction'
import { useDispatch, useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';

const RegisterPage = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector((state) => state.authReducer.loading)

    return (
        <div>
            <div>
                <input type="name" placeholder="Name" onChange={e => dispatch(storeRegisterName(e.target.value))}></input>
                <input type="email" placeholder="Email id" onChange={e => dispatch(storeRegisterEmail(e.target.value))}></input>
                <input type="password" placeholder="Password" onChange={e => dispatch(storeRegisterPassword(e.target.value))}></input>
                <input type="number" placeholder="Age" onChange={e => dispatch(storeRegisterAge(e.target.value))}></input>
                {isLoading ?
                    <div>
                        <BeatLoader loading />
                        <button type="submit" onClick={() => dispatch(fetchRegisterRequest())}>SignUp</button>
                    </div>
                    : <button type="submit" onClick={() => dispatch(fetchRegisterRequest())}>SignUp</button>
                }
            </div>

        </div>
    )
}

export default RegisterPage