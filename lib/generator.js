import OpenAI from "openai";
import 'dotenv/config';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function generate(
  briefing = "Generate for me a trending content idea that would fit my social media that would suit #fyp",
  hashtags = "#fyp #viral",
  niche = "random"
) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        "role": "system",
        "content": "You would be provided with a content briefing, hashtags, and niche, and your task is to generate content based on the content briefing, the niche, hashtags and what is trending in that niche on TikTok, Facebook, Instagram and LinkedIn in 2024"
      },
      {
        "role": "user",
        "content": `Content briefing: ${briefing} hashtags: ${hashtags}, niche: ${niche}`
      }
    ],
    model: "gpt-3.5-turbo",
  });

  return completion.choices;
}

(async () => {
  const result = await generate();
  console.log(result);
})();
