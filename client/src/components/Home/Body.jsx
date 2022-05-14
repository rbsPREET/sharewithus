import { Stack } from '@mui/material'
import React from 'react'
import BodyPageContent from '../layouts/Home/BodyPageContent'
import CategorySection from './Body/CategorySection'
import LeftSideContent from './Body/LeftSideContent'
import RightSideContent from './Body/RightSideContent'

const commentsList = [
    {
        _id: 1,
        user: {
            userId: 5,
            userName: 'John'
        },
        post: {
            postId: 500,
            title: "Attracted to my Boyfriend's friend"
        }
    },
    {
        _id: 2,
        user: {
            userId: 5,
            userName: 'John'
        },
        post: {
            postId: 501,
            title: "Post1"
        }
    },
    {
        _id: 3,
        user: {
            userId: 5,
            userName: 'John'
        },
        post: {
            postId: 502,
            title: "Post2"
        }
    },
    {
        _id: 4,
        user: {
            userId: 5,
            userName: 'John'
        },
        post: {
            postId: 503,
            title: "Post3"
        }
    },
    {
        _id: 5,
        user: {
            userId: 5,
            userName: 'John'
        },
        post: {
            postId: 504,
            title: "Post4"
        }
    },
    {
        _id: 6,
        user: {
            userId: 5,
            userName: 'John'
        },
        post: {
            postId: 505,
            title: "Post5"
        }
    },
    {
        _id: 7,
        user: {
            userId: 5,
            userName: 'John'
        },
        post: {
            postId: 506,
            title: "Post6"
        }
    },
]

const Body = () => {
    return (
        <Stack direction='column' spacing={2}>
            <BodyPageContent>
                <>
                    <LeftSideContent commentsList={commentsList} />
                </>
                <>
                    <RightSideContent />
                </>
            </BodyPageContent>
        </Stack>
    )
}

export default Body