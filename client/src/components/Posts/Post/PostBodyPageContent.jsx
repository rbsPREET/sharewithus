import { Stack } from '@mui/material'
import React from 'react'

const PostBodyPageContent = ({ children }) => {
    return (
        <Stack direction='row' spacing={{ xs: 0, md: 2 }}>
            <Stack width="30%" direction='column' sx={{ display: { xs: 'none', md: 'flex' } }}>
                {children[0]}
            </Stack>
            <Stack width={{ xs: "100%", md: "70%" }} direction='column'>
                {children[1]}
            </Stack>
        </Stack >
    )
}

export default PostBodyPageContent