import express from 'express'
const app=express();
const PORT = 8080;

app.use(express.json())

app.get("/server",(req, res)=>{
    res.send({
        message:"HELLO"
    })
})

app.listen(PORT,()=>{
    console.log(`server is running on PORT:${PORT}`)
})