import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Button } from "@/components/ui/button"

export const Header = ({ title, subtitle, user, onLogout }: { title: string; subtitle: string; user?: { name: string; image?: string }; onLogout?: () => void }) => (
  <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-background">
    <div>
      <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
      <p className="text-muted-foreground text-sm">{subtitle}</p>
    </div>
    <div className="flex items-center gap-2">
      <ThemeToggle />
      {onLogout && (
        <Button variant="outline" size="icon" aria-label="Logout" onClick={onLogout}>
          <LogOut size={18} />
        </Button>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="outline-none focus:ring-2 focus:ring-ring rounded-full"
            aria-label="Open user menu"
          >
            <Avatar>
              <AvatarImage src={user?.image} alt={user?.name || 'User'} />
              <AvatarFallback>{user?.name?.[0] || 'U'}</AvatarFallback>
            </Avatar>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem className="flex items-center gap-2">
            <LogOut size={16} /> Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </header>
) 