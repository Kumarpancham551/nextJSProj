import { getresponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";


export async function GET(request,{params}){
    try{
        const {taskId} = params;
        const task = await Task.findById(taskId)
      return  NextResponse.json(task)
    }catch(error){
        return getresponseMessage("Error in getting task",404,false)
    }
}



export async function PUT(request,{params}){
    try{
        const {taskId} = params;
        const {title,content,status} = await request.json();

        let task = await Task.findById(taskId)
        task.title = title;
        task.content = content;
        task.status = status;

      const updatedTask = await task.save()

        return NextResponse.json(updatedTask)

    }catch(error){
        return getresponseMessage("error when updating task")
    }
}
export async function DELETE(request,{params}){
    try{
        const {taskId} = params;
        await Task.deleteOne({
            _id:taskId
        })
        return getresponseMessage("Task Deleted",200,true)
    }catch(error){
        return getresponseMessage("error when deleting task") 
    }
}