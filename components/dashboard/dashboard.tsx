"use client"

import { CommandConsole } from "@/components/dashboard/command-console"
import { StatCards } from "@/components/dashboard/stat-cards"
import { StatusTicker } from "@/components/dashboard/status-ticker"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

interface DashboardProps {
  onDeployBot: () => void
}

export function Dashboard({ onDeployBot }: DashboardProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Dashboard</h2>
        <Button onClick={onDeployBot} className="bg-lime-500 hover:bg-lime-600 text-black">
          <Plus className="mr-2 h-4 w-4" /> Deploy New Bot
        </Button>
      </div>

      <CommandConsole />
      <StatCards />
      <StatusTicker />
    </div>
  )
}
