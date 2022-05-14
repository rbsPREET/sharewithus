import { Stack } from '@mui/material'
import React, { useState } from 'react'
import AdminContent from './Body/AdminContent'
import AdminSidebar from './Body/AdminSidebar'

const Body = () => {
    const [selector, setSelector] = useState("users")

    return (
        <Stack direction='row' spacing={5}>
            <AdminSidebar setSelector={setSelector} selector={selector} />
            <AdminContent selector={selector} />
        </Stack>
    )
}

export default Body