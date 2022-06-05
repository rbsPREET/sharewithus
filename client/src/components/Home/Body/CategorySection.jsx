import { Box, Card, CardMedia, Divider, IconButton, List, ListItem, ListItemButton, ListItemText, Paper, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { questionsList } from '../Header/newquestionsData'
import React from 'react'
import useFetch from '../../../hooks/useFetch'

const ListItemStyled = styled(ListItem)(({ theme }) => ({
    backgroundColor: '#fafafa',
}))

const CategorySection = ({ category }) => {
    const { data, loading } = useFetch(`/posts?categoryId=${category._id}`)

    return (
        <Paper sx={{ mb: 2, }}>
            <Stack direction='column'>
                <Stack direction='row' p={2} pb={0} alignItems='center'>
                    <Typography variant='h6' sx={{ cursor: 'pointer', ":hover": { color: '#2576b5' } }}>
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
                                {/* make a fetch with the most popular post of the section */}
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
                        {loading ? "Loading..." :
                            data.data?.map((post) => (
                                <ListItemStyled sx={{ flexDirection: { xs: 'column', md: 'row' }, borderBottom: { xs: '1px solid gray', md: 'none' } }} button={true} key={post._id}>
                                    <ListItemText
                                        sx={{ flex: 2 }}
                                        primary={post.title}
                                        primaryTypographyProps={{ fontSize: '14px' }}
                                        secondary={`(${post.createdBy.username}, ${post.createdBy.age}${post.createdBy.gender.charAt(0)}, ${post.categoryId.categoryName})`}
                                        secondaryTypographyProps={{ fontSize: '11px' }}
                                    />
                                    <Divider orientation="vertical" flexItem />
                                    <ListItemText
                                        sx={{ flex: 1, textAlign: 'center' }}
                                        primary={`Uploaded: ${post.createdAt}`}
                                        primaryTypographyProps={{ fontSize: '13px' }}
                                    />
                                    <Divider orientation="vertical" flexItem />
                                    <ListItemText
                                        sx={{ flex: 1, textAlign: 'center' }}
                                        primary={`${post.comments} comments`}
                                        primaryTypographyProps={{ fontSize: '13px' }}
                                    />
                                </ListItemStyled>
                            ))}
                        <ListItemStyled >
                            <ListItemButton sx={{ display: 'flex', justifyContent: 'center', fontSize: { xs: '13px', md: 'inherit' }, bgcolor: '#2576b5', color: 'white', p: 2, m: 1, ":hover": { bgcolor: '#18659f' } }}>
                                {/* will fetch more posts of the category using pagination to get more data after reaching the limit */}
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