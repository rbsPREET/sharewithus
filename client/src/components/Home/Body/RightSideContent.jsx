import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import SectionCard from '../../layouts/Home/SectionCard'
import { questionsList } from '../Header/newquestionsData'

const RightSideContent = () => {
    return (
        <Box>
            <SectionCard header="Most Viewed Posts Today" >
                <Stack direction='row' spacing={1} mb={1}>
                    <Button fullWidth sx={{ p: 1 }} size='small' variant='contained'>Today</Button>
                    <Button fullWidth sx={{ p: 1 }} size='small' variant='contained'>This Week</Button>
                    <Button fullWidth sx={{ p: 1 }} size='small' variant='contained'>This Month</Button>
                </Stack>
                <Stack direction='column'>
                    {questionsList.filter((item, index) => index < 5).map((question, index) => (
                        <Stack key={question._id} direction='row' alignItems='center' gap={1} sx={{ cursor: 'pointer', ":hover": { bgcolor: '#f3f3f3' } }} >
                            <Typography variant='h4'>
                                <strong>{index + 1}</strong>
                            </Typography>
                            <Typography variant='subtitle2'>
                                {question.title}
                            </Typography>
                            <Typography variant='caption'>
                                ({question.creator.name}, {question.creator.age}{question.creator.gender})
                            </Typography>
                        </Stack>
                    ))}
                </Stack>
            </SectionCard>
        </Box >
    )
}

export default RightSideContent