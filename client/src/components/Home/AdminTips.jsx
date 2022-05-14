import { Box, Button, Card, CardMedia, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const AdminTips = () => {
    return (
        <Box mt={2} mb={2}>
            <Paper sx={{ pt: 1, pb: 2 }}>
                <Stack flexDirection='column' maxWidth>
                    <Stack p={2} paddingTop={0} paddingBottom={1} flexDirection='row' justifyContent='space-between'>
                        <Typography variant='h6'>
                            Admin Tips
                        </Typography>
                        <Button>
                            Browse all Tips
                        </Button>
                    </Stack>
                    <Divider sx={{ m: 2, mt: 0 }} />
                    <Grid container spacing={2} pl={2} pr={2}>
                        <Grid item xs={6} md={3}>
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
                        </Grid>
                        <Grid item xs={6} md={3}>
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
                        </Grid>
                        <Grid item xs={6} md={3}>
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
                        </Grid>
                        <Grid item xs={6} md={3}>
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
                        </Grid>
                    </Grid>
                </Stack>
            </Paper>
        </Box >
    )
}

export default AdminTips