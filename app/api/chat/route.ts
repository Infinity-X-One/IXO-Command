import { LangChainAdapter } from "ai"
import { ChatOpenAI } from "@langchain/openai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()

  // Initialize the LangChain ChatOpenAI model
  const model = new ChatOpenAI({
    model: "gpt-4o",
    temperature: 0.7,
  })

  // Stream the response using LangChain
  const stream = await model.stream(messages)

  // Convert the LangChain stream to a format compatible with the AI SDK
  return LangChainAdapter.toDataStreamResponse(stream)
}
