import { DriveFolderUploadOutlined } from '@mui/icons-material';
import { Input, Stack, TextareaAutosize, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const ariaLabel = { 'aria-label': 'description' };

const ContentForm = ({ postDataTemp, setPostDataTemp, handleContentForm }) => {
    const [contentDetails, setContentDetails] = useState({
        title: '', description: '', imageURL: ''
    })

    const handleChange = (e) => {
        handleContentForm(e)

        if (e.target.name === "imageURL") {
            // handle temp content data
            setPostDataTemp({
                ...postDataTemp,
                [e.target.name]: e.target.files[0]
            })

            setContentDetails({
                ...contentDetails,
                [e.target.name]: e.target.files[0]
            })
        } else {
            // handle temp content data
            setPostDataTemp({
                ...postDataTemp,
                [e.target.name]: e.target.value
            })

            setContentDetails({
                ...contentDetails,
                [e.target.name]: e.target.value
            })
        }
    }

    useEffect(() => {
        setContentDetails({
            ...contentDetails,
            title: postDataTemp.title,
            description: postDataTemp.description,
            imageURL: postDataTemp.imageURL
        })
    }, [contentDetails, postDataTemp])

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
                <Typography component="label" htmlFor='file' sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    Image: <DriveFolderUploadOutlined />
                </Typography>
                <input
                    type='file'
                    id='file'
                    name='imageURL'
                    onChange={(e) => handleChange(e)}
                    style={{ display: 'none' }}
                />
                {contentDetails.imageURL && (
                    <img src={URL.createObjectURL(contentDetails.imageURL)} alt="imageURL" />
                )}
            </Stack>
        </>
    )
}

export default ContentForm