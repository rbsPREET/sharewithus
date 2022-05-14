import { Alert, Button, Stack, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/modals/AuthContext'
import { AuthModalContext } from '../../context/modals/AuthModalContext'
import InputField from './InputField'
import axios from 'axios'
import SelectField from './SelectField'

const Register = () => {
    const { setViewState, viewState, dispatch: modalDispatch } = useContext(AuthModalContext)
    const { user, loading, error, dispatch } = useContext(AuthContext)

    const [showPassword, setShowPassword] = useState(false)
    const [userFormData, setUserFormData] = useState({
        username: '', email: '', password: '', confirmPassword: '', age: 18, gender: 'Male'
    })

    const MAX_AGE = 90
    const MIN_AGE = 18
    let ages = []
    for (let i = MIN_AGE; i <= MAX_AGE; i++) {
        ages.push(i)
    }

    useEffect(() => {
        console.log(userFormData)
    }, [userFormData])

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: "REGISTER" })
        try {
            const res = await axios.post("/auth/register", userFormData)
            dispatch({ type: "REGISTER_SUCCESS", payload: res.data })
            modalDispatch({ type: "CLOSE", payload: { open: false } })
        } catch (error) {
            dispatch({ type: "REGISTER_FAILURE", payload: error.response.data })
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
            <form onSubmit={handleSubmit}>
                <Stack direction='column' spacing={2} mt={1}>
                    <InputField name='username' label='Username' handleChange={handleChange} type='text' />
                    <InputField name='email' label='Email Address' handleChange={handleChange} type='email' />
                    <InputField name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                    <InputField name='confirmPassword' label='Confirm Password' handleChange={handleChange} type='password' />
                    <SelectField name='age' label='Age' handleChange={handleChange} type='select' data={ages} value={userFormData.age} />
                    <SelectField name='gender' label='Gender' handleChange={handleChange} type='select' data={["Male", "Female"]} value={userFormData.gender} />
                    <Button onClick={handleSubmit} disabled={loading} variant='contained' color='primary' fullWidth>
                        Sign Up
                    </Button>
                    {error &&
                        <Alert severity="error">{error.message}</Alert>
                    }
                    <Typography variant='body2' color='primary' sx={{ cursor: 'pointer' }} onClick={() => setViewState("login")}>
                        Already have an account?
                    </Typography>
                </Stack>
            </form>
        </>
    )
}

export default Register