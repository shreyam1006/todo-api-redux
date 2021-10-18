import React, { useEffect } from 'react'
import { AppBar, Toolbar, FormControl, InputLabel, Select, MenuItem, Button, Typography, Grid, styled, Box, List, ListItem, ListItemText, Checkbox, IconButton } from "@material-ui/core"
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useCallback } from 'react'
import { addItemRequest, getAllItemsRequest } from '../redux/actions/todoAction'
import { logoutUserRequest } from '../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import CircularProgress from '@mui/material/CircularProgress'
import TextFieldComponent from './shared/TextFieldComponent'
import { storeAddItem } from '../redux/actions/todoAction'
import { DeleteOutlined, EditOutlined } from '@mui/icons-material'

const StyledToolbar = styled(Toolbar)({
    justifyContent: 'space-between',
    display: 'flex'
})

const StyledGrid = styled(Grid)({
    backgroundColor: "#303030",
    display: 'flex',
    minHeight: '100vh',
    marginTop: '5vh',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
})

const StyledButtonLoader = styled(Box)({
    display: (props) => (props.isloading === 'true' ? 'flex' : 'none')
})

const StyledButtonText = styled(Box)({
    display: (props) => (props.isloading === 'true' ? 'none' : 'flex')
})

const StyledListItem = styled(ListItem)({
    minWidth: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex'
})


const Todo = () => {
    const history = useHistory();
    const newItem = useSelector((state) => state.todoReducer.addItem.newItem)
    const isLoading = useSelector((state) => state.authReducer.loading)
    const isItemLoading = useSelector((state) => state.todoReducer.addItem.loading)
    const isAllItemLoading = useSelector((state) => state.todoReducer.taskList.loading)
    const taskList = useSelector((state) => state.todoReducer.taskList.list)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllItemsRequest())
    }, [dispatch])
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

    return (
        <StyledGrid>
            {isLoading ? <CircularProgress size='150px' /> :
                <Grid align='center' style={{ minWidth: '50%' }}>
                    <header >
                        <AppBar>{displayDesktop()}</AppBar>
                    </header>
                    <Grid style={{ minWidth: '100%' }}>



                        <Grid>

                            {isAllItemLoading ? <CircularProgress size='100px' /> :

                                <Grid>
                                    <TextFieldComponent
                                        type="text"
                                        label="Add Item"
                                        onChange={storeAddItem}
                                    />

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
                                    <List>
                                        {taskList.map((item) =>
                                            <StyledListItem
                                                key={item._id}
                                            >
                                                <Box display='flex'>
                                                    <Checkbox checked={item.completed ? true : false} />
                                                    <ListItemText>{item.description}</ListItemText>
                                                </Box>
                                                <Box>
                                                    <IconButton >
                                                        <EditOutlined />
                                                    </IconButton>
                                                    <IconButton>
                                                        <DeleteOutlined />
                                                    </IconButton>

                                                </Box>

                                            </StyledListItem>)}
                                    </List>
                                </Grid>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            }

        </StyledGrid>
    )
}

export default Todo
