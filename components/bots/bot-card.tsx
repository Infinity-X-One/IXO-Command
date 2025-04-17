import { Play, FileText, MoreVertical } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Bot {
  id: string
  name: string
  role: string
  status: "active" | "paused" | "error"
  lastAction: string
  apiKey: string
  icon: string
}

interface BotCardProps {
  bot: Bot
}

export function BotCard({ bot }: BotCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
      <CardContent className="p-0">
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">{bot.icon}</div>
              <div>
                <h3 className="font-bold text-white">{bot.name}</h3>
                <p className="text-xs text-zinc-400">{bot.role}</p>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-lime-400">
                  <MoreVertical size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800">
                <DropdownMenuItem className="text-white hover:bg-zinc-800 hover:text-lime-400">
                  Edit Bot
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-zinc-800 hover:text-lime-400">
                  View Logs
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-zinc-800 hover:text-lime-400">
                  Duplicate
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-500 hover:bg-zinc-800 hover:text-red-400">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-zinc-500">Status</span>
              <Badge
                className={
                  bot.status === "active"
                    ? "bg-green-500/20 text-green-500"
                    : bot.status === "paused"
                      ? "bg-yellow-500/20 text-yellow-500"
                      : "bg-red-500/20 text-red-500"
                }
              >
                {bot.status}
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-zinc-500">Last Action</span>
              <span className="text-xs text-zinc-300">{bot.lastAction}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-zinc-500">API Key</span>
              <span className="text-xs text-zinc-300 font-mono">{bot.apiKey}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-2 border-t border-zinc-800 bg-zinc-950">
        <Button size="sm" className="bg-lime-500 hover:bg-lime-600 text-black text-xs">
          <Play size={12} className="mr-1" /> Run Task
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="border-zinc-700 text-zinc-400 hover:text-lime-400 hover:border-lime-400 text-xs"
        >
          <FileText size={12} className="mr-1" /> Logs
        </Button>
      </CardFooter>
    </Card>
  )
}
