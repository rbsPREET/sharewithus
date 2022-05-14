import React, { useEffect } from 'react'
import useFetch from '../../../../../hooks/useFetch'
import DataTable from '../DataTable'
import axios from 'axios'

const CategoriesList = () => {
    const { data, loading, error, reFetch } = useFetch("/categories?limit=5")

    const createData = (name, id, postsLength, created) => {
        return { name, id, postsLength, created }
    }

    const rows = data.map((category) => (
        createData(category.categoryName, category._id, category.posts.length, category.createdAt)
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
            headerCells={["Name", "ID", "Posts", "Created"]}
            rowsCells={rows}
            handleDeletion={handleDeletion}
        />
    )
}

export default CategoriesList