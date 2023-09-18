import Comment from "../components/Comment"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'

const PostDetails = () => {
    return (
        <div>
            <Navbar />
            <div className="px-8 md:px-[200px] mt-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-black md:text-3xl">
                        10 uses of Artificial Intelligence in Day to Day life
                    </h1>
                    <div className="flex items-center justify-center space-x-2">
                        <p><BiEdit /></p>
                        <p><MdDelete /></p>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-2 md:mt-4">
                    <p>@atati</p>
                    <div className='flex space-x-2 text-sm'>
                        <p>16/6/2022</p>
                        <p>16:45</p>
                    </div>
                </div>
                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" className="w-full mx-auto mt-8" alt="" />
                <p className="mx-auto mt-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the re;lease of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                <div className="flex items-center mt-8 space-x-4 font-semibold">
                    <p>Categories:</p>
                    <div className="flex justify-center items-center space-x-2">
                        <div className="bg-gray-300 rounded-lg px-3 py-1 ">
                            Tech
                        </div>
                        <div className="bg-gray-300 rounded-lg px-3 py-1 ">
                            Ai
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-4">
                    <h3 className="mt-6 mb-4 font-semibold">Comments</h3>
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
                {/*write a comment*/}
                <div className="w-full flex flex-col mt-4 md:flex-row">
                    <input type="text" placeholder="Write a comment" className="md:w-[80%] outline-none px-4 mt-4 md:mt-0" />
                    <button className="bg-black text-sm text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0">Add comment</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PostDetails
