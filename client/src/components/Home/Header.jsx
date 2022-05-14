import { Box, Grow, Paper, Stack } from '@mui/material'
import React from 'react'
import InterstingQuestions from './Header/InterstingQuestions'
import NewQuestions from './Header/NewQuestions'

const Header = () => {
    return (
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent='space-between' paddingTop={1} spacing={2} maxWidth>
            <NewQuestions />
            <InterstingQuestions />
        </Stack >
    )
}

export default Header