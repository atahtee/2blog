import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import { ImCross } from 'react-icons/im'
import { UserContext } from '../context/UserContext'
import { URL } from '../url'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {

    const [title,setTitle] = useState("")
    const [desc,setDesc]=useState("")
    const [file,setFile]=useState(null)
    const {user} = useContext(UserContext)
    const [cat, setCat] = useState("");
    const [cats, setCats] = useState([]);

    const navigate=useNavigate()

    const deleteCategory=(i)=>{ 
        let updatedCats=[...cats]
        updatedCats.splice(i)
        setCats(updatedCats)
    }

    function randomImageUrl (){}
    const addCategory = () => {
        let updatedCats = [...cats]
        updatedCats.push(cat)
        setCats(updatedCats)
    }
    const handleCreate=async(e)=>{
        e.preventDefault()
        const post={
            title,
            desc,
            username:user.username,
            userId:user._id,
            // categories:cats
        }

        if (!file) {
            // If the user hasn't selected an image, use a random image URL 
           // const randomImageUrl = 'http://localhost:5000/images/random1.jpg';
            //post.photo = randomImageUrl;
        } else {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("img", filename);
            data.append("file", file);
            post.photo = filename;
    
            // Image upload
            try {
                const imgUpload = await axios.post(URL + "/api/upload", data);
                // console.log(imgUpload.data)
            } catch (error) {
                console.log(error);
            }
        }
        // console.log(post)
        //post upload
        try {
            const res = await axios.post(URL + "/api/posts/create",post,{withCredentials:true})
            navigate("/posts/post/"+res.data._id)
            // console.log(res.data)
        } catch (error) {
            console.log(error)
        }
     

    }
    return (
        <div>
            <Navbar />
            <div className='px-6 md:px-[200px] mt-8'>
                <h1 className='font-bold md:text-2xl text-xl'>Create a post</h1>
                <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
                    <input onChange={(e)=>setTitle(e.target.value)} type='text' placeholder='Enter post title' className='px-4 py-2 outline-none' />
                    <input onChange={(e)=>setFile(e.target.files[0])} type='file' className='px-4' />
                    <div className='flex flex-col'>
                        <div className='flex items-center space-x-4 md:space-x-8'>
                            <input value={cat} onChange={(e) => setCat(e.target.value)} className='px-4 py-2 outline-none' placeholder='Enter post category' type='text' />
                            <div onClick={addCategory} className='bg-black text-white px-4 py-2 font-semibold cursor-pointer'>Add</div>
                        </div>

                                           </div>
                    <textarea onChange={(e)=>setDesc(e.target.value)} rows={15} cols={30} className='px-4 py-2 outline-none' placeholder='Enter post description' />
                    <button onClick={handleCreate} className='bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg'>Create</button>
                </form>
            </div>
        </div>
    )
}

export default CreatePost


