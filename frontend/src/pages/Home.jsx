import React from 'react'
import HomePosts from '../components/HomePosts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
         <Navbar />
            <div className='px-14 py-10 md:px-[200px]'>
                <HomePosts />
                <HomePosts />
                <HomePosts />
                <HomePosts />
            </div>
            <Footer />
        </>
    )
}

export default Home