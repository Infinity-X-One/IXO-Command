"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

interface RunTaskModalProps {
  isOpen: boolean
  onClose: () => void
  agentId: string | null
}

export function RunTaskModal({ isOpen, onClose, agentId }: RunTaskModalProps) {
  const [isLoading, setIsLoading] = useState(false)

  if (!isOpen) return null

  const handleRunTask = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      onClose()
    }, 1500)
  }

  // Find agent by ID (in a real app, you'd fetch this from state or API)
  const agent = {
    id: agentId,
    name: agentId === "1" ? "EmailBot" : agentId === "2" ? "TraderBot" : "Agent",
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="w-full max-w-md bg-zinc-900 rounded-lg border border-zinc-800 p-6 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Run Task for {agent.name}</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-zinc-400 hover:text-lime-400">
            <X size={20} />
          </Button>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="task-prompt" className="text-white">
              Task Prompt
            </Label>
            <Textarea
              id="task-prompt"
              placeholder="Enter detailed instructions for the agent..."
              className="min-h-32 bg-zinc-800 border-zinc-700 text-white font-mono text-sm focus-visible:ring-lime-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="task-priority" className="text-white">
              Priority
            </Label>
            <Select>
              <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white focus:ring-lime-500">
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="urgent">Urgent</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="notify-completion" className="text-white">
              Notify on Completion
            </Label>
            <Switch id="notify-completion" defaultChecked />
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <Button variant="outline" onClick={onClose} className="border-zinc-700 text-zinc-400">
              Cancel
            </Button>
            <Button className="bg-lime-500 hover:bg-lime-600 text-black" onClick={handleRunTask} disabled={isLoading}>
              {isLoading ? "Running..." : "Run Task"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
