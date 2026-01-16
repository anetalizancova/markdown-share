import { NextResponse } from "next/server";
import { getAllMarkdownFiles } from "@/lib/markdown";

export async function GET() {
  try {
    const files = getAllMarkdownFiles();
    return NextResponse.json(files);
  } catch (error) {
    console.error("Error fetching files:", error);
    return NextResponse.json(
      { error: "Error fetching files" },
      { status: 500 }
    );
  }
}
