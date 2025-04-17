"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Check, Copy, Eye, EyeOff } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ApiKeys() {
  const [showKeys, setShowKeys] = useState(false)
  const [showAddKeyModal, setShowAddKeyModal] = useState(false)

  const apiKeys = [
    {
      id: "1",
      name: "OpenAI",
      key: "sk-openai-***********************************",
      usageCount: 1245,
      lastUsed: "2023-06-15T10:30:00",
    },
    {
      id: "2",
      name: "Anthropic",
      key: "sk-ant-***********************************",
      usageCount: 532,
      lastUsed: "2023-06-15T09:15:00",
    },
    {
      id: "3",
      name: "Stability AI",
      key: "sk-stability-***********************************",
      usageCount: 87,
      lastUsed: "2023-06-14T16:45:00",
    },
    {
      id: "4",
      name: "Supabase",
      key: "sb-***********************************",
      usageCount: 2103,
      lastUsed: "2023-06-15T11:10:00",
    },
    {
      id: "5",
      name: "Pinecone",
      key: "pc-***********************************",
      usageCount: 456,
      lastUsed: "2023-06-15T08:20:00",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">API Keys</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setShowKeys(!showKeys)}
            className="border-zinc-700 text-zinc-400 hover:text-lime-400 hover:border-lime-400"
          >
            {showKeys ? <EyeOff className="mr-2 h-4 w-4" /> : <Eye className="mr-2 h-4 w-4" />}
            {showKeys ? "Hide Keys" : "Show Keys"}
          </Button>
          <Button className="bg-lime-500 hover:bg-lime-600 text-black" onClick={() => setShowAddKeyModal(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add New Key
          </Button>
        </div>
      </div>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader className="border-b border-zinc-800 bg-zinc-950 px-4 py-3">
          <CardTitle className="text-sm font-mono text-lime-400">Integrated APIs</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <table className="w-full">
            <thead className="bg-zinc-800">
              <tr>
                <th className="text-left p-4 text-xs text-zinc-400">Service</th>
                <th className="text-left p-4 text-xs text-zinc-400">API Key</th>
                <th className="text-left p-4 text-xs text-zinc-400">Usage Count</th>
                <th className="text-left p-4 text-xs text-zinc-400">Last Used</th>
                <th className="text-left p-4 text-xs text-zinc-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {apiKeys.map((apiKey) => (
                <tr key={apiKey.id} className="border-t border-zinc-800">
                  <td className="p-4 text-white">{apiKey.name}</td>
                  <td className="p-4 font-mono">
                    {showKeys ? apiKey.key.replace(/\*+/g, "•••••••••••••••") : apiKey.key}
                  </td>
                  <td className="p-4 text-zinc-400">{apiKey.usageCount}</td>
                  <td className="p-4 text-zinc-400">{new Date(apiKey.lastUsed).toLocaleString()}</td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-zinc-400 hover:text-lime-400">
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copy</span>
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-zinc-400 hover:text-lime-400">
                        <Check className="h-4 w-4" />
                        <span className="sr-only">Test</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {showAddKeyModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg w-full max-w-md p-6">
            <h3 className="text-xl font-bold text-white mb-4">Add New API Key</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-zinc-400">
                  Service Name
                </Label>
                <Input
                  id="name"
                  placeholder="e.g., OpenAI"
                  className="bg-zinc-800 border-zinc-700 text-white focus-visible:ring-lime-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="key" className="text-zinc-400">
                  API Key
                </Label>
                <Input
                  id="key"
                  type="password"
                  placeholder="sk-..."
                  className="bg-zinc-800 border-zinc-700 text-white font-mono focus-visible:ring-lime-500"
                />
              </div>
              <div className="flex justify-end gap-2 mt-6">
                <Button
                  variant="outline"
                  onClick={() => setShowAddKeyModal(false)}
                  className="border-zinc-700 text-zinc-400"
                >
                  Cancel
                </Button>
                <Button className="bg-lime-500 hover:bg-lime-600 text-black" onClick={() => setShowAddKeyModal(false)}>
                  Add Key
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
