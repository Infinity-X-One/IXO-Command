"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { BotCard } from "@/components/bots/bot-card"

interface BotsProps {
  onDeployBot: () => void
}

export function Bots({ onDeployBot }: BotsProps) {
  const bots = [
    {
      id: "1",
      name: "SiteBuilder",
      role: "Website Generator",
      status: "active",
      lastAction: "Generated landing page",
      apiKey: "sk-site-***",
      icon: "🌐",
    },
    {
      id: "2",
      name: "CodeGen",
      role: "Code Generator",
      status: "active",
      lastAction: "Refactored API endpoints",
      apiKey: "sk-code-***",
      icon: "🧱",
    },
    {
      id: "3",
      name: "EmailResponder",
      role: "Email Assistant",
      status: "paused",
      lastAction: "Awaiting new emails",
      apiKey: "sk-email-***",
      icon: "📩",
    },
    {
      id: "4",
      name: "Trader",
      role: "Trading Assistant",
      status: "active",
      lastAction: "Analyzing market data",
      apiKey: "sk-trade-***",
      icon: "📊",
    },
    {
      id: "5",
      name: "ResearchAgent",
      role: "Research Assistant",
      status: "error",
      lastAction: "API rate limit exceeded",
      apiKey: "sk-research-***",
      icon: "🧠",
    },
    {
      id: "6",
      name: "ContentWriter",
      role: "Content Generator",
      status: "active",
      lastAction: "Writing blog post",
      apiKey: "sk-content-***",
      icon: "🧾",
    },
    {
      id: "7",
      name: "ChatAssistant",
      role: "Customer Support",
      status: "active",
      lastAction: "Answering customer queries",
      apiKey: "sk-chat-***",
      icon: "💬",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Bots</h2>
        <Button onClick={onDeployBot} className="bg-lime-500 hover:bg-lime-600 text-black">
          <Plus className="mr-2 h-4 w-4" /> Deploy New Bot
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} />
        ))}
      </div>
    </div>
  )
}
