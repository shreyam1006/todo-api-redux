import React, { useState, useCallback } from "react"
import { styled, Box, ListItemText, Checkbox, IconButton, Grid } from "@material-ui/core"
import { DeleteOutlined, EditOutlined } from '@mui/icons-material'
import { checkRequest, deleteTaskRequest, editTaskRequest, storeEditItem } from '../../redux/actions/todoAction'
import { useDispatch, useSelector } from "react-redux"
import CircularProgress from '@mui/material/CircularProgress'
import TextFieldComponent from "./TextFieldComponent"
import DoneIcon from '@mui/icons-material/Done';


const StyledLoader = styled(Box)({
    display: (props) => (props.isloading === 'true' ? 'flex' : 'none')
})

const StyledCheckbox = styled(Checkbox)({
    display: (props) => (props.isloading === 'true' ? 'none' : 'flex')
})

const StyledListItemText = styled(ListItemText)({
    color: (props) => (props.setcolor === 'setDescription' ? 'lightgray' : 'white')
})

const ListItemComponent = (props) => {

    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const loadingTasks = useSelector((state) => state.todoReducer.loadingTasks)
    // const editedTask = useSelector((state) => state.todoReducer.taskList.description)
    let isLoading = false

    if (loadingTasks.includes(props.item._id)) {
        isLoading = true
    }

    const onEditDone = useCallback(() => {
        setEdit(false)
        dispatch(editTaskRequest(props.item._id))
    }, [dispatch, props.item._id])

    return (
        <>
            {edit ?
                <>
                    <TextFieldComponent
                        type="text"
                        label="Edit Item"
                        // value={editedTask}
                        onChange={storeEditItem}
                    />
                    <IconButton onClick={() => onEditDone()}    >
                        <DoneIcon />
                    </IconButton>
                </> :
                <>
                    <Box display='flex'>
                        <StyledLoader isloading={isLoading.toString()}>
                            <CircularProgress size="25px" />
                            &ensp;
                        </StyledLoader>
                        <StyledCheckbox
                            isloading={isLoading.toString()}
                            onChange={() => dispatch(checkRequest(props.item._id, !props.item.completed))}
                            checked={props.item.completed ? true : false}
                        />
                        <Grid display='flex'>
                            <StyledListItemText setcolor='setTask'>Task {props.count}</StyledListItemText>
                            <StyledListItemText setcolor='setDescription'>
                                {props.item.description}
                            </StyledListItemText>
                        </Grid>
                    </Box>
                    <Box display='flex'>
                        <IconButton onClick={() => setEdit(true)}    >
                            <EditOutlined />
                        </IconButton>
                        <IconButton onClick={() => dispatch(deleteTaskRequest(props.item._id))}>
                            <DeleteOutlined />
                        </IconButton>

                    </Box>
                </>
            }
        </>

    )

}

export default ListItemComponent