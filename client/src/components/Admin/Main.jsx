import { Box, Container } from '@mui/material'
import React from 'react'

const Main = ({ children }) => {
    return (
        <>
            <Box sx={{ p: 3 }}>
                {children}
            </Box>
        </>
    )
}

export default Main