import { Box, Button, Divider, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const SectionCard = ({ children, header }) => {
    return (
        <Box>
            <Paper sx={{ p: 2 }} square>
                <Stack direction='column'>
                    <Typography variant='h5'>
                        {header}
                    </Typography>
                    <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
                    {children}
                </Stack>
            </Paper>
        </Box>
    )
}

export default SectionCard