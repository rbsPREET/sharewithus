import React from 'react'
import AdminTips from '../components/Home/AdminTips'
import Body from '../components/Home/Body'
import Header from '../components/Home/Header'
import Main from '../components/layouts/Main'

const Home = () => {
    return (
        <Main>
            <Header />
            <AdminTips />
            <Body />
        </Main>
    )
}

export default Home