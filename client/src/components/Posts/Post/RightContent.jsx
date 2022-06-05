import { ModeCommentOutlined, ReportOutlined, ThumbDownOutlined, ThumbsUpDownOutlined, ThumbUp, ThumbUpOutlined } from '@mui/icons-material'
import { Button, Paper, Stack, Typography, CircularProgress, Divider, Tooltip, Box, Avatar, TextareaAutosize, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../../context/modals/AuthContext'
import { AuthModalContext } from '../../../context/modals/AuthModalContext'
import useFetch from '../../../hooks/useFetch'
import Comment from '../../../ui/Comment'
import CommentsList from './CommentsList'

const RightContent = () => {
    const { categoryName, postId } = useParams()
    const { data, loading, error, reFetch } = useFetch(`/posts/${postId}`)

    const { dispatch } = useContext(AuthModalContext)
    const { user, dispatch: authDispatch } = useContext(AuthContext)

    const checkUser = () => {
        if (!user)
            dispatch({ type: "OPEN", payload: { open: true, view: "login" } })
    }

    const [description, setDescription] = useState('')
    const [refreshComments, setRefreshComments] = useState(false)

    const handleCommentSubmit = async () => {
        // Add Context to validate comment before submit
        const commentToCreate = { userId: user.result._id, description, categoryName: categoryName.charAt(0).toUpperCase() + categoryName.slice(1), postId }
        console.log(commentToCreate)
        try {
            const res = await axios.post(`/comments`, commentToCreate)
            setDescription('')
        } catch (error) {
            console.log("Commenting failed")
            return
        }
        setRefreshComments(prev => !prev)
    }

    // delete when comments exist
    const comments = ["1", "2", "3"]

    console.log(description)

    return (
        <Box>
            <Paper variant="outlined" square sx={{ mb: 2 }}>
                {/* Post */}
                <Stack direction="column" spacing={2} p={2} pt={0}>
                    {loading ? <CircularProgress sx={{ mt: 2 }} /> : (
                        <>
                            {/* Post Statistics && Report Post */}
                            <Stack direction="row" alignItems="center" spacing={1} mt={2}>
                                <Typography variant="caption">
                                    {data?.commentsCount}
                                </Typography>
                                <Tooltip title="Comments" arrow>
                                    <ModeCommentOutlined />
                                </Tooltip>
                                <Typography variant='caption'>
                                    0
                                </Typography>
                                <Tooltip title="Likes and Dislikes" arrow>
                                    <ThumbsUpDownOutlined />
                                </Tooltip>
                            </Stack>
                            <Divider orientation='horizontal' flexItem />
                            {/* Post Title */}
                            <Typography variant='h4' color="primary">
                                {data?.title}
                            </Typography>
                            {/* User Details */}
                            <Stack direction="row" alignItems="center">
                                <Typography variant='body2' fontWeight={700}>
                                    {data?.createdBy?.username}, {data?.createdBy?.age}&nbsp;{data?.createdBy?.gender.charAt(0)}
                                </Typography>
                                <Divider orientation='vertical' sx={{ ml: 1, mr: 1, bgcolor: '#1565c0' }} flexItem />
                                <Typography variant='caption'>
                                    {data?.createdAt}
                                </Typography>
                            </Stack>
                            {/* Post Description */}
                            <Typography variant='body1' sx={{ wordWrap: "break-word" }}>
                                {data?.description}
                            </Typography>
                            <Divider orientation='horizontal' flexItem />
                            {user ?
                                <>
                                    <Paper variant="outlined" square>
                                        <Stack display="flex" direction="row" justifyContent="space-between" spacing={2} p={2}>
                                            <Tooltip title={user?.result?.username} arrow>
                                                <Avatar sx={{ display: { xs: "none", md: "flex" }, bgcolor: deepPurple[500], textTransform: 'uppercase', cursor: 'pointer' }}>{user?.result.username.charAt(0)}</Avatar>
                                            </Tooltip>
                                            <TextareaAutosize
                                                aria-label="comment description"
                                                style={{ width: '100%', height: '150px', resize: 'none', overflow: 'auto' }}
                                                onChange={(e) => setDescription(e.target.value)}
                                            />
                                            <Button onClick={handleCommentSubmit} variant='contained' sx={{ width: '150px', height: '50px' }}>
                                                Send
                                            </Button>
                                        </Stack>
                                    </Paper>
                                </>
                                :
                                <>
                                    {/* Add a comment (check if user auth) */}
                                    <Button variant='contained' onClick={() => checkUser()}>
                                        Comment on Post {"(icon)"}
                                    </Button>
                                </>
                            }
                        </>
                    )}
                </Stack >
            </Paper>
            {/* Post Comments */}
            <Paper variant="outlined" square>
                <Stack direction="column" spacing={2} p={2}>
                    {loading ? <CircularProgress sx={{ mt: 2 }} /> : (
                        <>
                            {/* Map on comments data */}
                            <CommentsList postId={data?._id} filter={null} refreshComments={refreshComments} />
                        </>
                    )}
                </Stack>
            </Paper>
        </Box >
    )
}

export default RightContent