import { Facebook, GitHub, LinkedIn } from '@mui/icons-material'
import { Box, Divider, IconButton, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Box sx={{ mb: 2 }}>
            <Paper variant='outlined' square>
                <Stack direction='column' alignItems='center' spacing={2} p={2}>
                    {/* Credits */}
                    <Stack>
                        <Typography variant='body2' >
                            Copy <strong>@ShareWithUs</strong> {new Date().getFullYear()}
                        </Typography >
                    </Stack>
                    {/* Selectors */}
                    <Stack direction='row' divider={<Divider orientation='vertical' flexItem sx={{ ml: 1, mr: 1, bgcolor: 'black' }} />}>
                        <Typography variant='button' sx={{ cursor: 'pointer' }}>
                            About
                        </Typography >
                        <Typography variant='button' sx={{ cursor: 'pointer' }}>
                            Contact
                        </Typography >
                        <Typography variant='button' sx={{ cursor: 'pointer' }}>
                            Policy
                        </Typography >
                    </Stack>
                    {/* Social Media Icons */}
                    <Stack direction='row' spacing={1}>
                        <IconButton color='error'>
                            <GitHub />
                        </IconButton>
                        <IconButton color='info'>
                            <LinkedIn />
                        </IconButton>
                        <IconButton color='primary'>
                            <Facebook />
                        </IconButton>
                    </Stack>
                </Stack>
            </Paper>
        </Box >
    )
}

export default Footer