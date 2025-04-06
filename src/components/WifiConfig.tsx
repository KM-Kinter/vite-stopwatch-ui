"use client"

import type React from "react"

import { useState } from "react"
import { Save, ArrowLeft } from "lucide-react"

interface WifiConfigProps {
  onSave: () => void
}

export function WifiConfig({ onSave }: WifiConfigProps) {
  const [network, setNetwork] = useState("Hello")
  const [password, setPassword] = useState("")
  const [hostname, setHostname] = useState("ninja")
  const [networks] = useState(["Hello", "Home Network", "Office WiFi", "Guest Network"])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the actual WiFi configuration
    onSave()
  }

  return (
    <div className="wifi-config">
      <h2>WiFi Configuration</h2>

      <form onSubmit={handleSubmit} className="wifi-form">
        <div className="form-group">
          <label htmlFor="network">NETWORK</label>
          <select id="network" value={network} onChange={(e) => setNetwork(e.target.value)} className="form-control">
            {networks.map((net) => (
              <option key={net} value={net}>
                {net}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Only if required"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="hostname">HOSTNAME</label>
          <input
            type="text"
            id="hostname"
            value={hostname}
            onChange={(e) => setHostname(e.target.value)}
            className="form-control"
          />
        </div>

        <button type="submit" className="save-button">
          <Save className="button-icon" />
          SAVE AND RESTART
        </button>

        <button type="button" className="back-button" onClick={onSave}>
          <ArrowLeft className="button-icon" />
          BACK
        </button>
      </form>
    </div>
  )
}

