import { NextResponse } from "next/server";


export function GET(request){
    return NextResponse.json({
        message:"Works api getting done"
    })
}