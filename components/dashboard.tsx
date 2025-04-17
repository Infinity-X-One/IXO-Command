"use client"

import { CommandConsole } from "@/components/command-console"
import { StatusBar } from "@/components/status-bar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Activity, Users, ListTodo, AlertCircle } from "lucide-react"

interface DashboardProps {
  onDeployAgent: () => void
}

export function Dashboard({ onDeployAgent }: DashboardProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Dashboard</h2>
        <Button onClick={onDeployAgent} className="bg-lime-500 hover:bg-lime-600 text-black">
          <Plus className="mr-2 h-4 w-4" /> Deploy New Agent
        </Button>
      </div>

      <CommandConsole />
      <StatusBar />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-zinc-400 flex items-center">
              <Users className="mr-2 h-4 w-4 text-lime-400" />
              Total Agents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10</div>
            <p className="text-xs text-zinc-500 mt-1">7 active, 2 paused, 1 error</p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-zinc-400 flex items-center">
              <ListTodo className="mr-2 h-4 w-4 text-blue-400" />
              Tasks Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-zinc-500 mt-1">18 completed, 3 running, 3 queued</p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-zinc-400 flex items-center">
              <Activity className="mr-2 h-4 w-4 text-purple-400" />
              API Usage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-zinc-500 mt-1">2.4M / 3.5M tokens used</p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-zinc-400 flex items-center">
              <AlertCircle className="mr-2 h-4 w-4 text-red-400" />
              Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-zinc-500 mt-1">API rate limit warning</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
