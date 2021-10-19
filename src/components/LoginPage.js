import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { storeLoginEmail, storeLoginPassword, fetchUserRequest } from '../redux/actions/authAction'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Grid, Paper, Avatar, Typography, Link, styled, Box } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCallback } from 'react';
import TextFieldComponent from './shared/TextFieldComponent';
import ButtonComponent from './shared/ButtonComponent';

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

const toastStyle = {
    backgroundColor: "rgb(203 89 95)",
    color: 'white'
}

var pattern = /\S+@\S+\.\S+/


const LoginPage = () => {
    const history = useHistory()
    const isLoading = useSelector((state) => state.authReducer.loading)
    const email = useSelector((state) => state.authReducer.login.email)
    const password = useSelector((state) => state.authReducer.login.password)


    const signUpButton = useCallback(() => {
        history.push('/register')
    }, [history])

    return (
        <StyledGrid >
            <StyledPaper elevation={0} >
                <Grid align='center'>
                    <StyledAvatar>
                        <LockOutlinedIcon sx={{ color: 'black' }} />
                    </StyledAvatar>
                    <br />
                    <Typography variant="h5">Log in</Typography>
                    <br />

                    <TextFieldComponent
                        fullWidth
                        required
                        autoComplete="none"
                        label="Email Address"
                        helperText='Email is required'
                        variant="outlined"
                        type="email"
                        onChange={storeLoginEmail}
                        condition={!pattern.test(email)}
                    />
                    <br />
                    <br />
                    <TextFieldComponent
                        fullWidth
                        required
                        autoComplete="none"
                        label="Password"
                        helperText='Password is required'
                        variant="outlined"
                        type="password"
                        onChange={storeLoginPassword}
                        condition={password.length < 7} />
                    <br />
                    <br />

                    <ButtonComponent
                        style={{ minWidth: '400px' }}
                        isLoading={isLoading}
                        label="Login"
                        type="submit"
                        variant="contained"
                        autoComplete='none'
                        color='primary'
                        onClick={fetchUserRequest}
                        content="Sign in"
                        history={history}
                        disable={true}
                        loadingcondition={isLoading === true}
                        condition={pattern.test(email) && (password.length > 7)}
                    />

                    <br />
                    <br />
                    <Box display='flex' justifyContent="space-between">
                        <Link href="#" underline="hover">
                            Forgot Password
                        </Link>
                        <Link href="#" underline="hover" onClick={signUpButton}>
                            Don't have an account? Sign Up
                        </Link>
                    </Box>
                </Grid>
            </StyledPaper>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                toastStyle={toastStyle}
                hideProgressBar={true}
            />
        </StyledGrid>
    )
}


export default LoginPage