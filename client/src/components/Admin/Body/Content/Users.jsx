import React from 'react'
import useFetch from '../../../../hooks/useFetch'
import DataTable from './DataTable'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import axios from 'axios';

const Users = () => {
    const { data, loading, error, reFetch } = useFetch("/users?limit=5")

    const createData = (email, id, username, age, gender, created, permission, status) => {
        return { email, id, username, age, gender, created, permission, status }
    }

    const rows = data.map((user) => (
        createData(user.email, user._id, user.username, user.age, user.gender === "Male" ? "M" : "F", user.createdAt, user.isAdmin ? "ADMIN" : "User", user.status ? <CheckCircleOutlineIcon color="success" /> : <BlockOutlinedIcon color="warning" />)
    ))

    const handleDeletion = async (id) => {
        try {
            const res = await axios.delete(`/categories/${id}`)
            reFetch()
        } catch (error) {
            console.log("Deletion Failed")
        }
    }

    return (
        <DataTable
            headerCells={["Email", "ID", "Username", "Age", "Gender", "Created", "Permission", "Status"]}
            rowsCells={rows}
            handleDeletion={handleDeletion}
        />
    )
}

export default Users