import app from './app.js';
import cloudinary from 'cloudinary'

//cloudinary set up cloudinary
cloudinary.v2.config({
   cloud_name: process.env.CLOUDNARY_CLIENT_NAME,
   api_key: process.env.CLOUDNARY_CLIENT_API,
   api_secret: process.env.CLOUDNARY_CLIENT_SECRET,
})

app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT}`);
    
})