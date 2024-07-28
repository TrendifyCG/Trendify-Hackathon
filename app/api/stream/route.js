import { NextResponse } from "next/server";
import { parse } from "url";

export function GET(req) {
  const { query } = parse(req.url, true);
  const briefing = query.brief
    ? JSON.parse(decodeURIComponent(query.brief))
    : [];

  return new NextResponse(streamData(briefing), {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}

async function* streamData(briefing) {
  const encoder = new TextEncoder();
  let index = 0;

  while (index < briefing.length) {
    yield encoder.encode(`data: ${JSON.stringify(briefing[index++])}\n\n`);
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  yield encoder.encode("data: [DONE]\n\n");
}
