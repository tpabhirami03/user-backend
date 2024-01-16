const multer=require('multer')

// to store uploading content in to a file in server using multer
// diskstorage -Returns a StorageEngine implementation configured to store files on the local file system.
const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    // not mandatory 
    filename:(req,file,callback)=>{
        let filename=`Image-${Date.now()}-${file.originalname}`
        callback(null,filename)
    }
})

// what type of file has to be formated like pnh,jpg...(which is of mimetype)

const filefilter=(req,file,callback)=>{
    if(file.mimetype==="image/png"||file.mimetype==="image/jpg"|| file.mimetype==="image/jpeg"){
        callback(null,true)
    }
    else{
        callback(null,false)
        return callback(new Error("only .png, .jpeg, .jpg files are allowed "))
    }
   
}

// use config ,other wise it will not work
const multerConfig=multer({
    storage,
    filefilter
})
module.exports=multerConfig

