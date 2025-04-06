"use client"

import React from 'react';
import { useState } from "react"
import { Timer } from "./components/Timer"
import { ModeSelection } from "./components/ModeSelection"
import { WifiConfig } from "./components/WifiConfig"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import "./App.css"
import Stopwatch from './components/Stopwatch';

type Mode = "single" | "relay" | "status" | "wifi" | "home"

function App() {
  const [mode, setMode] = useState<Mode>("home")
  const [timerMode, setTimerMode] = useState<"single" | "relay">("single")

  const handleModeSelect = (selectedMode: Mode) => {
    if (selectedMode === "single" || selectedMode === "relay") {
      setTimerMode(selectedMode)
      setMode("home")
    } else {
      setMode(selectedMode)
    }
  }

  const renderContent = () => {
    switch (mode) {
      case "home":
        return <Timer mode={timerMode} onModeClick={() => setMode("select")} />
      case "select":
        return <ModeSelection onModeSelect={handleModeSelect} />
      case "wifi":
        return <WifiConfig onSave={() => setMode("home")} />
      case "status":
        return (
          <div className="status-container">
            <h2>System Status</h2>
            <div className="status-item">
              <span>Connection:</span>
              <span className="status-value connected">Connected</span>
            </div>
            <div className="status-item">
              <span>Battery:</span>
              <span className="status-value">87%</span>
            </div>
            <div className="status-item">
              <span>Storage:</span>
              <span className="status-value">2.4GB free</span>
            </div>
            <button className="back-button" onClick={() => setMode("home")}>
              Back
            </button>
          </div>
        )
      default:
        return <Timer mode={timerMode} onModeClick={() => setMode("select")} />
    }
  }

  return (
    <div className="app-container">
      <Header />
      <main className="content">{renderContent()}</main>
      <Footer currentMode={timerMode} />
    </div>
  )
}

export default App

