"use client"

import { Clock, Users, Activity, Wifi } from "lucide-react"

interface ModeSelectionProps {
  onModeSelect: (mode: "single" | "relay" | "status" | "wifi") => void
}

export function ModeSelection({ onModeSelect }: ModeSelectionProps) {
  return (
    <div className="mode-selection">
      <h2>Select Mode</h2>

      <div className="mode-buttons">
        <button className="mode-button" onClick={() => onModeSelect("single")}>
          <Clock className="mode-icon" />
          <span>Single</span>
        </button>

        <button className="mode-button" onClick={() => onModeSelect("relay")}>
          <Users className="mode-icon" />
          <span>Relay</span>
        </button>

        <button className="mode-button" onClick={() => onModeSelect("status")}>
          <Activity className="mode-icon" />
          <span>Check Status</span>
        </button>

        <button className="mode-button" onClick={() => onModeSelect("wifi")}>
          <Wifi className="mode-icon" />
          <span>WiFi Config</span>
        </button>
      </div>
    </div>
  )
}

