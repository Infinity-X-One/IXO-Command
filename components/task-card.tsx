import { Play, Pause, RotateCcw } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Task {
  id: string
  name: string
  agent: string
  status: string
  progress: number
}

interface TaskCardProps {
  task: Task
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardHeader className="p-4 border-b border-zinc-800 bg-zinc-900">
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
            <span className="text-zinc-400">Agent:</span>
            <span className="text-lime-400">{task.agent}</span>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-zinc-400">Progress:</span>
              <span className="text-white">{task.progress}%</span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  task.status === "failed" ? "bg-red-500" : task.status === "completed" ? "bg-blue-500" : "bg-lime-500"
                }`}
                style={{ width: `${task.progress}%` }}
              ></div>
            </div>
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
  )
}
