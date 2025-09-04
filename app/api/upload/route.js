import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req) {
  try {
    const data = await req.formData();
    const file = data.get("file");

    if (!file) {
      return NextResponse.json({ message: "No file found", success: false });
    }

    // Convert file to buffer
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);

    // Save in public/uploads folder
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    const filePath = path.join(uploadDir, file.name);

    await writeFile(filePath, buffer);

    return NextResponse.json({
      message: "File uploaded successfully",
      success: true,
      path: `/uploads/${file.name}`,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ message: "Upload failed", error: error.message, success: false }, { status: 500 });
  }
}
