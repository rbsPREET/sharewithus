import { Box, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import CategoriesList from './Content/Categories/CategoriesList'
import CategoryCreation from './Content/Categories/CategoryCreation'
import AwaitingApprovalPosts from './Content/Posts/AwaitingApprovalPosts'
import Users from './Content/Users'

const AdminContent = ({ selector }) => {

    useEffect(() => {
        console.log(selector)
    }, [selector])
    return (
        <Box flexBasis={2}>
            <Stack direction='column'>
                {selector === "users" && <Users />}
                {selector === "categoriesList" && <CategoriesList />}
                {selector === "createCategory" && <CategoryCreation />}
                {selector === "awaitingApprovalPosts" && <AwaitingApprovalPosts />}
            </Stack>
        </Box>
    )
}

export default AdminContent