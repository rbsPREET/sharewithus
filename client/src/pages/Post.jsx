import { Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Main from '../components/layouts/Main'
import LeftContent from '../components/Posts/Post/LeftContent'
import PostBodyPageContent from '../components/Posts/Post/PostBodyPageContent'
import RightContent from '../components/Posts/Post/RightContent'
import useFetch from '../hooks/useFetch'

const Post = () => {
    const { categoryName, postId } = useParams()

    const navigate = useNavigate()
    const { error } = useFetch(`/posts/${postId}/check/${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}`)

    useEffect(() => {
        if (error)
            navigate('/')
    }, [error])

    return (
        <Main>
            <Stack direction='column' mb={1} mt={2}>
                <PostBodyPageContent>
                    <>
                        <LeftContent />
                    </>
                    <>
                        <RightContent />
                    </>
                </PostBodyPageContent>
            </Stack>
        </Main>
    )
}
export default Post