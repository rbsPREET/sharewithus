import { Divider, Paper, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AuthContext } from '../../../context/modals/AuthContext'

const ReviewForm = ({ data }) => {
    const { user } = useContext(AuthContext)

    return (
        <>
            <Paper variant="outlined" square >
                <Stack direction='column' spacing={2} p={2}>
                    <Stack direction='column'>
                        <Typography variant='subtitle2'>
                            {data.category}
                        </Typography>
                        <Divider flexItem sx={{ mt: 1, mb: 1 }} />
                        <Typography variant='h4' color='primary'>
                            {data.title}
                        </Typography>
                        <Typography variant='caption'>
                            {user.result.username}, {user.result.age}{user.result.gender.charAt(0)}
                        </Typography>
                    </Stack>
                    <Typography variant='body2'>
                        {data.description}
                    </Typography>
                    <img src={data.imageURL ? URL.createObjectURL(data.imageURL) : ''} alt="imageURL" />
                </Stack>
            </Paper>
        </>
    )
}

export default ReviewForm