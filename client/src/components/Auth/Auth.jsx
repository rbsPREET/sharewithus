import { Button, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { AuthModalContext } from '../../context/modals/AuthModalContext'
import Login from './Login'
import Register from './Register'

const Auth = () => {
    // States
    const [userFormData, setUserFormData] = useState({
        username: '', email: '', password: '', confirmPassword: ''
    })

    const { setViewState, viewState } = useContext(AuthModalContext)

    return (
        <>
            <>
                {viewState === 'login' &&
                    <Login />
                }
                {viewState === 'register' &&
                    <Register />
                }
                {viewState === 'restPassword' &&
                    <>
                        <Typography variant='caption'>
                            Rest Password
                        </Typography>
                    </>
                }
            </>
        </>
    )
}

export default Auth