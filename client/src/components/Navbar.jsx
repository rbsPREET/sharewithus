import React, { useContext } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Box, Stack, Divider, Grid, Button, Avatar, Tooltip } from '@mui/material'
import { styled } from '@mui/material/styles'
import { AddCircleOutline, Home } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom';
import { AuthModalContext } from '../context/modals/AuthModalContext'
import { deepPurple } from '@mui/material/colors';
import { AuthContext } from '../context/modals/AuthContext';

// Styled Items
const DividerStyled = styled(Divider)(({ theme }) => ({
    borderColor: 'white'
}));


const Navbar = () => {
    const { dispatch } = useContext(AuthModalContext)
    const { user, dispatch: authDispatch } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleAuthModal = (e) => {
        const targetView = e.target.getAttribute('name')
        dispatch({ type: "OPEN", payload: { open: true, view: targetView } })
    }

    const checkUser = () => {
        if (!user)
            dispatch({ type: "OPEN", payload: { open: true, view: "login" } })
        else
            navigate('/create')
    }

    return (
        <>
            <Box sx={{ minHeight: '64px' }}>
                <AppBar position='static' variant='outlined' sx={{ bgcolor: '#000535' }}>
                    <Toolbar variant="dense" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <IconButton LinkComponent={Link} to='/' sx={{ mr: 1 }} edge="start" color="inherit">
                            <Home />
                        </IconButton>
                        <Stack flex={1} sx={{ display: { xs: 'none', sm: 'flex' } }} direction="row" spacing={1.5} alignItems='center' divider={<DividerStyled orientation="vertical" flexItem />}>
                            <Typography variant="h7" color="inherit" component="div">
                                New Questions
                            </Typography>
                            <Typography variant="h7" color="inherit" component="div">
                                Most Interest
                            </Typography>
                            <Typography variant="h7" color="inherit" component="div">
                                Reviews
                            </Typography>
                            <Typography variant="h7" color="inherit" component="div">
                                Tips
                            </Typography>
                            {user?.result?.isAdmin && (
                                <Typography component={Link} to={'/admin'} variant="h7" color="error" sx={{ textDecoration: 'none', textTransform: 'uppercase' }}>
                                    Admin
                                </Typography>
                            )}
                        </Stack>
                        <Stack flexDirection='row' alignItems="center">
                            <Tooltip title="New Post" arrow>
                                <IconButton onClick={checkUser} color="info" sx={{ mr: 2 }}>
                                    <AddCircleOutline />
                                </IconButton>
                            </Tooltip>
                            {user
                                ? (
                                    <Avatar onClick={() => authDispatch({ type: "LOGOUT" })} sx={{ bgcolor: deepPurple[500], mr: 0, textTransform: 'uppercase', cursor: 'pointer' }}>{user?.result.username.charAt(0)}</Avatar>
                                )
                                : (
                                    <>
                                        <Typography
                                            onClick={(e) => handleAuthModal(e)}
                                            variant="h7"
                                            name='login'
                                            color="inherit"
                                            component="span"
                                            sx={{ cursor: 'pointer' }}>
                                            Login
                                        </Typography>
                                        <Divider orientation='vertical' sx={{ bgcolor: 'white', ml: 2, mr: 2, mt: 1, mb: 1 }} flexItem />
                                        <Typography
                                            onClick={(e) => handleAuthModal(e)}
                                            variant="h7"
                                            name='register'
                                            color="inherit"
                                            component="span"
                                            sx={{ cursor: 'pointer' }}>
                                            Register
                                        </Typography>
                                    </>
                                )}
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar