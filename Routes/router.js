// import express

const express=require('express')
const userController=require('../controllers/userController')


const multerConfig=require('../middleware/multermiddleware')
// using express create an object for router class

const router=new express.Router()

router.post('/add',multerConfig.single("profile"),userController.addUser)

router.get('/get/allusers',userController.getallUsers)

router.delete('/delete/user/:id',userController.deleteUser)

router.put('/edit/user/:id',multerConfig.single("profile"),userController.editUser)

module.exports=router


