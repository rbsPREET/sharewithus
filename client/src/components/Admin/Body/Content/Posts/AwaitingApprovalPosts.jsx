import BlockOutlined from '@mui/icons-material/BlockOutlined'
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline'
import axios from 'axios'
import React, { useState } from 'react'
import useFetch from '../../../../../hooks/useFetch'
import DataTable from '../DataTable'

const AwaitingApprovalPosts = () => {
    const { data, loading, error, reFetch } = useFetch("/posts/admin/getall")
    const [status, setStatus] = useState(false)

    const createData = (id, category, title, createdBy, createdAt, status) => {
        return { id, category, title, createdBy, createdAt, status }
    }

    const rows = data?.data?.map((post) => (
        createData(post._id, post.categoryId.categoryName, post.title, post.createdBy.username, post.createdAt, post.status)
    ))

    const handleDeletion = async (id) => {
        try {
            const res = await axios.delete(`/posts/${id}`)
            reFetch()
        } catch (error) {
            console.log("Deletion Failed")
        }
    }

    const handleStatus = async (id) => {
        setStatus(prev => !prev)
        try {
            const res = await axios.patch(`/posts/${id}`, { status })
            reFetch()
        } catch (error) {
            console.log("Status Update Failed")
        }
    }

    return (
        <DataTable
            headerCells={["ID", "Category", "Title", "CreatedBy", "CreatedAt", "Status"]}
            rowsCells={rows}
            handleDeletion={handleDeletion}
            handleStatus={handleStatus}
        />
    )
}

export default AwaitingApprovalPosts