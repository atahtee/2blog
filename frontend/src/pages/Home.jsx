import React, { useContext, useEffect, useState } from 'react'
import HomePosts from '../components/HomePosts'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { URL } from '../url'
import { Link, useLocation } from 'react-router-dom'
import Loader from '../components/Loader'
import { UserContext } from '../context/UserContext'

const Home = () => {

    const { search } = useLocation()
    //console.log(search)
    const [posts, setPosts] = useState([])
    const [noResults, setNoResults] = useState(false)
    const [loader, setLoader] = useState(false)
    const { user } = useContext(UserContext)
    // console.log(user)

    const fetchPosts = async () => {
        setLoader(true)
        try {
            const res = await axios.get(URL + "/api/posts/" + search)
            console.log(res.data)
            setPosts(res.data)
            if (res.data.length === 0) {
                setNoResults(true)
            }
            else {
                setNoResults(false)
            }
            setLoader(false)
        } catch (error) {
            console.log(error)
            setPosts([])
            setLoader(true)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [search])
    const sortedPosts = [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return (
        <>
            <Navbar />
            <div className='px-14 py-10 md:px-[200px] min-h-[80vh] bg-gray-100'>
                {loader ? <div className='h-[40vh] flex-justify-center items-center'><Loader /></div> : !noResults ? sortedPosts.map((post) => (
                    <>
                        <Link to={user ? `/posts/post/${post._id}` : "/login"}>
                            <HomePosts key={post._id} post={post} />
                        </Link>
                    </>
                )) : <h3 className='text-center font-bold mt-16'> No Posts Available </h3>}
            </div>
        </>
    )
}

export default Home

