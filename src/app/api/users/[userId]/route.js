import { User } from "@/models/user";
import { NextResponse } from "next/server"

export async function GET(request,{params}) {
    try{
        const { userId } = params;
       const user = await User.findById(userId)
        return NextResponse.json(user)
    }catch(error){
        return NextResponse.json({
            massage:"Something went wrong"
        })
    }

}
export async function PUT(request,{params}) {
    try{
        const { userId } = params;
        const { name,password,about,profileURL} = await request.json()
        const user = await User.findById(userId);
        user.name = name;
        user.about = about;
        user.password = password;
        user.profileURL = profileURL;
       const updatedUser = await user.save();
        return NextResponse.json(updatedUser)
    }catch(error){
        return NextResponse.json({
            massage:"Something went wrong"
        })
    }

}
export async function DELETE(request,{params}) {
    try{
        const { userId } = params;
        await User.deleteOne({
            _id:userId
        })
        return NextResponse.json({
            massage:"User deleted !!!",
            success:true
        })
    }catch(error){
        return NextResponse.json({
            massage:"Something went wrong"
        })
    }

}