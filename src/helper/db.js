import mongoose from "mongoose"
export const connectDb = async ()=>{
 try{
    const {connection} = await mongoose.connect(process.env.MONGO_DB_URL,{
        dbName:'work_manager'
    })
    console.log("db connection");
 }catch(error){
console.log("Fail to connect with database ");
console.log(error)
 }
}