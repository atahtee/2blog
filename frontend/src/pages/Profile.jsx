import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ProfilePosts from '../components/ProfilePosts'
import axios from 'axios'
import { URL } from '../url'
import { UserContext } from '../context/UserContext'
import { useNavigate, useParams } from 'react-router-dom'

const Profile = () => {
    const param = useParams().id
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])
    const [updated,setUpdated]=useState(false)

    const fetchProfile = async () => {
        try {
            const res = await axios.get(URL + "/api/users/"._id)
            setUsername(res.data.username)
            setEmail(res.data.email)
        } catch (error) {
            console.log(error)
        }
    }

    const handleUserUpdate = async () => {
        setUpdated(false)
        try {
            const res = await axios.put(URL + "/api/users/"+user._id,{username,email,password},{withCredentials:true})
            //console.log(res.data)
            setUpdated(true)
        } catch (error) {
            console.log(error)
            setUpdated(false)
        }
    }

    const handleUserDelete = async () => {
        try {
            const res = await axios.delete(URL + "/api/users/"+user._id,{withCredentials:true})
            setUser(null)
            navigate("/")
            //console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchUserPosts = async () => {
        try {
            const res = await axios.get(URL + "/api/posts/user/"+user._id)
            setPosts(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchProfile()
    }, [param])

    useEffect(() => {
        fetchUserPosts()
    },[param])
    return (
        <div>
            <Navbar />
            <div className='px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:items-start items-start'>
                <div className='flex flex-col md:w-[70%] w-full'>
                    <h1 className='text-xl font-bold mb-4'>Your Posts</h1>
                    {posts?.map((p)=>{
                        <ProfilePosts key={p._id} p={p}/>
                    })}
                </div>
                <div className='md:sticky md:top-16 flex justify-start md:justify-end items-start md:w-[30%] w-full md:items-end'>
                    <div className='flex flex-col space-y-4 items-start '>
                        <h1 className='text-xl font-bold mb-4'>Profile</h1>
                        <input onChange={(e) => setUsername(e.target.value)} value={username} className='outline-none px-4 py-2 text-gray-500' placeholder='Your username' type='text' />
                        <input onChange={(e) => setEmail(e.target.value)} value={username} className='outline-none px-4 py-2 text-gray-500' placeholder='Your email' type='email' />
                        {/* <input onChange={(e) => setPassword(e.target.value)} value={password} className='outline-none px-4 py-2 text-gray-500' placeholder='Your password' type='password' /> */}
                        <div className='flex items-center space-x-4 mt-8'>
                            <button onClick={handleUserUpdate} className='text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400'>Update</button>
                            <button onClick={handleUserDelete} className='text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400'>Delete</button>
                        </div>
                        {updated && <h3 className='text-green-500 text-sm text-center mt-4'>User Updated successfully</h3>}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile