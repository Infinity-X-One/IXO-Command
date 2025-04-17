import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-900 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl">
            <span className="font-bold text-lime-400">FinSynapse</span> <span className="font-light">Control</span>
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-lime-400">
            <Bell size={20} />
          </Button>
          <Avatar className="h-8 w-8 bg-zinc-800">
            <AvatarFallback className="text-lime-400">FS</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
