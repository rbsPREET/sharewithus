import React from 'react'
import CategorySection from './CategorySection'
import { FamilyRestroom, Favorite, FitnessCenter, Refresh } from '@mui/icons-material'
import { Box, Divider, IconButton, List, ListItem, ListItemText, Paper, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const categoryData = [
    {
        categoryName: 'Relationship',
        icon: <Favorite />,
        posts: [
            {
                title: "Is it just sex for him?",
                creator: {
                    name: "Dina",
                    age: 21,
                    gender: "F"
                }
            },
            {
                title: "Bla Bla",
                creator: {
                    name: "Dina",
                    age: 21,
                    gender: "F"
                }
            },
            {
                title: "Random",
                creator: {
                    name: "Dina",
                    age: 21,
                    gender: "F"
                }
            }
        ]
    },
    {
        categoryName: 'Fitness',
        icon: <FitnessCenter />,
        posts: [
            {
                title: "Fitness1",
                creator: {
                    name: "Dina",
                    age: 21,
                    gender: "F"
                }
            },
            {
                title: "Fitness2",
                creator: {
                    name: "Dina",
                    age: 21,
                    gender: "F"
                }
            },
            {
                title: "Fitness3",
                creator: {
                    name: "Dina",
                    age: 21,
                    gender: "F"
                }
            }
        ]
    },
    {
        categoryName: 'Family',
        icon: <FamilyRestroom />,
        posts: [
            {
                title: "FamilyLol",
                creator: {
                    name: "Dina",
                    age: 21,
                    gender: "F"
                }
            },
            {
                title: "Familysdaf",
                creator: {
                    name: "Dina",
                    age: 21,
                    gender: "F"
                }
            },
            {
                title: "Family241",
                creator: {
                    name: "Dina",
                    age: 21,
                    gender: "F"
                },
            }
        ],
    },
]

const ListItemStyled = styled(ListItem)(({ theme }) => ({
    backgroundColor: '#fafafa',
}))

const LeftSideContent = ({ commentsList }) => {
    return (
        <Box>
            {/* Lastest comments on Posts at @ShareWithUs  */}
            <Box mb={2}>
                <Paper sx={{ p: 2 }}>
                    <Stack direction='column'>
                        <Stack direction='row' alignItems='center' justifyContent='space-between'>
                            <Typography variant='h6'>
                                Lastest Comments on Posts
                            </Typography>
                            <IconButton sx={{ p: 0 }}>
                                <Refresh color='primary' />
                            </IconButton>
                        </Stack>
                        <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
                        <Stack>
                            <List dense
                                sx={{
                                    width: '100%',
                                    bgcolor: 'background.paper',
                                    position: 'relative',
                                    overflow: 'auto',
                                    maxHeight: '34vh',
                                    p: 0
                                }}>
                                {commentsList.map((comment) => (
                                    <ListItemStyled button={true} key={comment._id}>
                                        <ListItemText
                                            sx={{ flex: 1 }}
                                            primary={`${comment.user.userName} commented on "${comment.post.title}" post`}
                                            primaryTypographyProps={{ fontSize: '13px' }}
                                            secondary={`(1 hour ago)`}
                                            secondaryTypographyProps={{ fontSize: '11px' }}
                                        />
                                    </ListItemStyled>
                                ))}
                            </List>
                        </Stack>
                    </Stack>
                </Paper>
            </Box>
            {/* Display all the Categories lastest Posts */}
            {categoryData.map((item) => (
                <CategorySection key={item.categoryName} category={item} />
            ))}
        </Box>
    )
}

export default LeftSideContent