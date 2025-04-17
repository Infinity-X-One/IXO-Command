import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Pause, RotateCcw } from "lucide-react"

export function Tasks() {
  const tasks = [
    {
      id: "1",
      name: "Generate Weekly Report",
      bot: "ResearchAgent",
      status: "running",
      progress: 65,
      startTime: "2023-06-15T10:30:00",
      estimatedCompletion: "2023-06-15T11:15:00",
    },
    {
      id: "2",
      name: "Respond to Customer Emails",
      bot: "EmailResponder",
      status: "paused",
      progress: 42,
      startTime: "2023-06-15T09:15:00",
      estimatedCompletion: "2023-06-15T12:00:00",
    },
    {
      id: "3",
      name: "Generate Landing Page",
      bot: "SiteBuilder",
      status: "completed",
      progress: 100,
      startTime: "2023-06-15T08:00:00",
      estimatedCompletion: "2023-06-15T09:30:00",
    },
    {
      id: "4",
      name: "Refactor API Endpoints",
      bot: "CodeGen",
      status: "failed",
      progress: 78,
      startTime: "2023-06-15T07:45:00",
      estimatedCompletion: "2023-06-15T10:00:00",
    },
    {
      id: "5",
      name: "Analyze Market Trends",
      bot: "Trader",
      status: "queued",
      progress: 0,
      startTime: null,
      estimatedCompletion: null,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Tasks</h2>
        <Button className="bg-lime-500 hover:bg-lime-600 text-black">Create New Task</Button>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <Card key={task.id} className="bg-zinc-900 border-zinc-800">
            <CardHeader className="p-4 border-b border-zinc-800 bg-zinc-950">
              <div className="flex justify-between items-center">
                <CardTitle className="text-white text-base">{task.name}</CardTitle>
                <Badge
                  className={
                    task.status === "running"
                      ? "bg-green-500/20 text-green-500"
                      : task.status === "paused"
                        ? "bg-yellow-500/20 text-yellow-500"
                        : task.status === "completed"
                          ? "bg-blue-500/20 text-blue-500"
                          : task.status === "failed"
                            ? "bg-red-500/20 text-red-500"
                            : "bg-zinc-500/20 text-zinc-400"
                  }
                >
                  {task.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-zinc-400">Bot:</span>
                  <span className="text-white">{task.bot}</span>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-zinc-400">Progress:</span>
                    <span className="text-white">{task.progress}%</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        task.status === "failed"
                          ? "bg-red-500"
                          : task.status === "completed"
                            ? "bg-blue-500"
                            : "bg-lime-500"
                      }`}
                      style={{ width: `${task.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-400">Start Time:</span>
                  <span className="text-white">
                    {task.startTime ? new Date(task.startTime).toLocaleString() : "Not started"}
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-400">Est. Completion:</span>
                  <span className="text-white">
                    {task.estimatedCompletion ? new Date(task.estimatedCompletion).toLocaleString() : "Unknown"}
                  </span>
                </div>

                <div className="flex justify-end space-x-2 pt-2">
                  {task.status === "running" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-zinc-700 text-zinc-400 hover:text-yellow-400 hover:border-yellow-400"
                    >
                      <Pause size={14} className="mr-1" /> Pause
                    </Button>
                  )}
                  {task.status === "paused" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-zinc-700 text-zinc-400 hover:text-green-400 hover:border-green-400"
                    >
                      <Play size={14} className="mr-1" /> Resume
                    </Button>
                  )}
                  {task.status === "failed" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-zinc-700 text-zinc-400 hover:text-lime-400 hover:border-lime-400"
                    >
                      <RotateCcw size={14} className="mr-1" /> Retry
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
