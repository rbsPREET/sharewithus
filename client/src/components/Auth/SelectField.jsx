import { TextField } from '@mui/material'
import React, { useState } from 'react'

const SelectField = ({ name, label, handleChange, data, value }) => {

    return (
        <TextField
            name={name}
            select
            label={label}
            onChange={handleChange}
            value={value}
            SelectProps={{
                native: true,
            }}
        >
            {data.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </TextField>
    )
}

export default SelectField