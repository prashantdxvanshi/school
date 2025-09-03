import { PrismaClient } from "@/app/generated/prisma";
import { NextResponse } from "next/server";


export async function GET(req){
 const client=new PrismaClient();
const schools = await client.school.findMany();
return NextResponse.json({
    message:"showshool endpoint",
    allregisteredschool:schools
 })
}