import { Facebook, GitHub, LinkedIn } from '@mui/icons-material'
import { Box, Divider, IconButton, Link, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Box>
            <Paper variant='outlined' square>
                <Stack direction='column' alignItems='center' spacing={2} p={2}>
                    {/* Credits */}
                    <Stack>
                        <Typography variant='body2' >
                            <strong>@ShareWithUs</strong> {new Date().getFullYear()}
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
                        <Link target="_blank" href="https://github.com/rbsPREET/sharewithus">
                            <IconButton color='error'>
                                <GitHub />
                            </IconButton>
                        </Link>
                        <Link target="_blank" href="https://www.linkedin.com/in/rotembarsela/">
                            <IconButton color='info'>
                                <LinkedIn />
                            </IconButton>
                        </Link>
                    </Stack>
                </Stack>
            </Paper>
        </Box >
    )
}

export default Footer