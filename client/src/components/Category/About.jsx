import { Avatar, CircularProgress, Divider, Grid, Paper, Skeleton, Stack, Typography } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const About = () => {
    const { categoryName } = useParams()
    const navigate = useNavigate()

    const { data, loading, error } = useFetch(`/categories/${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}`)

    useEffect(() => {
        if (data === null)
            navigate('/')
    }, [data])

    return (
        <>
            <Paper sx={{ p: 2, minWidth: 0 }} square>
                <Typography variant='h4' textTransform='capitalize'>
                    {loading ? <Skeleton width={"170px"} /> : data?.categoryName}
                </Typography>
                <Divider sx={{ mt: 1, mb: 1 }} />
                {/* Most Popular Posts of the section */}
                <Stack direction='row'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} lg={3}>
                            {loading ? <Skeleton variant="rectangular" width={'100%'} height={'100%'} /> :
                                <Stack direction='column'>
                                    <Avatar
                                        src='https://inspiringtips.com/wp-content/uploads/2018/03/Simple-Secrets-of-a-Happy-Couple-1200.jpg'
                                        alt='Post'
                                        sx={{ bgcolor: deepOrange[500], height: '100%', width: '100%' }}
                                        variant="square">
                                    </Avatar>
                                    <Typography variant='body1' fontWeight={500} noWrap>
                                        My girlfriend told me a dark secret
                                    </Typography>
                                    <Typography variant='caption'>
                                        (user123, 23M)
                                    </Typography>
                                </Stack>
                            }
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <Stack direction='column'>
                                <Avatar
                                    src='https://inspiringtips.com/wp-content/uploads/2018/03/Simple-Secrets-of-a-Happy-Couple-1200.jpg'
                                    alt='Post'
                                    sx={{ bgcolor: deepOrange[500], height: '100%', width: '100%' }}
                                    variant="square">
                                </Avatar>
                                <Typography variant='body1' fontWeight={500} noWrap>
                                    My girlfriend told me a dark secret
                                </Typography>
                                <Typography variant='caption'>
                                    (user123, 23M)
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <Stack direction='column'>
                                <Avatar
                                    src='https://inspiringtips.com/wp-content/uploads/2018/03/Simple-Secrets-of-a-Happy-Couple-1200.jpg'
                                    alt='Post'
                                    sx={{ bgcolor: deepOrange[500], height: '100%', width: '100%' }}
                                    variant="square">
                                </Avatar>
                                <Typography variant='body1' fontWeight={500} noWrap>
                                    My girlfriend told me a dark secret
                                </Typography>
                                <Typography variant='caption'>
                                    (user123, 23M)
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <Stack direction='column'>
                                <Avatar
                                    src='https://inspiringtips.com/wp-content/uploads/2018/03/Simple-Secrets-of-a-Happy-Couple-1200.jpg'
                                    alt='Post'
                                    sx={{ bgcolor: deepOrange[500], height: '100%', width: '100%' }}
                                    variant="square">
                                </Avatar>
                                <Typography variant='body1' fontWeight={500} noWrap>
                                    My girlfriend told me a dark secret
                                </Typography>
                                <Typography variant='caption'>
                                    (user123, 23M)
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </Paper>
        </>
    )
}

export default About