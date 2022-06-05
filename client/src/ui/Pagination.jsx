import React, { useContext, useEffect } from 'react'
import { Pagination, PaginationItem } from '@mui/material'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const PaginationUi = ({ linkApiEndpoint, page, count }) => {
    return (
        <Pagination
            count={Number(count) || 0}
            page={Number(page) || 1}
            variant='outlined'
            color='primary'
            renderItem={(item) => (
                <PaginationItem {...item} component={Link} to={`${linkApiEndpoint}?page=${item.page}`} />
            )}
        />
    )
}

export default PaginationUi