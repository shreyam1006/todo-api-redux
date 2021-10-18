import { storeRegisterAge, storeRegisterEmail, storeRegisterName, storeRegisterPassword, fetchRegisterRequest } from '../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Paper, Avatar, Typography, Button, Link, styled, Box } from '@material-ui/core';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import { useHistory } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCallback } from 'react';
import TextFieldComponent from './shared/TextFieldComponent';


const StyledGrid = styled(Grid)({
    backgroundColor: 'rgb(48, 48, 48)'
})

const StyledAvatar = styled(Avatar)({
    backgroundColor: '#00b0ff'
})

const StyledPaper = styled(Paper)({
    padding: '10vh',
    height: '90vh',
    width: '400px',
    margin: '0px auto',
    background: 'rgb(48, 48, 48)'
})

const StyledButtonLoader = styled(Box)({
    display: (props) => (props.isloading === 'true' ? 'flex' : 'none')
})

const StyledButtonText = styled(Box)({
    display: (props) => (props.isloading === 'true' ? 'none' : 'flex')
})

const toastStyle = {
    backgroundColor: "rgb(203 89 95)",
    color: 'white'
}
const pattern = /\S+@\S+\.\S+/

const RegisterPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const isLoading = useSelector((state) => state.authReducer.loading)
    const email = useSelector((state) => state.authReducer.register.email)
    const password = useSelector((state) => state.authReducer.register.password)
    const name = useSelector((state) => state.authReducer.register.name)
    const age = useSelector((state) => state.authReducer.register.age)

    let setDisable = true

    if (pattern.test(email) && (password.length > 7) && (age.length > 0) && (name.length > 0)) {
        setDisable = false
    }
    if (isLoading === true) {
        setDisable = true
    }

    const signInButton = useCallback(() => {
        history.push('/')
    }, [history])

    const signUpButton = useCallback(() =>
        dispatch(fetchRegisterRequest(history)),
        [dispatch, history])


    return (
        <div>
            <StyledGrid >
                <StyledPaper elevation={0} >
                    <Grid align='center'>
                        <StyledAvatar>
                            <LockOutlinedIcon sx={{ color: 'black' }} />
                        </StyledAvatar>
                        <br />
                        <Typography variant="h5">Sign up</Typography>
                        <br />
                        <Box display='flex'>

                            <TextFieldComponent
                                fullWidth={false}
                                required={true}
                                autoComplete="none"
                                label="Name"
                                helperText='Name is required'
                                variant="outlined"
                                type="name"
                                onChange={storeRegisterName}
                                condition={name.length < 1}
                            />
                            &ensp;
                            &ensp;
                            <TextFieldComponent
                                fullWidth={false}
                                required={true}
                                autoComplete="none"
                                label="Age"
                                helperText='Age is required'
                                variant="outlined"
                                type="number"
                                onChange={storeRegisterAge}
                                condition={age < 13}
                            />
                        </Box>
                        <br />
                        <TextFieldComponent
                            fullWidth={true}
                            required={true}
                            autoComplete="none"
                            label="Email Address"
                            helperText='Email is required'
                            variant="outlined"
                            type="email"
                            onChange={storeRegisterEmail}
                            condition={!pattern.test(email)}
                        />
                        <br />
                        <br />
                        <TextFieldComponent
                            fullWidth={true}
                            required={true}
                            autoComplete="none"
                            label="Password"
                            helperText='Password is required'
                            variant="outlined"
                            type="password"
                            onChange={storeRegisterPassword}
                            condition={password.length < 7}
                        />
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
                            <StyledButtonLoader isloading={isLoading.toString()}>
                                <CircularProgress size='23px' />
                            </StyledButtonLoader>
                            <StyledButtonText isloading={isLoading.toString()}>
                                Sign up
                            </StyledButtonText>
                        </Button>
                        <br />
                        <br />

                        <Link href="#" underline="hover" onClick={signInButton}>
                            Already have an account? Sign In
                        </Link>
                    </Grid>
                </StyledPaper>
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    toastStyle={toastStyle}
                    hideProgressBar={true}
                />
            </StyledGrid>

        </div>
    )
}

export default RegisterPage