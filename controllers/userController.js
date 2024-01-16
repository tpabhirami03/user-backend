

const users=require('../Modals/userSchema')


// for controlling requests that come from the front end 
exports.addUser=async(req,res)=>{
    
    req.file
    console.log('inside add user function');
    const {fname,lname,email,mobile,gender,status,location}=req.body
    try{

        const preuser=await users.findOne({email})
        if(preuser){
            res.status(406).json("user already exist")
        }
        else{
            const newUser=new users({
                fname,lname,email,mobile,gender,status,profile:req.file.filename,location
            })
            await newUser.save()
            res.status(200).json(newUser)
        }

    }catch(err){
        res.status(401).json("Error:"+err)
    }
}

exports.getallUsers=async(req,res)=>{

    const search =req.query.search

    const query={
        fname:{$regex:search,$options:"i"}
    }
    
    try{
        const allusers=await users.find(query)
        res.status(200).json(allusers)
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.deleteUser=async(req,res)=>{

    const {id}=req.params
    try{
        const removeData=await users.findByIdAndDelete({_id:id})
        res.status(200).json(removeData)
    }catch(err){
        res.status(401).json(err)
    }
}


exports.editUser=async(req,res)=>{
    const{id}=req.params
    const{fname,lname,email,mobile,gender,status,location,profile}=req.body
    const file=req.file?req.file.filename:profile

    try{
        const updateUser=await users.findByIdAndUpdate({_id:id},{
            fname,lname,email,mobile,gender,status,profile:file,location
        },{new:true})

        await updateUser.save()
        res.status(200).json(updateUser)

    }catch(err){
        res.status(401).json(err)
    }
}


