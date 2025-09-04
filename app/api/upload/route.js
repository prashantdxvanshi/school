import fs from "fs";
import path from "path";
import axios from "axios";

export async function POST(req) {
  const { imageUrl } = await req.json();

  // Download image from Cloudinary to local folder
  const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
  const fileName = `${Date.now()}.jpg`;
  const filePath = path.join(process.cwd(), "public/uploads", fileName);

  fs.writeFileSync(filePath, Buffer.from(response.data, "binary"));

  return new Response(JSON.stringify({ localPath: `/uploads/${fileName}` }), {
    status: 200,
  });
}
