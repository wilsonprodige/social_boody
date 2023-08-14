import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import multer from 'multer'
const app = express();




//ALL ROUTES
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import commentRoutes from "./routes/comments.js"
import likeRoutes from "./routes/likes.js"
import authRoutes from "./routes/auth.js"

//middlewares
// app.use((req,res,next)=>{
//     if(!res.header){
//     res.header("Access-Control-Allow-Credentials",true)
//     }
//     next()
// })
app.use(express.json())
app.use(cors({
    origin:"http://localhost:8080",
    credentials: true,
}))
app.use(cookieParser())

//setting an api for multer to upload files
const storage = multer.diskStorage({
    destination: function(req, file,cb){
        cb(null,'../client/public/upload')
    },
    filename: function (req,file,cb){
        cb(null,Date.now()+file.originalname)
    }
})

const upload = multer({ storage:storage })

app.post("/api/upload",upload.single("file"),(req,res)=>{
    const file = req.file;
    res.status(200).json({file_name:file.filename});
})

//app.use(express.json())

app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/likes", likeRoutes)
app.use("/api/auth", authRoutes)



app.listen(8000,()=>{
    console.log("server running on port 8000")
})