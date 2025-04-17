"use client"

import { LayoutDashboard, Users, ListTodo, ScrollText, SettingsIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Panel } from "@/app/page"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  activePanel: Panel
  setActivePanel: (panel: Panel) => void
}

export function Sidebar({ activePanel, setActivePanel }: SidebarProps) {
  const navItems = [
    {
      id: "dashboard" as Panel,
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      id: "agents" as Panel,
      label: "Agents",
      icon: Users,
    },
    {
      id: "tasks" as Panel,
      label: "Tasks",
      icon: ListTodo,
    },
    {
      id: "logs" as Panel,
      label: "Logs",
      icon: ScrollText,
    },
    {
      id: "settings" as Panel,
      label: "Settings",
      icon: SettingsIcon,
    },
  ]

  return (
    <aside className="w-16 md:w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col">
      <div className="p-4 border-b border-zinc-800 flex items-center justify-center md:justify-start">
        <div className="h-8 w-8 bg-lime-500 rounded-md flex items-center justify-center text-black font-bold mr-2">
          FS
        </div>
        <span className="hidden md:block text-lg font-bold">FinSynapse</span>
      </div>
      <nav className="flex-1 p-2">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setActivePanel(item.id)}
                className={cn(
                  "w-full justify-start md:justify-start hover:bg-zinc-800 hover:text-lime-400",
                  activePanel === item.id ? "bg-zinc-800 text-lime-400" : "text-zinc-400",
                )}
              >
                <item.icon className="h-5 w-5 md:mr-2" />
                <span className="hidden md:inline">{item.label}</span>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-zinc-800 text-xs text-zinc-500 hidden md:block">
        <p>FinSynapse Control v1.0</p>
      </div>
    </aside>
  )
}
