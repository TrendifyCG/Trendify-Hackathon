import generateContent from "@/app/_lib/generateContent";
import { StreamingTextResponse } from "ai";

export const runtime = "edge";

export async function POST(req) {
  try {
    const { briefing, maximumLength, hashtags, niches } = await req.json();
    const generatedContent = await generateContent(
      briefing,
      maximumLength,
      hashtags,
      niches
    );

    // console.log("stream: ", stream);
    // return stream;
    return new Response(JSON.stringify({ content: generatedContent }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
