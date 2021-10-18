import React from "react"
import { styled, Box, ListItem, ListItemText, Checkbox, IconButton } from "@material-ui/core"
import { DeleteOutlined, EditOutlined } from '@mui/icons-material'
import { checkRequest, deleteTaskRequest } from '../../redux/actions/todoAction'
import { useDispatch, useSelector } from "react-redux"
import CircularProgress from '@mui/material/CircularProgress'


const StyledListItem = styled(ListItem)({
    minWidth: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex'
})

const StyledLoader = styled(Box)({
    display: (props) => (props.isloading === 'true' ? 'flex' : 'none')
})

const StyledCheckbox = styled(Checkbox)({
    display: (props) => (props.isloading === 'true' ? 'none' : 'flex')
})

const ListItemComponent = (props) => {

    const dispatch = useDispatch()
    const loadingTasks = useSelector((state) => state.todoReducer.loadingTasks)
    let isLoading = false

    if (loadingTasks.includes(props.item._id)) {
        isLoading = true
    }

    return (
        <StyledListItem
            key={props.item._id}
        >
            <Box display='flex'>
                <StyledLoader isloading={isLoading.toString()}><CircularProgress size="25px" />&ensp;</StyledLoader>
                <StyledCheckbox isloading={isLoading.toString()} onChange={() => dispatch(checkRequest(props.item._id, !props.item.completed))} checked={props.item.completed ? true : false} />
                <ListItemText>{props.item.description}</ListItemText>
            </Box>
            <Box>
                <IconButton >
                    <EditOutlined />
                </IconButton>
                <IconButton onClick={() => dispatch(deleteTaskRequest(props.item._id))}>
                    <DeleteOutlined />
                </IconButton>

            </Box>

        </StyledListItem>


    )

}

export default ListItemComponent