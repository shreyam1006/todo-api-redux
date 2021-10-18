import React from 'react'
import { AppBar, Toolbar, FormControl, InputLabel, Select, MenuItem, Button, Typography, Grid, styled, Box } from "@material-ui/core"
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useCallback } from 'react'
import { addItemRequest, getAllItemsRequest } from '../redux/actions/todoAction'
import { logoutUserRequest } from '../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import CircularProgress from '@mui/material/CircularProgress'
import TextFieldComponent from './shared/TextFieldComponent'
import { storeAddItem } from '../redux/actions/todoAction'

const StyledToolbar = styled(Toolbar)({
    justifyContent: 'space-between',
    display: 'flex'
})

const StyledButtonLoader = styled(Box)({
    display: (props) => (props.isloading === 'true' ? 'flex' : 'none')
})

const StyledButtonText = styled(Box)({
    display: (props) => (props.isloading === 'true' ? 'none' : 'flex')
})


const Todo = () => {
    const history = useHistory();
    const newItem = useSelector((state) => state.todoReducer.addItem.newItem)
    const isLoading = useSelector((state) => state.authReducer.loading)
    const isItemLoading = useSelector((state) => state.todoReducer.loading)

    const dispatch = useDispatch()
    let setDisable = false
    const addButton = useCallback(() =>
        dispatch(addItemRequest()),
        [dispatch])

    if (!newItem) {
        setDisable = true
    }

    const displayDesktop = () => {
        return (<>
            <StyledToolbar>
                <Typography variant='h6'>Todo App</Typography>
                <FormControl >
                    <InputLabel id="demo-simple-select-label"><AccountCircleIcon /></InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                    >
                        <MenuItem><Button variant="text">Profile</Button></MenuItem>
                        <MenuItem><Button variant="text" onClick={() => dispatch(logoutUserRequest(history))}>Logout</Button></MenuItem>
                    </Select>
                </FormControl>
            </StyledToolbar>

        </>)
    }

    const StyledGrid = styled(Grid)({
        backgroundColor: "#303030",
        display: 'flex',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    })

    return (
        <StyledGrid>
            {isLoading ? <CircularProgress size='150px' /> :
                <div>
                    <header >
                        <AppBar>{displayDesktop()}</AppBar>
                    </header>
                    <div>

                        <TextFieldComponent type="text"
                            label="Add Item"
                            onChange={storeAddItem}
                        />
                        {/* <ul>
                            {taskList.map((item) => <li key={item._id}>{item.description}</li>)}
                        </ul> */}
                        &ensp;
                        &ensp;
                        <Button
                            style={{ minHeight: '50px' }}
                            label="Add Item"
                            disabled={setDisable}
                            type="submit"
                            variant="contained"
                            autoComplete='none'
                            color='primary'
                            onClick={addButton} >

                            <StyledButtonLoader isloading={isItemLoading.toString()}>
                                <CircularProgress size='23px' />
                            </StyledButtonLoader>

                            <StyledButtonText isloading={isItemLoading.toString()}>
                                Add
                            </StyledButtonText>

                        </Button>
                        <button onClick={() => dispatch(getAllItemsRequest())}>Get All</button>
                    </div>
                </div>
            }

        </StyledGrid>
    )
}

export default Todo
