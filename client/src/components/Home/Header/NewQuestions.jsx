import { Box, Button, Divider, Grid, Grow, IconButton, List, ListItem, ListItemText, Paper, Stack, Typography } from '@mui/material'
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
    const { data, loading, error } = useFetch("/posts?limit=5")

    useEffect(() => {
        console.log(data)
    })

    return (
        <Grow in>
            <Box flex={2}>
                <Paper sx={{}}>
                    <Stack direction='row' justifyContent='space-between' alignItems="center">
                        <Typography variant="h7" pl={2} fontWeight={600}>
                            New Questions
                        </Typography>
                        <IconButton>
                            <Refresh color='primary' />
                        </IconButton>
                    </Stack>
                    <List dense
                        sx={{
                            width: '100%',
                            bgcolor: 'background.paper',
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: '80vh',
                            p: 0
                        }}>
                        {loading ? "Loading..." : (
                            data?.map((question) => (
                                <ListItemStyled button={true} key={question._id}>
                                    <ListItemText
                                        sx={{ flex: 2 }}
                                        primary={question?.title}
                                        primaryTypographyProps={{ fontSize: '13px' }}
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
                            ))
                        )}
                    </List>
                </Paper>
            </Box>
        </Grow>
    )
}

export default NewQuestions