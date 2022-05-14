import { Drafts, ExpandLess, ExpandMore, Home, Inbox, Web, Category, Group } from '@mui/icons-material'
import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const AdminSidebar = ({ setSelector, selector }) => {
    const [openCategories, setOpenCategories] = useState(false);
    const [openPosts, setOpenPosts] = useState(false);

    return (
        <Box flexBasis={1}>
            <List
                sx={{ width: 350, maxWidth: 350, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Admin Sidebar
                    </ListSubheader>
                }
            >
                {/* Users */}
                <ListItemButton onClick={() => setSelector("users")} selected={selector === "users"}>
                    <ListItemIcon>
                        <Group />
                    </ListItemIcon>
                    <ListItemText primary="Users" />
                </ListItemButton>

                {/* Categories */}
                <ListItemButton onClick={() => setOpenCategories(prev => !prev)}>
                    <ListItemIcon>
                        <Category />
                    </ListItemIcon>
                    <ListItemText primary="Categories" />
                    {openCategories ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openCategories} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{}} onClick={() => setSelector("categoriesList")} selected={selector === "categoriesList"}>
                            <ListItemText primary="Categories List" />
                        </ListItemButton>
                        <ListItemButton sx={{}} onClick={() => setSelector("createCategory")} selected={selector === "createCategory"}>
                            <ListItemText primary="Create Category" />
                        </ListItemButton>
                    </List>
                </Collapse>

                {/* Posts */}
                <ListItemButton onClick={() => setOpenPosts(prev => !prev)}>
                    <ListItemIcon>
                        <Inbox />
                    </ListItemIcon>
                    <ListItemText primary="Posts" />
                    {openPosts ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openPosts} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{}} onClick={() => setSelector("awaitingApprovalPosts")} selected={selector === "awaitingApprovalPosts"}>
                            <ListItemText primary="Awaiting for Approval Posts" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton>
                    <ListItemIcon>
                        <Web />
                    </ListItemIcon>
                    <ListItemText primary="Static Pages Content" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <Home color='primary' />
                    </ListItemIcon>
                    <Typography component={Link} to='/'>
                        <ListItemText primary="Home Page" />
                    </Typography>
                </ListItemButton>
            </List>
        </Box >
    )
}

export default AdminSidebar