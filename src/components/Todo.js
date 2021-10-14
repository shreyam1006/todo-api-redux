import React from 'react'
import { AppBar, Toolbar, FormControl, InputLabel, Select, MenuItem, Button, Typography, Grid } from "@material-ui/core"
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useState } from 'react'
import { addItemRequest, getAllItemsRequest } from '../redux/actions/todoAction'
import { logoutUserRequest } from '../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import CircularProgress from '@mui/material/CircularProgress'

const Todo = () => {
    const history = useHistory();
    const [newItem, setNewItem] = useState('')
    const taskList = useSelector((state) => state.todoReducer)
    const isLoading = useSelector((state) => state.authReducer.loading)

    const dispatch = useDispatch()

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
                        <input type="text"
                            placeholder="Add Item"
                            value={newItem}
                            onChange={e => { setNewItem(e.target.value) }}
                            onKeyDown={e => { if (e.key === "Enter") { return (dispatch(addItemRequest(newItem)), setNewItem('')) } }} />
                        <ul>
                            {taskList.map((item) => <li key={item._id}>{item.description}</li>)}
                        </ul>
                        <button onClick={() => dispatch(getAllItemsRequest())}>Get All</button>
                    </div>
                </div>
            }

            {/* } */}

        </Grid>
    )
}

export default Todo
