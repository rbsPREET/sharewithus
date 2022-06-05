import { ReportOutlined, ThumbDownOutlined, ThumbUp } from '@mui/icons-material'
import { Avatar, Divider, Paper, Stack, Tooltip, Typography } from '@mui/material'
import React from 'react'

const Comment = ({ comment }) => {
    return (
        <>
            <Paper variant="outlined" square>
                {/* Comment Header */}
                <Stack direction="row" justifyContent="space-between" p={2} bgcolor="#F8F8F8">
                    <Stack direction="row" spacing={2}>
                        <Avatar>A</Avatar>
                        <Stack direction="column">
                            <Typography variant="subtitle2">
                                {comment?.createdBy?.username},  {comment?.createdBy?.age}{comment?.createdBy?.gender?.charAt(0)}
                            </Typography>
                            <Typography variant="caption">
                                {comment?.createdAt}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Tooltip title="Report Comment" arrow>
                        <ReportOutlined sx={{ cursor: 'pointer' }} />
                    </Tooltip>
                </Stack>
                <Divider orientation='horizontal' flexItem />
                {/* Comment Body */}
                <Stack direction="column" spacing={1} p={2}>
                    <Typography variant='body1' mb={1} sx={{ wordWrap: "break-word" }}>
                        {comment?.description}
                    </Typography>
                    {/* Comment Action Buttons */}
                    <Stack direction="row" spacing={2}>
                        <Stack direction="row">
                            <Typography variant="subtitle1" pr={0.5}>
                                3
                            </Typography>
                            <ThumbUp color='primary' />
                        </Stack>
                        <Stack direction="row">
                            <Typography variant="subtitle1" pr={0.5}>
                                1
                            </Typography>
                            <ThumbDownOutlined />
                        </Stack>
                    </Stack>
                </Stack>
            </Paper>
        </>
    )
}

export default Comment