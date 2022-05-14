import { Box, Card, CardMedia, Divider, IconButton, List, ListItem, ListItemButton, ListItemText, Paper, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { questionsList } from '../Header/newquestionsData'
import React from 'react'

const ListItemStyled = styled(ListItem)(({ theme }) => ({
    backgroundColor: '#fafafa',
}))


const CategorySection = ({ category }) => {
    return (
        <Paper sx={{ mb: 2, }}>
            <Stack direction='column'>
                <Stack direction='row' p={2} pb={0} alignItems='center' sx={{ cursor: 'pointer', ":hover": { color: 'blue' } }}>
                    <Typography variant='h6'>
                        {category.categoryName}
                    </Typography>
                    &nbsp;{category.icon}
                </Stack>
                <Divider sx={{ mt: 1, mr: 2, ml: 2 }} />
                <Stack direction='row' m={2}>
                    <Card sx={{ maxWidth: 345, cursor: 'pointer' }}>
                        <Box sx={{ position: 'relative' }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    bgcolor: 'rgba(0, 0, 0, 0.54)',
                                    color: 'white',
                                    padding: '10px',
                                }}
                            >
                                <Typography variant="body2">Attracted to my Boyfriend's friend</Typography>
                            </Box>
                        </Box>
                    </Card>
                    <Divider orientation='vertical' flexItem sx={{ mr: 1, ml: 1 }} />
                    <List dense
                        sx={{
                            width: '100%',
                            bgcolor: 'background.paper',
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: '200px',
                            p: 0
                        }}>
                        {questionsList.map((question) => (
                            <ListItemStyled sx={{ flexDirection: { xs: 'column', md: 'row' }, borderBottom: { xs: '1px solid gray', md: 'none' } }} button={true} key={question._id}>
                                <ListItemText
                                    sx={{ flex: 2 }}
                                    primary={question.title}
                                    primaryTypographyProps={{ fontSize: '13px' }}
                                    secondary={`(${question.creator.name}, ${question.creator.age}${question.creator.gender}, ${question.category})`}
                                    secondaryTypographyProps={{ fontSize: '11px' }}
                                />
                                <Divider orientation="vertical" flexItem />
                                <ListItemText
                                    sx={{ flex: 1, textAlign: 'center' }}
                                    primary={`Uploaded: ${question.createdAt}`}
                                    primaryTypographyProps={{ fontSize: '13px' }}
                                />
                                <Divider orientation="vertical" flexItem />
                                <ListItemText
                                    sx={{ flex: 1, textAlign: 'center' }}
                                    primary={`${question.comments} comments`}
                                    primaryTypographyProps={{ fontSize: '13px' }}
                                />
                            </ListItemStyled>
                        ))}
                        <ListItemStyled >
                            <ListItemButton sx={{ display: 'flex', justifyContent: 'center', fontSize: { xs: '13px', md: 'inherit' }, bgcolor: 'darkblue', color: 'white', p: 2, m: 1 }}>
                                Fetch More
                            </ListItemButton>
                        </ListItemStyled>
                    </List>
                </Stack>
            </Stack>
        </Paper >
    )
}

export default CategorySection