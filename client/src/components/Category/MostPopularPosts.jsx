import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import useFetch from '../../hooks/useFetch'
import { questionsList } from '../Home/Header/newquestionsData'
import SectionCard from '../layouts/Home/SectionCard'

const MostPopularPosts = ({ categoryId }) => {
    const { data, loading, error } = useFetch(`/categories/${categoryId}/popular`)

    return (
        <SectionCard header="Most Popular Posts Today">
            <Stack direction='row' spacing={1} mb={1}>
                <Button fullWidth sx={{ p: 1 }} size='small' variant='contained'>Today</Button>
                <Button fullWidth sx={{ p: 1 }} size='small' variant='contained'>This Week</Button>
                <Button fullWidth sx={{ p: 1 }} size='small' variant='contained'>This Month</Button>
            </Stack>
            <Stack direction='column'>
                {loading ? ("Loading...") : (data?.map((post, index) => (
                    <Stack key={post._id} direction='row' justifyContent="space-between" alignItems='center' gap={1} sx={{ cursor: 'pointer', ":hover": { bgcolor: '#f3f3f3' } }} >
                        <Stack direction="row" alignItems="center" spacing={1} maxWidth="70%">
                            <Typography variant='h4'>
                                <strong>{index + 1}</strong>
                            </Typography>
                            <Typography variant='subtitle2' noWrap>
                                {post?.title}
                            </Typography>
                        </Stack>
                        <Stack direction="row" maxWidth={"50%"}>
                            <Typography variant='caption' maxWidth="50%" noWrap>
                                ({post?.createdBy?.username}
                            </Typography>
                            <Typography variant='caption' width="50%">
                                &nbsp;,{post?.createdBy?.age}{post?.createdBy?.gender.charAt(0)})
                            </Typography>
                        </Stack>
                    </Stack>
                )))}
            </Stack>
        </SectionCard >
    )
}

export default MostPopularPosts