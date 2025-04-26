import { openai } from '@ai-sdk/openai';
import { generateObject, streamText } from 'ai';
import {NextResponse} from 'next/server';
import {z} from 'zod';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await generateObject({
    model: openai('gpt-4o'),
    messages,
    schema: z.object({
      query: z.string(),
    }),
  });

  return NextResponse.json({
    query: result.object.query,
  });
}