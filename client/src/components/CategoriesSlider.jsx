import React from 'react'
import { AppBar, Toolbar, Typography, Box, Stack, Divider, Grid, Button } from '@mui/material'
import { Link } from 'react-router-dom';
import { categoriesData } from '../mockJsonData/categoriesData'

const CategoriesSlider = () => {
    return (
        <>
            <Box sx={{ display: { xs: 'none', sm: 'block' }, minHeight: '64px', mb: 1 }}>
                <AppBar position='static' sx={{ bgcolor: 'white', color: 'black' }} variant="outlined" square>
                    <Toolbar variant="dense" sx={{ p: 1, display: 'flex', justifyContent: 'space-between' }} >
                        {categoriesData.map((category) => (
                            <Grid key={category.name} item component={Link} to={`/${category.name.toLowerCase()}`} display='flex' flexDirection='column' alignItems='center' sx={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
                                {category.icon}
                                <Typography variant='subtitle2'>
                                    {category.name}
                                </Typography>
                            </Grid>
                        ))}
                    </Toolbar>
                </AppBar>
            </Box >
        </>
    )
}

export default CategoriesSlider