import { Input, Stack, TextareaAutosize } from '@mui/material';
import React, { useEffect, useState } from 'react'

const ariaLabel = { 'aria-label': 'description' };

const ContentForm = ({ handleContentForm }) => {
    const [contentDetails, setContentDetails] = useState({
        title: '', description: ''
    })


    const handleChange = (e) => {
        handleContentForm(e)

        setContentDetails({
            ...contentDetails,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <Stack direction='column' spacing={2}>
                <Input placeholder='Title (minimum 14 letters)' sx={{ fontSize: '24px' }} inputProps={ariaLabel} fullWidth name='title' value={contentDetails.title} onChange={(e) => handleChange(e)} />
                <TextareaAutosize
                    aria-label="empty textarea"
                    name='description'
                    value={contentDetails.description}
                    onChange={(e) => handleChange(e)}
                    placeholder="Description"
                    style={{ width: '100%', height: '300px', resize: 'none', overflow: 'auto', fontSize: '18px' }}
                />
            </Stack>
        </>
    )
}

export default ContentForm