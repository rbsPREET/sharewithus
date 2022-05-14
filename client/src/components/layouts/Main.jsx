import { Container } from '@mui/material'
import React from 'react'
import { AuthProvider } from '../../context/modals/AuthContext'
import { AuthModalProvider } from '../../context/modals/AuthModalContext'
import CategoriesSlider from '../CategoriesSlider'
import Footer from '../Footer'
import Navbar from '../Navbar'

const Main = ({ children }) => {
    return (
        <>
            <Container maxWidth='lg' >
                <Navbar />
                <CategoriesSlider />
                {children}
                <Footer />
            </Container>
        </>
    )
}

export default Main