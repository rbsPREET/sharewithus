import { Alert, Button, Stack, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import axios from 'axios'
import { CategoryContext } from '../../../../../context/CategoryContext'

const CategoryCreation = () => {
    const [categoryData, setCategoryData] = useState({
        categoryName: ''
    })

    const { category, loading, error, dispatch } = useContext(CategoryContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: "CREATE_CATEGORY" })
        try {
            const res = await axios.post("/categories", categoryData)
            dispatch({ type: "CREATE_CATEGORY_SUCCESS", payload: res.data })
        } catch (error) {
            dispatch({ type: "CREATE_CATEGORY_FAILURE", payload: error.response.data })
        }
    }

    const handleChange = (e) => {
        setCategoryData({ ...categoryData, [e.target.name]: e.target.value })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Stack direction='column' spacing={2} minWidth={350}>
                    <TextField name="categoryName" label="Category Name" onChange={handleChange} variant="outlined" type='text' width="100%" />
                    <Button onClick={handleSubmit} disabled={loading} variant='contained' color='primary' fullWidth>
                        Create
                    </Button>
                    {error &&
                        <Alert severity="error">{error.message}</Alert>
                    }
                    {category &&
                        <Alert severity='success'>{category.categoryName} category created successfully</Alert>
                    }
                </Stack>
            </form>
        </>
    )
}

export default CategoryCreation