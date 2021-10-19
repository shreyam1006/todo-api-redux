import React from "react"
import { Button, styled, Box } from "@material-ui/core"
import { useDispatch } from "react-redux"
import CircularProgress from '@mui/material/CircularProgress'

const StyledButtonLoader = styled(Box)({
    display: (props) => (props.isloading === 'true' ? 'flex' : 'none')
})

const StyledButtonText = styled(Box)({
    display: (props) => (props.isloading === 'true' ? 'none' : 'flex')
})

const ButtonComponent = (props) => {
    const dispatch = useDispatch()

    let disable = props.disable

    if (props.condition) {
        disable = !props.disable
    }

    if (props.loadingcondition) {
        disable = true
    }

    return (
        <Button
            style={props.style}
            label={props.label}
            disabled={disable}
            type={props.type}
            variant={props.variant}
            autoComplete={props.autoComplete}
            color={props.color}
            onClick={() => dispatch(props.onClick(props.history))}
        >
            <StyledButtonLoader isloading={props.isLoading.toString()}>
                <CircularProgress size='23px' />
            </StyledButtonLoader>

            <StyledButtonText isloading={props.isLoading.toString()}>
                {props.content}
            </StyledButtonText>
        </Button>
    )
}

export default ButtonComponent