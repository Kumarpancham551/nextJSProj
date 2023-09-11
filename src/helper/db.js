import mongoose from "mongoose"
export const connectDb = async ()=>{
 try{
    const {connection} = await mongoose.connect(process.env.MONGO_DB_URL,{
        dbName:'work_manager'
    })
    console.log("db connection");
//    const uuser = new User({
//         name:"test name",
//         email:"test@gmail.com",
//         password:"testpassword",
//         about:"this is testing"
//     })
//     await uuser.save();
  //  console.log("connection with host ",connection.host)
 }catch(error){
console.log("Fail to connecvt with database ");
console.log(error)
 }
}