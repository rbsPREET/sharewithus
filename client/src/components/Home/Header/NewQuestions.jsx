import { Box, Button, Divider, Grid, Grow, IconButton, List, ListItem, ListItemText, Paper, Skeleton, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import { Refresh } from '@mui/icons-material'
import { questionsList } from './newquestionsData'
import useFetch from '../../../hooks/useFetch'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ListItemStyled = styled(ListItem)(({ theme }) => ({
    backgroundColor: '#fafafa',
}))

const NewQuestions = () => {
    const { data, loading, error, reFetch } = useFetch("/posts?page=1")

    console.log(data)

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
                    {data.data?.map((post) => (
                        loading ? <Skeleton key={post._id} width={'100%'} height={'57px'} /> :
                            <Link key={post._id} to={`/${post?.categoryId?.categoryName.toLowerCase()}/${post?._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <ListItemStyled button={true}>
                                    <ListItemText
                                        sx={{ flex: 2 }}
                                        primary={post?.title}
                                        primaryTypographyProps={{ fontSize: '14px' }}
                                        secondary={`(${post?.createdBy?.username}, ${post?.createdBy?.age}${post?.createdBy?.gender.charAt(0)}, ${post?.categoryId?.categoryName})`}
                                        secondaryTypographyProps={{ fontSize: '11px', textTransform: 'capitalize' }}
                                    />
                                    <Divider orientation="vertical" flexItem />
                                    <ListItemText
                                        sx={{ flex: 1, textAlign: 'center' }}
                                        primary={`Uploaded: ${post?.createdAt}`}
                                        primaryTypographyProps={{ fontSize: '13px' }}
                                    />
                                    <Divider orientation="vertical" flexItem />
                                    <ListItemText
                                        sx={{ flex: 1, textAlign: 'center' }}
                                        primary={`${post?.commentsCount} comments`}
                                        primaryTypographyProps={{ fontSize: '13px' }}
                                    />
                                </ListItemStyled>
                            </Link>
                    ))}
                </List>
            </Paper>
        </Box>
    )
}

export default NewQuestions