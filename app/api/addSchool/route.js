
import { createConnection } from "@/lib/db.js";
import {NextResponse } from "next/server";
import { z } from "zod";
import {promises as fs} from 'fs';
import { writeFile } from "fs/promises";
import path from 'path';
const zodBodySchema = z.object({
  name: z.string().min(3).max(100),
  address: z.string().min(3).max(100),
  city: z.string().min(3).max(100),
  state: z.string().min(3).max(100),
  contact: z.string().min(10).max(10), 
  email_id: z.string().min(3).max(100).email("Invalid email address"),
  });
export async function POST(req){
  
  // zbodyschema means req.body me data ekdm esa hi or isi hi formate me hona chaiye mtlb phle email ho fir name ho fir password ho
  //  const parsedData=zodBodySchema.Parse(req.body); this check all data as a whole individual error not defined
  const data = await req.json();
  const imageurl=data.imageUrl;
  console.log("imageurl is ",imageurl)

  const body=data.formData;
  console.log("data reached to backend is ",body)
  const parsedData = zodBodySchema.safeParse(body);
  console.log("parsed data is  ",parsedData)
  if (!parsedData.success) {
    return NextResponse.json({ message: "incorrect formate" });
   
  }

const { name,address,city,state,contact,email_id}= body;

 
// const pathcreation=path.join(process.cwd(),'public','uploads');
// await fs.mkdir(pathcreation,{recursive:true});
// // const newfilepath=image.originalFilename;
// // await fs.rename(image.pathcreation,newfilepath)
// await writeFile(pathcreation, buffer);
console.log("addschool end point")
try{
const db=await createConnection();
console.log("db connection created ")
const [rows] = await db.execute(
    'SELECT * FROM addschool WHERE email_id = ? OR name = ?',
    [email_id, name]
  );

  if (rows.length > 0) {
    return NextResponse.json({ message: 'Email or Name already exists!' });
  }

 

const createSchool=await db.query( 'INSERT INTO addSchool (name, address, city, state, contact, email_id,imageurl) VALUES (?, ?, ?, ?, ?, ?,?)',[name, address, city, state, contact, email_id,imageurl])
console.log("this is output of query",createSchool)
}catch(err){
  console.log("error in connection ", err)
}
return NextResponse.json({
    message:"School registered successfully",
    
  })
}