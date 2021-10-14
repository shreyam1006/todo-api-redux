import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { storeLoginEmail, storeLoginPassword, fetchUserRequest } from '../redux/actions/authAction'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import { Grid, Paper, Avatar, Typography, TextField, Button, Link } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useCallback } from 'react';

const LoginPage = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const isLoading = useSelector((state) => state.authReducer.loading)
    const email = useSelector((state) => state.authReducer.login.email)
    const password = useSelector((state) => state.authReducer.login.password)
    const [isEmailTouched, setIsEmailTouched] = useState(false)
    const [isPasswordTouched, setIsPasswordTouched] = useState(false)


    const signUpButton = () => {
        history.push('/register')
    }

    const gridStyle = {
        backgroundColor: '#303030'
    }

    const paperStyle = {
        padding: '10vh',
        height: '90vh',
        width: '400px',
        margin: '0px auto',
        backgroundColor: '#303030'
    }

    const avatarStyle = {
        backgroundColor: '#00b0ff'
    }

    const extraDiv = {
        display: 'flex',
        justifyContent: 'space-between'
    }

    const toastStyle = {
        backgroundColor: "rgb(203 89 95)",
        color: 'white'
    }

    let setDisable = true
    let setEmailError = false
    let setPasswordError = false
    var pattern = /\S+@\S+\.\S+/

    if (pattern.test(email) && (password.length > 7)) {
        setDisable = false
    }
    if (isLoading === true) {
        setDisable = true
    }
    if (!pattern.test(email) && isEmailTouched === true) {
        setEmailError = true
    }
    if ((password.length < 7) && isPasswordTouched === true) {
        setPasswordError = true
    }

    const loginButton = useCallback(() =>
        dispatch(fetchUserRequest(history)),
        [dispatch, history])

    return (
        <Grid style={gridStyle} >
            <Paper elevation={0} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <LockOutlinedIcon sx={{ color: 'black' }} />
                    </Avatar>
                    <br />
                    <Typography variant="h5">Log in</Typography>
                    <br />
                    <TextField
                        fullWidth
                        error={setEmailError}
                        required
                        autoComplete="none"
                        label="Email Address"
                        helperText={setEmailError ? 'Email is required' : ''}
                        variant="outlined"
                        type="email"
                        onBlur={() => setIsEmailTouched(true)}
                        onChange={e => dispatch(storeLoginEmail(e.target.value))}
                    />
                    <br />
                    <br />
                    <TextField
                        fullWidth
                        error={setPasswordError}
                        required
                        autoComplete="none"
                        label="Password"
                        helperText={setPasswordError ? 'Password is required' : ''}
                        variant="outlined"
                        type="password"
                        onBlur={() => { setIsPasswordTouched(true) }}
                        onChange={e => { dispatch(storeLoginPassword(e.target.value)) }} />
                    <br />
                    <br />
                    <Button
                        style={{ minWidth: '400px' }}
                        label="Login"
                        disabled={setDisable}
                        type="submit"
                        variant="contained"
                        autoComplete='none'
                        color='primary'
                        onClick={loginButton} >
                        <div style={isLoading ? { display: 'flex' } : { display: 'none' }}>
                            <CircularProgress size='23px' />
                        </div>
                        <div style={isLoading ? { display: 'none' } : { display: 'flex' }}>
                            sign in
                        </div>
                    </Button>

                    <br />
                    <br />
                    <div style={extraDiv}>
                        <Link href="#" underline="hover">
                            Forgot Password
                        </Link>
                        <Link href="#" underline="hover" onClick={signUpButton}>
                            Don't have an account? Sign Up
                        </Link>
                    </div>
                </Grid>
            </Paper>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                toastStyle={toastStyle}
                hideProgressBar={true}
            />
        </Grid>
    )
}


export default LoginPage