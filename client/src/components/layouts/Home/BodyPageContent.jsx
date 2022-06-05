import { Grid, Stack } from '@mui/material'
import React from 'react'

const BodyPageContent = ({ children }) => {
    return (
        <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
                {children[0]}
            </Grid>
            <Grid item sm={0} md={6}>
                {children[1]}
            </Grid>
        </Grid>
    )
}

export default BodyPageContent