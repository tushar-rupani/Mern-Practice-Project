import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import VisiblilityOff from '@material-ui/icons/VisibilityOff'
import Visiblility from '@material-ui/icons/Visibility'
import React from 'react'

const Input = ({name, handleChange, label, autoFocus, type, handleShowPassword, half}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
        <TextField
            name = {name}
            onChange = {handleChange}
            variant = "outlined"
            required
            fullWidth
            label = {label}
            autoFocus = {autoFocus}
            type = {type}
            InputProps = {(name === 'password' || name === "confirmPassword") ? {
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                            {type === "password" ? <Visiblility /> : <VisiblilityOff />}
                        </IconButton>
                    </InputAdornment>
                ),
            } : null}

        />
    </Grid>
  )
}

export default Input
