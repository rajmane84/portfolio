import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "rajmane84";

  const chartUrl = `https://ghchart.rshah.org/${username}`;

  try {
    const response = await axios.get(chartUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; Portfolio/1.0)",
      },
    });

    let svg: string = response.data;

    return new NextResponse(svg, {
      status: 200,
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    return NextResponse.json(
      { error: "Failed to fetch contributions" },
      { status: 500 },
    );
  }
}