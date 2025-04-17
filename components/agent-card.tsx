"use client"

import { Play, Pause, Copy, Edit } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Agent {
  id: string
  name: string
  role: string
  status: string
  lastCommand: string
  icon: string
}

interface AgentCardProps {
  agent: Agent
  onRunTask: (agentId: string) => void
}

export function AgentCard({ agent, onRunTask }: AgentCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
      <CardContent className="p-0">
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">{agent.icon}</div>
              <div>
                <h3 className="font-bold text-white">{agent.name}</h3>
                <p className="text-xs text-zinc-400">{agent.role}</p>
              </div>
            </div>
            <Badge
              className={
                agent.status === "active"
                  ? "bg-green-500/20 text-green-500"
                  : agent.status === "paused"
                    ? "bg-yellow-500/20 text-yellow-500"
                    : "bg-red-500/20 text-red-500"
              }
            >
              {agent.status}
            </Badge>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-zinc-500">Last Command</span>
              <span className="text-xs text-zinc-300">{agent.lastCommand}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-2 border-t border-zinc-800 bg-zinc-900">
        <Button
          size="sm"
          className="bg-lime-500 hover:bg-lime-600 text-black text-xs"
          onClick={() => onRunTask(agent.id)}
        >
          <Play size={12} className="mr-1" /> Run Task
        </Button>
        <div className="flex space-x-1">
          <Button
            size="sm"
            variant="outline"
            className="border-zinc-700 text-zinc-400 hover:text-yellow-400 hover:border-yellow-400 text-xs"
          >
            {agent.status === "active" ? <Pause size={12} /> : <Play size={12} />}
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-zinc-700 text-zinc-400 hover:text-blue-400 hover:border-blue-400 text-xs"
          >
            <Copy size={12} />
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-zinc-700 text-zinc-400 hover:text-lime-400 hover:border-lime-400 text-xs"
          >
            <Edit size={12} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
