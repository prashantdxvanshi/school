import { NextResponse } from "next/server";
import { createConnection } from "@/lib/db.js";

export async function GET(req){
   const db=await createConnection();
   const queryforall="SELECT * FROM addschool"
    const [rows]=await db.query(queryforall);
    console.log("in backend data is ",rows)
return NextResponse.json({
    message:"showshool endpoint",
    allregisteredschool:rows
 })
}