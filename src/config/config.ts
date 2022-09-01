import dotenv from 'dotenv'

 dotenv.config();

 const PORT = process.env.PORT || 1313;

 export const config ={
    server:{
        port: PORT
    }
 }