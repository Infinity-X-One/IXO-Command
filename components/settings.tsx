"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export function Settings() {
  const [activeTab, setActiveTab] = useState("api-keys")

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Settings</h2>
        <Button className="bg-lime-500 hover:bg-lime-600 text-black">Save Changes</Button>
      </div>

      <div className="flex border-b border-zinc-800 mb-4 overflow-x-auto">
        <button
          onClick={() => setActiveTab("api-keys")}
          className={`px-4 py-2 whitespace-nowrap ${
            activeTab === "api-keys" ? "border-b-2 border-lime-400 text-lime-400" : "text-zinc-400"
          }`}
        >
          API Keys
        </button>
        <button
          onClick={() => setActiveTab("execution")}
          className={`px-4 py-2 whitespace-nowrap ${
            activeTab === "execution" ? "border-b-2 border-lime-400 text-lime-400" : "text-zinc-400"
          }`}
        >
          Execution Settings
        </button>
        <button
          onClick={() => setActiveTab("logs")}
          className={`px-4 py-2 whitespace-nowrap ${
            activeTab === "logs" ? "border-b-2 border-lime-400 text-lime-400" : "text-zinc-400"
          }`}
        >
          Log Retention
        </button>
      </div>

      {activeTab === "api-keys" && (
        <div className="space-y-4">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="border-b border-zinc-800 bg-zinc-900 px-4 py-3">
              <CardTitle className="text-sm font-mono text-lime-400">API Keys</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="openai-key" className="text-white">
                  OpenAI API Key
                </Label>
                <Input
                  id="openai-key"
                  type="password"
                  placeholder="sk-..."
                  className="bg-zinc-800 border-zinc-700 text-white font-mono focus-visible:ring-lime-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="supabase-key" className="text-white">
                  Supabase API Key
                </Label>
                <Input
                  id="supabase-key"
                  type="password"
                  placeholder="sb-..."
                  className="bg-zinc-800 border-zinc-700 text-white font-mono focus-visible:ring-lime-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="stripe-key" className="text-white">
                  Stripe API Key
                </Label>
                <Input
                  id="stripe-key"
                  type="password"
                  placeholder="sk_..."
                  className="bg-zinc-800 border-zinc-700 text-white font-mono focus-visible:ring-lime-500"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "execution" && (
        <div className="space-y-4">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="border-b border-zinc-800 bg-zinc-900 px-4 py-3">
              <CardTitle className="text-sm font-mono text-lime-400">Execution Settings</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="default-interval" className="text-white">
                  Default Execution Interval
                </Label>
                <Select defaultValue="15m">
                  <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white focus:ring-lime-500">
                    <SelectValue placeholder="Select interval" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                    <SelectItem value="5m">Every 5 minutes</SelectItem>
                    <SelectItem value="15m">Every 15 minutes</SelectItem>
                    <SelectItem value="30m">Every 30 minutes</SelectItem>
                    <SelectItem value="1h">Every hour</SelectItem>
                    <SelectItem value="manual">Manual execution only</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="auto-retry" className="text-white">
                  Auto-retry Failed Tasks
                </Label>
                <Switch id="auto-retry" defaultChecked />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="timeout" className="text-white">
                    Task Timeout (minutes)
                  </Label>
                  <span className="text-zinc-400 text-sm">30 min</span>
                </div>
                <Slider id="timeout" defaultValue={[30]} max={120} min={5} step={5} className="[&>span]:bg-lime-500" />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "logs" && (
        <div className="space-y-4">
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
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
