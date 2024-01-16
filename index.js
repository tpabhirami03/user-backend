// import dotenv file

require('dotenv').config()

// import mongodb connection file

require('./DB-connection/connection')

// create server,use express package

const express=require('express')

// import router
const router=require('./Routes/router')

// import cors

const cors=require('cors')

// create server using express

const emsserver=express()

// use cors in server app

emsserver.use(cors())



// parse json data using server app

emsserver.use(express.json())

// use router in server application

emsserver.use(router)
   
emsserver.use('/uploads',express.static('./uploads'))

// customize port for server

const PORT=4000||process.env.PORT

// to run server app use listen()

emsserver.listen(PORT,()=>{
    console.log(`ems server started at port :  ${PORT}`);
})

// to resolve request

// emsserver.post('/',(req,res)=>{
//     res.send(`<h1>ems server started at port 4000</h1>`)
// })
