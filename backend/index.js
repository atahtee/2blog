const express = require('express');
const app = express()
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const cors = require('cors')
const multer = require('multer')
const cookieParser=require('cookie-parser')
const path = require('path')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const commentRoute = require('./routes/comments')

//AddType text/javascript .js
//database
const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database has been connected successfully")
    } catch (err) {
       console.log(err) 
    }
}

//middleware
dotenv.config()
app.use(express.json())
app.use("/images",express.static(path.join(__dirname,"/images")))
app.use(cors(
    {
    origin: 'https://2blog-atahtee.vercel.app',
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials:true}
    ))
app.use(cookieParser())
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/comments', commentRoute)

// app.get("/", (req, res) => {
//     res.json("Hello")
// })

//image upload
const storage = multer.diskStorage({
   destination:(req,file,fn)=>{
    fn(null,"images")
   } ,
   filename:(req,file,fn)=>{
     fn(null,req.body.img)
    // fn(null,"image1.jpg")
   }
})

const upload=multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("Your image has been successfully!")
})

app.listen(process.env.PORT, ()=>{
    connectDB()
    console.log("App is running on port " + process.env.PORT)
})

