import {openai} from "@ai-sdk/openai";
import {generateText} from "ai";
import {NextResponse} from "next/server";


export async function POST(req: Request) {
  const { prompt } = await req.json();

  const { text } = await generateText({
    model: openai('gpt-4o'),
    prompt: prompt,
  });

  return NextResponse.json({
    text,
  });
}