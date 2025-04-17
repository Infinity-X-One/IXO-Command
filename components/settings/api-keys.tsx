import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function ApiKeysSettings() {
  return (
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

        <div className="space-y-2">
          <Label htmlFor="pinecone-key" className="text-white">
            Pinecone API Key
          </Label>
          <Input
            id="pinecone-key"
            type="password"
            placeholder="pc-..."
            className="bg-zinc-800 border-zinc-700 text-white font-mono focus-visible:ring-lime-500"
          />
        </div>

        <Button className="w-full bg-lime-500 hover:bg-lime-600 text-black">Save API Keys</Button>
      </CardContent>
    </Card>
  )
}
