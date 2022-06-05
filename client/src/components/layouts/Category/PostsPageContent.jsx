import { Stack } from '@mui/material'
import React from 'react'

const PostsPageContent = ({ children }) => {
    return (
        <Stack direction="column" spacing={2}>
            {children[0]}
        </Stack>
    )
}

export default PostsPageContent