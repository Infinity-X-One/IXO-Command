"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X } from "lucide-react"
import { TaskCard } from "@/components/task-card"

export function Tasks() {
  const [filter, setFilter] = useState("all")
  const [search, setSearch] = useState("")

  const tasks = [
    {
      id: "1",
      name: "Process Customer Emails",
      agent: "EmailBot",
      status: "running",
      progress: 65,
    },
    {
      id: "2",
      name: "Analyze Market Trends",
      agent: "TraderBot",
      status: "running",
      progress: 42,
    },
    {
      id: "3",
      name: "Generate Financial Report",
      agent: "ResearchBot",
      status: "completed",
      progress: 100,
    },
    {
      id: "4",
      name: "Create Dashboard Template",
      agent: "BuilderBot",
      status: "failed",
      progress: 78,
    },
  ]

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter = filter === "all" || task.status === filter
    const matchesSearch =
      search === "" ||
      task.name.toLowerCase().includes(search.toLowerCase()) ||
      task.agent.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Tasks</h2>
        <Button className="bg-lime-500 hover:bg-lime-600 text-black">Create New Task</Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Input
            placeholder="Search tasks..."
            className="pl-8 bg-zinc-800 border-zinc-700 text-white focus-visible:ring-lime-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <X
            className="absolute right-2 top-2.5 h-4 w-4 text-zinc-400 cursor-pointer"
            onClick={() => setSearch("")}
            style={{ display: search ? "block" : "none" }}
          />
        </div>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[180px] bg-zinc-800 border-zinc-700 text-white focus:ring-lime-500">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
            <SelectItem value="all">All Tasks</SelectItem>
            <SelectItem value="running">Running</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
            <SelectItem value="queued">Queued</SelectItem>
            <SelectItem value="paused">Paused</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}
