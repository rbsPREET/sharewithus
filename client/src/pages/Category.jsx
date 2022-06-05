import { Paper, Stack } from '@mui/material'
import React, { useState } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import About from '../components/Category/About'
import MostPopularPosts from '../components/Category/MostPopularPosts'
import PostsList from '../components/Category/PostsList'
import PostsPageContent from '../components/layouts/Category/PostsPageContent'
import BodyPageContent from '../components/layouts/Home/BodyPageContent'
import Main from '../components/layouts/Main'
import { PaginationProvider } from '../context/PaginationContext'
import useFetch from '../hooks/useFetch'
import PaginationUi from '../ui/Pagination'

const Category = () => {
    const { categoryName } = useParams()
    const { data, loading, error } = useFetch(`/categories/${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}`)

    return (
        <Main>
            <Stack direction='column' mb={1} mt={2}>
                <BodyPageContent>
                    <>
                        <About />
                    </>
                    <>
                        <MostPopularPosts categoryId={data?._id} />
                    </>
                </BodyPageContent>
                <PaginationProvider>
                    <PostsList categoryId={data?._id} />
                </PaginationProvider>
            </Stack>
        </Main >
    )
}

export default Category