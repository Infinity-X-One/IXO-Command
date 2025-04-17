import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"

export function LogRetentionSettings() {
  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardHeader className="border-b border-zinc-800 bg-zinc-900 px-4 py-3">
        <CardTitle className="text-sm font-mono text-lime-400">Log Retention Settings</CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="retention-period" className="text-white">
            Log Retention Period
          </Label>
          <Select defaultValue="30">
            <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white focus:ring-lime-500">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
              <SelectItem value="7">7 days</SelectItem>
              <SelectItem value="14">14 days</SelectItem>
              <SelectItem value="30">30 days</SelectItem>
              <SelectItem value="60">60 days</SelectItem>
              <SelectItem value="90">90 days</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="auto-purge" className="text-white">
            Auto-purge Old Logs
          </Label>
          <Switch id="auto-purge" defaultChecked />
        </div>

        <div className="space-y-2">
          <Label htmlFor="log-level" className="text-white">
            Minimum Log Level
          </Label>
          <Select defaultValue="info">
            <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white focus:ring-lime-500">
              <SelectValue placeholder="Select log level" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
              <SelectItem value="debug">Debug</SelectItem>
              <SelectItem value="info">Info</SelectItem>
              <SelectItem value="warning">Warning</SelectItem>
              <SelectItem value="error">Error</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="max-log-size" className="text-white">
              Maximum Log Size (MB)
            </Label>
            <span className="text-zinc-400 text-sm">100 MB</span>
          </div>
          <Slider
            id="max-log-size"
            defaultValue={[100]}
            max={500}
            min={10}
            step={10}
            className="[&>span]:bg-lime-500"
          />
        </div>
      </CardContent>
    </Card>
  )
}
