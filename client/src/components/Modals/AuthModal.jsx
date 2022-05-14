import { Box, Button, Modal, Stack, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { AuthModalContext } from '../../context/modals/AuthModalContext';
import Auth from '../Auth/Auth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AuthModal = () => {
    const { open, dispatch, viewState } = useContext(AuthModalContext)

    const handleClose = () => {
        dispatch({ type: "CLOSE" })
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Stack alignItems='center'>
                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textTransform: 'capitalize' }}>
                            {viewState}
                        </Typography>
                        <Typography component='div' id="modal-modal-description" sx={{ mt: 2 }}>
                            <Auth />
                        </Typography>
                    </Stack>
                </Box>
            </Modal>
        </div>
    )
}

export default AuthModal