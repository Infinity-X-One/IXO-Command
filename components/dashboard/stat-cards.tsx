import { Bot, ListTodo, Activity } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function StatCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="bg-zinc-900 border-zinc-800">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-blue-500/20 rounded-full">
              <Bot className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-zinc-400">Bot Count</p>
              <h3 className="text-2xl font-bold text-white">7</h3>
            </div>
          </div>
          <div className="mt-4 text-xs text-zinc-500">
            <span className="text-green-500">+2</span> since last week
          </div>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-lime-500/20 rounded-full">
              <ListTodo className="h-6 w-6 text-lime-500" />
            </div>
            <div>
              <p className="text-sm text-zinc-400">Task Count</p>
              <h3 className="text-2xl font-bold text-white">24</h3>
            </div>
          </div>
          <div className="mt-4 text-xs text-zinc-500">
            <span className="text-green-500">+8</span> since yesterday
          </div>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-purple-500/20 rounded-full">
              <Activity className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-zinc-400">System Load</p>
              <h3 className="text-2xl font-bold text-white">42%</h3>
            </div>
          </div>
          <div className="mt-4 text-xs text-zinc-500">
            <span className="text-red-500">+12%</span> since yesterday
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
