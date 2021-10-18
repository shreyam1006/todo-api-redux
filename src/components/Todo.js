import React from 'react'
import { AppBar, Toolbar, FormControl, InputLabel, Select, MenuItem, Button, Typography, Grid } from "@material-ui/core"
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useCallback } from 'react'
import { addItemRequest, getAllItemsRequest } from '../redux/actions/todoAction'
import { logoutUserRequest } from '../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import CircularProgress from '@mui/material/CircularProgress'
import TextFieldComponent from './shared/TextFieldComponent'
import { storeAddItem } from '../redux/actions/todoAction'

const Todo = () => {
    const history = useHistory();
    const newItem = useSelector((state) => state.todoReducer.newItem)
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
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
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
            </Toolbar>

        </>)
    }

    const pageStyle = {
        backgroundColor: "#303030",
        display: 'flex',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }

    return (
        <Grid align="center" style={pageStyle}>
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
                            <div style={isItemLoading ? { display: 'flex' } : { display: 'none' }}>
                                <CircularProgress size='23px' />
                            </div>
                            <div style={isItemLoading ? { display: 'none' } : { display: 'flex' }}>
                                Add
                            </div>
                        </Button>
                        <button onClick={() => dispatch(getAllItemsRequest())}>Get All</button>
                    </div>
                </div>
            }

            {/* } */}

        </Grid>
    )
}

export default Todo
