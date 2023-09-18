
import { getresponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task"
import { NextResponse } from "next/server";


export async function GET(request){
    try{
        const getdat = await Task.find();
        return NextResponse.json(getdat,{
            status:200
           })
    }catch(error){
        return getresponseMessage("Error in getting data ",404,false)
    }
}

export async function POST(request){
    try{
        const {title,content,userId} = await request.json()
        const task = new Task({title,content,userId});
       const createdTask = await task.save()
       return NextResponse.json(createdTask,{
        status:201
       })
    }catch(error){
        return NextResponse.json({
            message: "something went wrong"
        })
    }
}