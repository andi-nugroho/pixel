import { NextResponse } from "next/server";
import { generateRegistryItem } from "@/lib/registry";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ name: string }> },
) {
  const { name } = await params;
  const shaderId = name.replace(/\.json$/, "");

  const registryItem = generateRegistryItem(shaderId);

  if (!registryItem) {
    return NextResponse.json({ error: "Component not found" }, { status: 404 });
  }

  return NextResponse.json(registryItem, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
      "Content-Type": "application/json",
    },
  });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
