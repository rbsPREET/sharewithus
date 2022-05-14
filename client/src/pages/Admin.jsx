import React from 'react'
import Body from '../components/Admin/Body'
import Header from '../components/Admin/Header'
import Main from '../components/Admin/Main'
import { CategoryProvider } from '../context/CategoryContext'

const Admin = () => {
    return (
        <CategoryProvider>
            <Main>
                <Header />
                <Body />
            </Main>
        </CategoryProvider>
    )
}

export default Admin