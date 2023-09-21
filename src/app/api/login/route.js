import { User } from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request){
    const {email,password} = await request.json();
    try{
       const user = await User.findOne({
            email:email
        })
        if(user == null){
            throw new Error("user not found")
        }
        return NextResponse.json({
            message:"success"
        })
    }catch(error){
       return NextResponse.json({
        message:error.message,
        success:false
       },{
        status:500
       })
    }
}