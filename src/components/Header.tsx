import { Timer } from "lucide-react"

export function Header() {
  return (
    <header className="app-header">
      <div className="logo">
        <Timer className="logo-icon" />
        <h1>STOPWATCH</h1>
      </div>
    </header>
  )
}

