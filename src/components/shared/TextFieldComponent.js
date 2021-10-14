import { TextField } from '@material-ui/core'
import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

const TextFieldComponent = (props) => {

    const [isTouched, setIsTouched] = useState(false)
    let setError = false
    const dispatch = useDispatch()

    if (props.condition && isTouched === true) {
        setError = true
    }

    const onBlur = useCallback(() => {
        setIsTouched(true)
    }, [isTouched])


    return (
        <TextField
            fullWidth={props.fullWidth}
            error={setError}
            required={props.required}
            autoComplete={props.autoComplete}
            label={props.label}
            helperText={setError ? props.helperText : ''}
            variant={props.variant}
            type={props.type}
            onBlur={onBlur}
            onChange={e => { dispatch(props.onChange(e.target.value)) }}
        >

        </TextField>
    )

}

export default TextFieldComponent