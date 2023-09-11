import { NextResponse } from "next/server"
export function DELETE(request) {
    console.log("delete api called");
    return NextResponse.json({
        massage:"testing delted",
        status:true
    })

}