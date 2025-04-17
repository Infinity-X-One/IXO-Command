import { Card, CardContent } from "@/components/ui/card"
import { Activity, AlertCircle, CheckCircle } from "lucide-react"

export function StatusBar() {
  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardContent className="p-3">
        <div className="flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-1 text-green-400">
            <CheckCircle size={16} />
            <span>Active Agents: 7</span>
          </div>
          <div className="flex items-center space-x-1 text-blue-400">
            <Activity size={16} />
            <span>Running Tasks: 3</span>
          </div>
          <div className="flex items-center space-x-1 text-red-400">
            <AlertCircle size={16} />
            <span>Errors: 1</span>
          </div>
          <div className="text-zinc-400 hidden md:block">
            <span>Last Update: {new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
