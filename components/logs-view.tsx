"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"

export function LogsView() {
  const [filter, setFilter] = useState("all")
  const [search, setSearch] = useState("")

  const logs = [
    {
      id: "1",
      timestamp: "2023-06-15T10:45:23",
      agent: "TraderBot",
      level: "info",
      message: "Started market analysis task",
    },
    {
      id: "2",
      timestamp: "2023-06-15T10:46:12",
      agent: "TraderBot",
      level: "info",
      message: "Fetching market data from API",
    },
    {
      id: "3",
      timestamp: "2023-06-15T10:47:05",
      agent: "TraderBot",
      level: "warning",
      message: "API rate limit approaching (80%)",
    },
  ]

  const filteredLogs = logs.filter((log) => {
    const matchesFilter = filter === "all" || log.level === filter
    const matchesSearch =
      search === "" ||
      log.message.toLowerCase().includes(search.toLowerCase()) ||
      log.agent.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Logs</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-400" />
          <Input
            placeholder="Search logs..."
            className="pl-8 bg-zinc-800 border-zinc-700 text-white focus-visible:ring-lime-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-zinc-400" />
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px] bg-zinc-800 border-zinc-700 text-white focus:ring-lime-500">
              <SelectValue placeholder="Filter by level" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="info">Info</SelectItem>
              <SelectItem value="warning">Warning</SelectItem>
              <SelectItem value="error">Error</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader className="border-b border-zinc-800 bg-zinc-900 px-4 py-3">
          <CardTitle className="text-sm font-mono text-lime-400">System Logs</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="font-mono text-sm">
            <table className="w-full">
              <thead className="bg-zinc-800">
                <tr>
                  <th className="text-left p-2 text-xs text-zinc-400">Timestamp</th>
                  <th className="text-left p-2 text-xs text-zinc-400">Agent</th>
                  <th className="text-left p-2 text-xs text-zinc-400">Level</th>
                  <th className="text-left p-2 text-xs text-zinc-400">Message</th>
                </tr>
              </thead>
              <tbody>
                {filteredLogs.map((log) => (
                  <tr key={log.id} className="border-t border-zinc-800">
                    <td className="p-2 text-xs text-zinc-500">{new Date(log.timestamp).toLocaleString()}</td>
                    <td className="p-2 text-xs text-lime-400">{log.agent}</td>
                    <td className="p-2">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          log.level === "info"
                            ? "bg-blue-500/20 text-blue-500"
                            : log.level === "warning"
                              ? "bg-yellow-500/20 text-yellow-500"
                              : "bg-red-500/20 text-red-500"
                        }`}
                      >
                        {log.level}
                      </span>
                    </td>
                    <td className="p-2 text-xs text-white">{log.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
