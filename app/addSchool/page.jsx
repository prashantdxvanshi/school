"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
export const dynamic = "force-dynamic";
export default function AddSchoolForm() {
  const router=useRouter();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    contact: "",
    email_id: "",
  });
 const[imageurl,setimageurl]=useState(null);
 const[file,setfile]=useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
   
  };
  const handlefileChange = (e) => {
  const selectedFile = e.target.files[0];
  setfile(selectedFile);
  const url = URL.createObjectURL(selectedFile);
  setimageurl(url);
  };
  
   
  console.log("form data is ",formData)

  const handlesubmit = async (e) => {
    e.preventDefault();
    
    console.log("form data is ",formData)
    try{
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res= await axios.post(`${apiUrl}/api/addSchool`,{formData,imageUrl:imageurl});
    alert(res.data.message);
    if(res.data.message=="School registered successfully"){
      router.push("/showSchool")
    }
    }catch(err){
      console.log("error in try block is ",err);
    }

   
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <div className="relative w-full max-w-2xl p-10 rounded-3xl bg-gradient-to-br from-[#1e293b] to-[#334155] shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/20 transform hover:scale-[1.02] transition-transform duration-500">
        <div className="absolute -top-6 -left-6 w-20 h-20 bg-purple-400/50 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-pink-400/50 rounded-full blur-2xl animate-pulse"></div>

        <h2 className="text-4xl font-extrabold text-white text-center mb-8 drop-shadow-md">
          Register Your School
        </h2>
        <form className="grid grid-cols-2 gap-6" onSubmit={handlesubmit}>
          <input
            type="text"
            name="name"
            placeholder="School Name"
            value={formData.name}
            onChange={handleChange}
            className="col-span-2 p-4 rounded-xl bg-white/20 text-white placeholder-white/70 focus:ring-4 focus:ring-pink-400 focus:outline-none"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="col-span-2 p-4 rounded-xl bg-white/20 text-white placeholder-white/70 focus:ring-4 focus:ring-pink-400 focus:outline-none"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="p-4 rounded-xl bg-white/20 text-white placeholder-white/70 focus:ring-4 focus:ring-pink-400 focus:outline-none"
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className="p-4 rounded-xl bg-white/20 text-white placeholder-white/70 focus:ring-4 focus:ring-pink-400 focus:outline-none"
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            className="p-4 rounded-xl bg-white/20 text-white placeholder-white/70 focus:ring-4 focus:ring-pink-400 focus:outline-none"
          />
        
          <input
            type="file"
            name="image"
           
            value={formData.image}
            onChange={handlefileChange}
            className="p-4 rounded-xl bg-white/20 text-white/70  focus:outline-none"
          />
            
          <input
            type="email"
            name="email_id"
            placeholder="Email"
            value={formData.email_id}
            onChange={handleChange}
            className="col-span-2 p-4 rounded-xl bg-white/20 text-white placeholder-white/70 focus:ring-4 focus:ring-pink-400 focus:outline-none"
          />
          <button
            type="submit"
            className="col-span-2 p-4 mt-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-500"
            
          >
            Submit
          </button>
        </form>
       
      </div>
    </div>
  );
}
