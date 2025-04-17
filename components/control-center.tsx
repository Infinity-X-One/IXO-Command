"use client"

import { useState } from "react"
import { Dashboard } from "@/components/dashboard"
import { Agents } from "@/components/agents/agents"
import { Tasks } from "@/components/tasks"
import { Logs } from "@/components/logs"
import { Settings } from "@/components/settings"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { DeployAgentModal } from "@/components/agents/deploy-agent-modal"
import { RunTaskModal } from "@/components/agents/run-task-modal"

export type Panel = "dashboard" | "bots" | "tasks" | "logs" | "apiKeys" | "settings"

export function ControlCenter() {
  const [activePanel, setActivePanel] = useState<Panel>("dashboard")
  const [isDeployAgentModalOpen, setIsDeployAgentModalOpen] = useState(false)
  const [isRunTaskModalOpen, setIsRunTaskModalOpen] = useState(false)
  const [selectedAgentId, setSelectedAgentId] = useState<string | null>(null)

  const handleRunTask = (agentId: string) => {
    setSelectedAgentId(agentId)
    setIsRunTaskModalOpen(true)
  }

  const renderPanel = () => {
    switch (activePanel) {
      case "dashboard":
        return <Dashboard onDeployAgent={() => setIsDeployAgentModalOpen(true)} />
      case "bots":
        return <Agents onDeployAgent={() => setIsDeployAgentModalOpen(true)} onRunTask={handleRunTask} />
      case "tasks":
        return <Tasks />
      case "logs":
        return <Logs />
      case "settings":
        return <Settings />
      default:
        return <Dashboard onDeployAgent={() => setIsDeployAgentModalOpen(true)} />
    }
  }

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      <Sidebar activePanel={activePanel} setActivePanel={setActivePanel} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto p-4">{renderPanel()}</main>
      </div>
      <DeployAgentModal isOpen={isDeployAgentModalOpen} onClose={() => setIsDeployAgentModalOpen(false)} />
      <RunTaskModal
        isOpen={isRunTaskModalOpen}
        onClose={() => setIsRunTaskModalOpen(false)}
        agentId={selectedAgentId}
      />
    </div>
  )
}
