"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Message = {
  id: string
  content: string
  sender: "user" | "system"
  timestamp: Date
}

export function CommandConsole() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "FinSynapse Control Console initialized. Type 'help' for available commands.",
      sender: "system",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate system response
    setTimeout(() => {
      let response = `Processing command: "${input}"...`

      if (input.toLowerCase() === "help") {
        response = `Available commands:
- list agents: Show all available agents
- status: Show system status
- deploy [agent_name]: Deploy a new agent
- pause [agent_id]: Pause an agent
- resume [agent_id]: Resume an agent
- logs [agent_id]: Show logs for an agent`
      }

      const systemMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: "system",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, systemMessage])
    }, 1000)
  }

  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardHeader className="border-b border-zinc-800 bg-zinc-900 px-4 py-3">
        <CardTitle className="text-sm font-mono text-lime-400">Command Console</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-64 overflow-y-auto p-4 font-mono text-sm">
          {messages.map((message) => (
            <div key={message.id} className={`mb-2 ${message.sender === "system" ? "text-lime-400" : "text-white"}`}>
              <span className="text-zinc-500">[{message.timestamp.toLocaleTimeString()}]</span>{" "}
              <span className="text-zinc-400">{message.sender === "system" ? "SYSTEM:" : "USER:"}</span>{" "}
              <span className="whitespace-pre-wrap">{message.content}</span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSubmit} className="border-t border-zinc-800 p-2">
          <div className="flex">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter command..."
              className="flex-1 bg-zinc-800 border-zinc-700 text-white font-mono focus-visible:ring-lime-500"
            />
            <Button type="submit" size="sm" className="ml-2 bg-lime-500 hover:bg-lime-600 text-black">
              <Send size={16} />
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
