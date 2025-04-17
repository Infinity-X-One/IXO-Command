"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export function Settings() {
  const [activeTab, setActiveTab] = useState("general")

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Settings</h2>
        <Button className="bg-lime-500 hover:bg-lime-600 text-black">Save Changes</Button>
      </div>

      <div className="flex border-b border-zinc-800 mb-4">
        <button
          onClick={() => setActiveTab("general")}
          className={`px-4 py-2 ${
            activeTab === "general" ? "border-b-2 border-lime-400 text-lime-400" : "text-zinc-400"
          }`}
        >
          General
        </button>
        <button
          onClick={() => setActiveTab("notifications")}
          className={`px-4 py-2 ${
            activeTab === "notifications" ? "border-b-2 border-lime-400 text-lime-400" : "text-zinc-400"
          }`}
        >
          Notifications
        </button>
        <button
          onClick={() => setActiveTab("integrations")}
          className={`px-4 py-2 ${
            activeTab === "integrations" ? "border-b-2 border-lime-400 text-lime-400" : "text-zinc-400"
          }`}
        >
          Integrations
        </button>
      </div>

      {activeTab === "general" && (
        <div className="space-y-4">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="border-b border-zinc-800 bg-zinc-950 px-4 py-3">
              <CardTitle className="text-sm font-mono text-lime-400">Appearance</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="theme-toggle" className="text-white">
                  Dark Mode
                </Label>
                <Switch id="theme-toggle" defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="accent-color" className="text-white">
                  Accent Color
                </Label>
                <div className="grid grid-cols-5 gap-2">
                  {["lime", "blue", "purple", "pink", "orange"].map((color) => (
                    <div
                      key={color}
                      className={`h-8 rounded-md cursor-pointer ${color === "lime" ? "ring-2 ring-white" : ""} ${
                        color === "lime"
                          ? "bg-lime-500"
                          : color === "blue"
                            ? "bg-blue-500"
                            : color === "purple"
                              ? "bg-purple-500"
                              : color === "pink"
                                ? "bg-pink-500"
                                : "bg-orange-500"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="border-b border-zinc-800 bg-zinc-950 px-4 py-3">
              <CardTitle className="text-sm font-mono text-lime-400">Bot Behavior</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="trigger-frequency" className="text-white">
                    Trigger Frequency
                  </Label>
                  <span className="text-zinc-400 text-sm">Every 15 minutes</span>
                </div>
                <Slider
                  id="trigger-frequency"
                  defaultValue={[15]}
                  max={60}
                  min={1}
                  step={1}
                  className="[&>span]:bg-lime-500"
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="auto-pause" className="text-white">
                  Auto-pause on Error
                </Label>
                <Switch id="auto-pause" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="debug-mode" className="text-white">
                  Debug Mode
                </Label>
                <Switch id="debug-mode" />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "notifications" && (
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader className="border-b border-zinc-800 bg-zinc-950 px-4 py-3">
            <CardTitle className="text-sm font-mono text-lime-400">Notification Settings</CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="notify-task-complete" className="text-white">
                Task Completion
              </Label>
              <Switch id="notify-task-complete" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="notify-error" className="text-white">
                Errors
              </Label>
              <Switch id="notify-error" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="notify-api-limit" className="text-white">
                API Limit Warnings
              </Label>
              <Switch id="notify-api-limit" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="notify-new-task" className="text-white">
                New Task Created
              </Label>
              <Switch id="notify-new-task" />
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === "integrations" && (
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader className="border-b border-zinc-800 bg-zinc-950 px-4 py-3">
            <CardTitle className="text-sm font-mono text-lime-400">Webhook Configuration</CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="webhook-url" className="text-white">
                Webhook URL
              </Label>
              <Input
                id="webhook-url"
                placeholder="https://example.com/webhook"
                className="bg-zinc-800 border-zinc-700 text-white focus-visible:ring-lime-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="webhook-secret" className="text-white">
                Webhook Secret
              </Label>
              <Input
                id="webhook-secret"
                type="password"
                placeholder="whsec_..."
                className="bg-zinc-800 border-zinc-700 text-white font-mono focus-visible:ring-lime-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="webhook-enabled" className="text-white">
                Enable Webhooks
              </Label>
              <Switch id="webhook-enabled" />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
