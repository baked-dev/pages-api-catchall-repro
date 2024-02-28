import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default function CatchAllRoute(req: NextRequest) {
  return new Response(req.nextUrl.href);
}
