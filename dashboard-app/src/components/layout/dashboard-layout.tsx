import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"

interface DashboardLayoutProps {
  children: React.ReactNode
  onLogout?: () => void
}

export const DashboardLayout = ({ children, onLogout }: DashboardLayoutProps) => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false)
  return (
    <div className="flex flex-row-reverse min-h-screen bg-background">
      <Sidebar isCollapsed={isSidebarCollapsed} onToggle={() => setSidebarCollapsed((v) => !v)} />
      <main className={`flex-1 transition-all duration-300 ${isSidebarCollapsed ? 'mr-16' : 'mr-56'}`}>
        <Header title="AWESOME DASHBORD" subtitle="Your analytics at a glance" user={{ name: 'User' }} onLogout={onLogout} />
        <div className="p-6">{children}</div>
      </main>
    </div>
  )
} 