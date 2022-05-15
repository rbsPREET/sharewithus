import { Box, Button, Divider, Grid, Grow, IconButton, List, ListItem, ListItemText, Paper, Skeleton, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import { Refresh } from '@mui/icons-material'
import { questionsList } from './newquestionsData'
import useFetch from '../../../hooks/useFetch'
import axios from 'axios'

const ListItemStyled = styled(ListItem)(({ theme }) => ({
    backgroundColor: '#fafafa',
}))

const NewQuestions = () => {
    const { data, loading, error, reFetch } = useFetch("/posts?limit=20")

    useEffect(() => {
        console.log(data)
    })

    return (
        <Box flex={2}>
            <Paper sx={{ p: 1 }}>
                <Stack direction='row' justifyContent='space-between' alignItems="center" pb={1}>
                    <Typography variant="h7" pl={2} fontWeight={700} textTransform="uppercase">
                        New Questions
                    </Typography>
                    <IconButton onClick={() => reFetch()}>
                        <Refresh color='primary' />
                    </IconButton>
                </Stack>
                <List dense
                    sx={{
                        width: '100%',
                        bgcolor: 'background.paper',
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: '593px',
                        pl: 1,
                        pt: 0,
                        pb: 0,
                    }}>
                    {data?.map((question) => (
                        loading ? <Skeleton width={'100%'} height={'57px'} /> :
                            <ListItemStyled button={true} key={question._id}>
                                <ListItemText
                                    sx={{ flex: 2 }}
                                    primary={question?.title}
                                    primaryTypographyProps={{ fontSize: '14px' }}
                                    secondary={`(${question?.createdBy?.username}, ${question?.createdBy?.age}${question?.createdBy?.gender.charAt(0)}, ${question?.categoryId?.categoryName})`}
                                    secondaryTypographyProps={{ fontSize: '11px', textTransform: 'capitalize' }}
                                />
                                <Divider orientation="vertical" flexItem />
                                <ListItemText
                                    sx={{ flex: 1, textAlign: 'center' }}
                                    primary={`Uploaded: ${question?.createdAt}`}
                                    primaryTypographyProps={{ fontSize: '13px' }}
                                />
                                <Divider orientation="vertical" flexItem />
                                <ListItemText
                                    sx={{ flex: 1, textAlign: 'center' }}
                                    primary={`${question?.comments} comments`}
                                    primaryTypographyProps={{ fontSize: '13px' }}
                                />
                            </ListItemStyled>
                    ))}
                </List>
            </Paper>
        </Box>
    )
}

export default NewQuestions