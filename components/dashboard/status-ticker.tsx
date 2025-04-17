import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function StatusTicker() {
  const statuses = [
    { bot: "SiteBuilder", status: "active", lastAction: "Generating landing page" },
    { bot: "CodeGen", status: "active", lastAction: "Refactoring API endpoints" },
    { bot: "EmailResponder", status: "paused", lastAction: "Awaiting new emails" },
    { bot: "Trader", status: "active", lastAction: "Analyzing market data" },
    { bot: "ResearchAgent", status: "error", lastAction: "API rate limit exceeded" },
  ]

  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardHeader className="border-b border-zinc-800 bg-zinc-950 px-4 py-3">
        <CardTitle className="text-sm font-mono text-lime-400">Live Status</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="p-4 space-y-2">
          {statuses.map((item, index) => (
            <div key={index} className="flex items-center justify-between py-1 border-b border-zinc-800 last:border-0">
              <div className="flex items-center">
                <Badge
                  className={`mr-2 ${
                    item.status === "active"
                      ? "bg-green-500/20 text-green-500"
                      : item.status === "paused"
                        ? "bg-yellow-500/20 text-yellow-500"
                        : "bg-red-500/20 text-red-500"
                  }`}
                >
                  {item.status}
                </Badge>
                <span className="font-mono text-sm">{item.bot}</span>
              </div>
              <span className="text-xs text-zinc-400">{item.lastAction}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
