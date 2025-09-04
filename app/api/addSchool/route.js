
import { prisma } from "@/lib/prisma";
import {NextResponse } from "next/server";
import { z } from "zod";


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

const existing = await prisma.school.findFirst({
    where: {
      OR: [{ email_id }, { name }]
    }
  });
console.log("value of existing is ",existing)
  if (existing) {
     return NextResponse.json({ message: 'Email or Name already exists!' });
  }
await prisma.school.create({
  data:{
  name:name,   
  address:address,
  city:city,  
  state:state,
  contact :contact,
  image :imageurl,  
  email_id :email_id
  }
})

  
console.log("created new record");
}catch(err){
  console.log("error in connection ", err)
  return NextResponse.json({
    message:"Internal server error(connection to database)"
  })
}
return NextResponse.json({
    message:"School registered successfully",
    
  })
}