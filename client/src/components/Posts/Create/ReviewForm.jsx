import { Divider, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const ReviewForm = ({ data }) => {
    return (
        <>
            <Paper>
                <Stack direction='column' spacing={2} p={2}>
                    <Stack direction='column'>
                        <Typography variant='caption'>
                            {data.category}
                        </Typography>
                        <Divider flexItem sx={{ mt: 1, mb: 1 }} />
                        <Typography variant='h4' color='primary'>
                            {data.title}
                        </Typography>
                        <Typography variant='subtitle2'>
                            Temp, 24M
                        </Typography>
                    </Stack>
                    <Typography variant='body2'>
                        {data.description}
                    </Typography>
                </Stack>
            </Paper>
        </>
    )
}

export default ReviewForm