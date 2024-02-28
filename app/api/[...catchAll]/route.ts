import { NextRequest } from "next/server";

export const runtime = "edge";

export function GET(req: NextRequest) {
  return new Response(req.nextUrl.href);
}
