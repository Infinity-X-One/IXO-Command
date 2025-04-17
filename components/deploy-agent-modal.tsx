"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DeployAgentModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DeployAgentModal({ isOpen, onClose }: DeployAgentModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-end">
      <div className="w-full max-w-md bg-zinc-900 h-full overflow-y-auto border-l border-zinc-800 animate-slide-in-right">
        <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Deploy New Agent</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-zinc-400 hover:text-lime-400">
            <X size={20} />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="agent-name" className="text-zinc-400">
              Agent Name
            </Label>
            <Input
              id="agent-name"
              placeholder="e.g., AnalystBot"
              className="bg-zinc-800 border-zinc-700 text-white focus-visible:ring-lime-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="agent-role" className="text-zinc-400">
              Role/Function
            </Label>
            <Select>
              <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white focus:ring-lime-500">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                <SelectItem value="email">Email Assistant</SelectItem>
                <SelectItem value="trader">Trading Assistant</SelectItem>
                <SelectItem value="research">Research Assistant</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="agent-system-prompt" className="text-zinc-400">
              System Prompt
            </Label>
            <Textarea
              id="agent-system-prompt"
              placeholder="You are an AI assistant that..."
              className="min-h-32 bg-zinc-800 border-zinc-700 text-white font-mono text-sm focus-visible:ring-lime-500"
            />
          </div>

          <Button className="w-full bg-lime-500 hover:bg-lime-600 text-black mt-6">Deploy Agent</Button>
        </div>
      </div>
    </div>
  )
}
