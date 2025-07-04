import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { createClient } from "@/lib/supabase/server";

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    // Verify user is authenticated
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return new Response("Unauthorized", { status: 401 });
    }

    const { messages, userName } = await req.json();

    // Create the system message for Astra
    const systemMessage = {
      role: "system" as const,
      content: `You are Astra, a kind, wise, and slightly playful mentor helping a child named ${userName || 'there'} learn real-world life skills. Always respond with encouragement, open-ended questions, and emotional intelligence. Keep your responses concise (2-3 sentences max) and age-appropriate for children aged 8-13. Use simple language and be warm and supportive. Include emojis occasionally to make the conversation more engaging for children.`
    };

    const result = await streamText({
      model: openai("gpt-4o"),
      messages: [systemMessage, ...messages],
      temperature: 0.7,
      maxTokens: 150,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response("Failed to process message", { status: 500 });
  }
}