import { CircularProgress, Divider, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import useFetch from '../../../hooks/useFetch'
import Comment from '../../../ui/Comment'

const CommentsList = ({ postId, refreshComments }) => {
    const { data, loading, error, reFetch } = useFetch(`/posts/${postId}/comments`)

    useEffect(() => {
        reFetch()
    }, [refreshComments])

    return (
        loading ? <CircularProgress /> : (
            <>
                {/* Post Comments Header */}
                <Stack direction="row" spacing={3} alignItems="center" justifyContent="space-between">
                    <Typography variant="h7">
                        COMMENTS
                    </Typography>
                    <Typography variant="caption">
                        <strong><u>Mostly Rated</u></strong> | Less Rated | Newest
                    </Typography>
                </Stack>
                <Divider orientation='horizontal' flexItem />
                {data?.comments?.map((comment) => (
                    <Comment key={comment._id} comment={comment} />
                ))
                }
            </>
        )
    )
}

export default CommentsList