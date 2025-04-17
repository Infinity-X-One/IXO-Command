"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { AgentCard } from "@/components/agent-card"

interface AgentsProps {
  onDeployAgent: () => void
  onRunTask: (agentId: string) => void
}

export function Agents({ onDeployAgent, onRunTask }: AgentsProps) {
  const agents = [
    {
      id: "1",
      name: "EmailBot",
      role: "Email Assistant",
      status: "active",
      lastCommand: "Process customer inquiries",
      icon: "📩",
    },
    {
      id: "2",
      name: "TraderBot",
      role: "Trading Assistant",
      status: "active",
      lastCommand: "Analyze market trends",
      icon: "📊",
    },
    {
      id: "3",
      name: "ResearchBot",
      role: "Research Assistant",
      status: "paused",
      lastCommand: "Generate financial report",
      icon: "🧠",
    },
    {
      id: "4",
      name: "BuilderBot",
      role: "Content Builder",
      status: "active",
      lastCommand: "Create dashboard template",
      icon: "🧱",
    },
    {
      id: "5",
      name: "AnalystBot",
      role: "Financial Analyst",
      status: "active",
      lastCommand: "Analyze quarterly earnings",
      icon: "📈",
    },
    {
      id: "6",
      name: "AdvisorBot",
      role: "Financial Advisor",
      status: "active",
      lastCommand: "Generate investment recommendations",
      icon: "💼",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Agents</h2>
        <Button onClick={onDeployAgent} className="bg-lime-500 hover:bg-lime-600 text-black">
          <Plus className="mr-2 h-4 w-4" /> Deploy New Agent
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} onRunTask={onRunTask} />
        ))}
      </div>
    </div>
  )
}
