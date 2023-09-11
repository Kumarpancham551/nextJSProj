import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server"

connectDb();
export function GET(request) {
    const users = [
        {
            name: "pancham",
            phone: "24252",
            course: "JAVA"
        },
        {
            name: "pranav",
            phone: "24252",
            course: "node"
        },
        {
            name: "divyang",
            phone: "24252",
            course: "react"
        }
    ]
    return NextResponse.json(users);
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