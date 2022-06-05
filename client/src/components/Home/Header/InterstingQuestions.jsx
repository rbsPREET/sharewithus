import { Box, Card, CardMedia, Divider, Grid, ImageList, ImageListItem, ImageListItemBar, List, ListItem, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const InterstingQuestions = () => {
    let currentDate = new Date()
    let day = currentDate.getDate()
    let month = currentDate.getMonth() + 1

    return (
        <Box flex={1}>
            <Paper sx={{ p: 2, pb: 0, pt: 1 }} >
                <Stack direction="row" alignItems="center" pb={1}>
                    <Typography variant='h6'>
                        Intersting Question&nbsp;
                    </Typography>
                    <Typography variant='h6' color={"#1976d2"}>
                        {("(" + day + "/" + month + ")")}
                    </Typography>
                    <Divider />
                </Stack>
                <List>
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
                    <ImageList cols={1} sx={{
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: '385px',
                        marginTop: 1,
                    }}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=1 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    subtitle={<span>by: {item.author}</span>}
                                    position='bottom'
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </List>
            </Paper>
        </Box >
    )
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@nolanissac',
    },
];

export default InterstingQuestions