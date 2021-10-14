import { storeRegisterAge, storeRegisterEmail, storeRegisterName, storeRegisterPassword, fetchRegisterRequest } from '../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Paper, Avatar, Typography, TextField, Button, Link } from '@material-ui/core';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import { useHistory } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useCallback } from 'react';

const RegisterPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const isLoading = useSelector((state) => state.authReducer.loading)
    const email = useSelector((state) => state.authReducer.register.email)
    const password = useSelector((state) => state.authReducer.register.password)
    const name = useSelector((state) => state.authReducer.register.name)
    const age = useSelector((state) => state.authReducer.register.age)
    const [isEmailTouched, setIsEmailTouched] = useState(false)
    const [isPasswordTouched, setIsPasswordTouched] = useState(false)
    const [isNameTouched, setIsNameTouched] = useState(false)
    const [isAgeTouched, setIsAgeTouched] = useState(false)

    const gridStyle = {
        backgroundColor: '#303030'
    }

    const avatarStyle = {
        backgroundColor: '#00b0ff'
    }

    const paperStyle = {
        padding: '10vh',
        height: '90vh',
        width: '400px',
        margin: '0px auto',
        backgroundColor: '#303030'
    }

    const extraDiv = {
        display: 'flex'
    }

    const toastStyle = {
        backgroundColor: "rgb(203 89 95)",
        color: 'white'
    }
    var pattern = /\S+@\S+\.\S+/

    let setDisable = true
    let setEmailError = false
    let setPasswordError = false
    let setNameError = false
    let setAgeError = false

    if (pattern.test(email) && (password.length > 7) && (age.length > 0) && (name.length > 0)) {
        setDisable = false
    }
    if (isLoading === true) {
        setDisable = true
    }
    if (!pattern.test(email) && isEmailTouched === true) {
        setEmailError = true
    }
    if (password.length < 1 && isPasswordTouched === true) {
        setPasswordError = true
    }
    if (name.length < 1 && isNameTouched === true) {
        setNameError = true
    }
    if (age < 13 && isAgeTouched === true) {
        setAgeError = true
    }

    const signInButton = () => {
        history.push('/')
    }

    const signUpButton = useCallback(() =>
        dispatch(fetchRegisterRequest(history)),
        [dispatch, history])


    return (
        <div>
            <Grid style={gridStyle} >
                <Paper elevation={0} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                            <LockOutlinedIcon sx={{ color: 'black' }} />
                        </Avatar>
                        <br />
                        <Typography variant="h5">Sign up</Typography>
                        <br />
                        <div style={extraDiv}>
                            <TextField
                                required
                                error={setNameError}
                                autoComplete="none"
                                label="Name"
                                helperText={setNameError ? 'Name is required' : ''}
                                variant="outlined"
                                type="name"
                                onBlur={() => { setIsNameTouched(true) }}
                                onChange={e => dispatch(storeRegisterName(e.target.value))}
                            />
                            &ensp;
                            &ensp;
                            <TextField
                                required
                                error={setAgeError}
                                autoComplete="none"
                                label="Age"
                                helperText={setAgeError ? 'Age is required' : ''}
                                variant="outlined"
                                type="number"
                                onBlur={() => { setIsAgeTouched(true) }}
                                onChange={e => dispatch(storeRegisterAge(e.target.value))}
                            />
                        </div>
                        <br />
                        <TextField
                            fullWidth
                            required
                            error={setEmailError}
                            autoComplete="none"
                            label="Email Address"
                            helperText={setEmailError ? 'Enter valid email id' : ''}
                            variant="outlined"
                            type="email"
                            onBlur={() => { setIsEmailTouched(true) }}
                            onChange={e => dispatch(storeRegisterEmail(e.target.value))}
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
                            onChange={e => dispatch(storeRegisterPassword(e.target.value))} />
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
                            onClick={signUpButton} >
                            <div style={isLoading ? { display: 'flex' } : { display: 'none' }}>
                                <CircularProgress size='23px' />
                            </div>
                            <div style={isLoading ? { display: 'none' } : { display: 'flex' }}>
                                sign up
                            </div>
                        </Button>
                        <br />
                        <br />

                        <Link href="#" underline="hover" onClick={signInButton}>
                            Already have an account? Sign In
                        </Link>
                    </Grid>
                </Paper>
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    toastStyle={toastStyle}
                    hideProgressBar={true}
                />
            </Grid>

        </div>
    )
}

export default RegisterPage