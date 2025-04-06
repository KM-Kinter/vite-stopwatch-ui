interface FooterProps {
  currentMode: "single" | "relay"
}

export function Footer({ currentMode }: FooterProps) {
  return (
    <footer className="app-footer">
      <div className="mode-indicators">
        <span className={`mode-indicator ${currentMode === "single" ? "active" : ""}`}>SINGLE</span>
        <span className={`mode-indicator ${currentMode === "relay" ? "active" : ""}`}>RELAY</span>
      </div>
      <div className="copyright">© {new Date().getFullYear()}</div>
    </footer>
  )
}

