import { ArrowBack, ArrowForward, Drafts, Inbox } from '@mui/icons-material'
import { Box, Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Pagination, PaginationItem, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const PostsList = () => {

    const location = useLocation()
    // get the category name to fetch data
    console.log(location.pathname.split('/').join(''))

    const data = [
        {
            page: 1,
            posts: [
                {

                },
                {

                }
            ]
        },
        {
            page: 2,
            posts: [
                {

                },
                {

                }
            ]
        }
    ]

    const [filter, setFilter] = useState('uploadDate');

    const handleFilterChange = (event, filter) => {
        setFilter(filter);
    };

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper', mt: 1 }}>
            <Stack direction='row' spacing={2}>
                <Box flex={3}>
                    <nav aria-label="secondary mailbox folders">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <Stack direction='row' gap={1} justifyContent='space-around' alignItems='center' width='100%' divider={<Divider orientation='vertical' flexItem />}>
                                        <ListItemText primary={`Trash`} secondary="(user456, 21M)" sx={{ width: '50%' }} />
                                        <ListItemText primary={`7 Comments`} sx={{ textAlign: 'center' }} />
                                        <ListItemText primary={`06/05/22 - 18:00`} sx={{ textAlign: 'center' }} />
                                    </Stack>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <Stack direction='row' gap={1} justifyContent='space-around' alignItems='center' width='100%' divider={<Divider orientation='vertical' flexItem />}>
                                        <ListItemText primary={`Trash`} secondary="(user456, 21M)" sx={{ width: '50%' }} />
                                        <ListItemText primary={`7 Comments`} sx={{ textAlign: 'center' }} />
                                        <ListItemText primary={`06/05/22 - 18:00`} sx={{ textAlign: 'center' }} />
                                    </Stack>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>
                </Box>
                <Stack direction='column' flex={1} p={2}>
                    <ToggleButtonGroup
                        orientation="vertical"
                        value={filter}
                        exclusive
                        onChange={handleFilterChange}
                        color='primary'
                        fullWidth
                    >
                        <ToggleButton value="uploadDate" aria-label="uploadDate">
                            Upload date
                        </ToggleButton>
                        <ToggleButton value="reviews" aria-label="reviews">
                            Reviews
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Stack>
            {/* Pagination */}
            <Stack spacing={2} alignItems='center' p={1}>
                <Pagination
                    count={data.length}
                    renderItem={(item) => (
                        <PaginationItem
                            components={{ previous: ArrowBack, next: ArrowForward }}
                            {...item}
                        />
                    )}
                />
            </Stack>
        </Box >
    )
}

export default PostsList