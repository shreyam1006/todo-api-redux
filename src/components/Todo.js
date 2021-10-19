import React, { useEffect } from 'react'
import { AppBar, Toolbar, FormControl, InputLabel, Select, MenuItem, Typography, Grid, styled, List, ListItem } from "@material-ui/core"
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { addItemRequest, getAllItemsRequest } from '../redux/actions/todoAction'
import { logoutUserRequest } from '../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import CircularProgress from '@mui/material/CircularProgress'
import TextFieldComponent from './shared/TextFieldComponent'
import { storeAddItem } from '../redux/actions/todoAction'
import ListItemComponent from './shared/ListItemComponent'
import ButtonComponent from './shared/ButtonComponent'

const StyledToolbar = styled(Toolbar)({
    justifyContent: 'space-between',
    display: 'flex'
})

const StyledGrid = styled(Grid)({
    backgroundColor: "#303030",
    display: 'flex',
    minHeight: '100vh',
    marginTop: '10vh',
    justifyContent: 'center',
    alignItems: 'center'
})

const StyledContainerGrid = styled(Grid)({
    minWidth: '50%'
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
    const isAllItemLoading = useSelector((state) => state.todoReducer.taskList.loading)
    const isItemLoading = useSelector((state) => state.todoReducer.addItem.loading)
    const taskList = useSelector((state) => state.todoReducer.taskList.list)
    // const [count, setCount] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllItemsRequest())
    }, [dispatch])

    // const incrementCount = () => {
    //     setCount(count + 1)
    //     return count
    // }

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
                        <MenuItem>Profile</MenuItem>
                        <MenuItem onClick={() => dispatch(logoutUserRequest(history))}>Logout</MenuItem>
                    </Select>
                </FormControl>
            </StyledToolbar>

        </>)
    }

    return (
        <StyledGrid>
            {isLoading ? <CircularProgress size='150px' /> :
                <StyledContainerGrid align='center' >
                    <header >
                        <AppBar>{displayDesktop()}</AppBar>
                    </header>
                    <br />
                    <Grid>

                        {isAllItemLoading ? <CircularProgress size='100px' /> :

                            <Grid>
                                <TextFieldComponent
                                    type="text"
                                    label="Add Item"
                                    value={newItem}
                                    onChange={storeAddItem}
                                />

                                &ensp;
                                &ensp;
                                <ButtonComponent
                                    style={{ minHeight: '50px' }}
                                    isLoading={isItemLoading}
                                    label="Add Item"
                                    type="submit"
                                    variant="contained"
                                    autoComplete='none'
                                    color='primary'
                                    onClick={addItemRequest}
                                    content="Add"
                                    loadingcondition={isItemLoading === true}
                                    condition={newItem}
                                    disable={true}
                                />
                                <List>
                                    {taskList.map((item) =>
                                        <StyledListItem key={item._id}>
                                            <ListItemComponent item={item} />
                                        </StyledListItem>
                                    )}
                                </List>
                            </Grid>
                        }

                    </Grid>
                </StyledContainerGrid>
            }

        </StyledGrid >
    )
}

export default Todo
