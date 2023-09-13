import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server"

connectDb();
export async function GET(request) {
   try{
    const users = await User.find()
    return NextResponse.json(users);
   }catch(error){
    return NextResponse.json({
        message: "Fail to get user"
    })
   }

}
export async function POST(request) {
    try {
        const { name, email, password, about, profileURL } = await request.json();
        const user = new User({ name, email, password, about, profileURL })
        const createdUser = await user.save()
        const response = NextResponse.json(user, {
            status: 201
        });
        return response;
    } catch (error) {
        return NextResponse.json({
            message: "something went wrong"
        })
    }
}


export function DELETE(request) {
    console.log("delete api called");
    return NextResponse.json({
        massage: "deleted",
        status: true
    })

}
export function PUT() {

}

   