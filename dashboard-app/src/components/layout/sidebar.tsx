import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Home, BarChart2, Settings, LogOut } from "lucide-react"

const navItems = [
  { label: "Dashboard", icon: <Home size={20} />, href: "#" },
  { label: "Analytics", icon: <BarChart2 size={20} />, href: "#" },
  { label: "Settings", icon: <Settings size={20} />, href: "#" },
]

export const Sidebar = ({ isCollapsed, onToggle }: { isCollapsed: boolean; onToggle: () => void }) => (
  <aside
    className={`fixed right-0 top-0 h-full bg-white border-l border-border shadow-md z-30 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-56'}`}
    aria-label="Sidebar"
  >
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center justify-center h-16 border-b border-border">
        <span className="font-bold text-lg tracking-wide">{isCollapsed ? 'A' : 'AWESOME'}</span>
      </div>
      {/* Nav */}
      <nav className="flex-1 py-4 flex flex-col gap-2">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-2 rounded-md hover:bg-accent transition-colors ${isCollapsed ? 'justify-center' : ''}`}
            tabIndex={0}
            aria-label={item.label}
          >
            {item.icon}
            {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
          </a>
        ))}
      </nav>
      {/* Collapse/Expand Button */}
      <div className="p-2 border-t border-border">
        <Button
          variant="outline"
          className="w-full flex items-center justify-center"
          onClick={onToggle}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? '»' : '«'}
        </Button>
      </div>
    </div>
  </aside>
) 