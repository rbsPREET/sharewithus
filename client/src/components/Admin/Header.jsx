import { Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/modals/AuthContext'

const Header = () => {
    const { user } = useContext(AuthContext)

    return (
        <Typography variant='h6' mb={2}>
            Hello, {user.result.username}&nbsp;&#128516;
        </Typography>
    )
}

export default Header