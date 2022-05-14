import { Stack } from '@mui/material'
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import About from '../components/Category/About'
import MostPopularPosts from '../components/Category/MostPopularPosts'
import PostsList from '../components/Category/PostsList'
import BodyPageContent from '../components/layouts/Home/BodyPageContent'
import Main from '../components/layouts/Main'

const Category = () => {
    return (
        <Main>
            <Stack direction='column' mb={1} mt={2}>
                <BodyPageContent>
                    <>
                        <About />
                    </>
                    <>
                        <MostPopularPosts />
                    </>
                </BodyPageContent>
                <PostsList />
            </Stack>
        </Main>
    )
}

export default Category