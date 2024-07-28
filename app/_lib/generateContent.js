import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function generateContent(
  briefing,
  maximumLength = 300,
  hashtags = "",
  niches = []
) {
  const hashtagsArray = hashtags
    .split(" ")
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0);

  const nichesString = niches.join(", ");

  const prompt = `
    Generate highly engaging and shareable content ideas that can effortlessly trend across all social media platforms in 2024, including TikTok, Facebook, Instagram, LinkedIn, and more. Using the provided Content briefing, required Niches and Hashtags(for more details), create content that resonates with diverse audiences, sparks conversations, and has a high potential to go viral. If hashtags are provided, seamlessly integrate them into the content to amplify its discoverability and reach. At the end of the content, include relevent hashtags that will also boost the content. Ensure the generated content does not exceed ${maximumLength} characters, excluding the hashtags.

    Content briefing: ${briefing}
    Niches: ${nichesString}
    Hashtags: ${hashtagsArray.join(", ")}
    Maximum Length: ${maximumLength}
  `;

  const completion = await openai.chat.completions.create({
    // stream: true,
    messages: [
      {
        role: "system",
        content:
          "You are an AI that generates social media content based on a briefing, niches, and optional hashtags.",
      },
      { role: "user", content: prompt },
    ],
    model: "gpt-3.5-turbo",
  });

  // const stream = OpenAIStream(response);
  // return new StreamingTextResponse(stream);

  return completion.choices[0].message.content;
}
