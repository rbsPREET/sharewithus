import { Stack } from '@mui/material'
import React from 'react'

const BodyPageContent = ({ children }) => {
    return (
        <Stack direction='row' spacing={2}>
            <Stack flex={2} direction='column'>
                {children[0]}
            </Stack>
            <Stack flex={1} direction='column' sx={{ display: { xs: 'none', md: 'flex' } }}>
                {children[1]}
            </Stack>
        </Stack>
    )
}

export default BodyPageContent