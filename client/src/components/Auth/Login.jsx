import { Alert, Button, Stack, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/modals/AuthContext'
import { AuthModalContext } from '../../context/modals/AuthModalContext'
import InputField from './InputField'
import axios from 'axios'

const Login = () => {
    const { setViewState, viewState, dispatch: modalDispatch } = useContext(AuthModalContext)
    const { user, loading, error, dispatch } = useContext(AuthContext)

    const [showPassword, setShowPassword] = useState(false)
    const [userFormData, setUserFormData] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        console.log(userFormData)
    }, [userFormData])

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN" })
        try {
            const res = await axios.post("/auth/login", userFormData)
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
            modalDispatch({ type: "CLOSE", payload: { open: false } })
        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE", payload: error.response.data })
        }
    }

    const handleChange = (e) => {
        setUserFormData({ ...userFormData, [e.target.name]: e.target.value })
    }

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev)
    }

    return (
        <>
            <Stack direction='column' spacing={2} mt={1}>
                <InputField name='email' label='Email Address' handleChange={handleChange} type='email' />
                <InputField name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                <Button onClick={handleSubmit} disabled={loading} variant='contained' color='primary' fullWidth>
                    Sign In
                </Button>
                {error &&
                    <Alert severity="error">{error.message}</Alert>
                }
                <Typography variant='body2' color='primary' sx={{ cursor: 'pointer' }} onClick={() => setViewState("register")}>
                    Create an account on ShareWithUs
                </Typography>
                <Typography component='div' variant='body2'>
                    Forgot password?&nbsp;
                    <Typography component='span' variant='body2' sx={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => setViewState("restPassword")}>
                        click here to rest
                    </Typography>
                </Typography>
            </Stack>
        </>
    )
}

export default Login