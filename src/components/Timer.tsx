"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, RotateCcw, Settings } from "lucide-react"

interface TimerProps {
  mode: "single" | "relay"
  onModeClick: () => void
}

export function Timer({ mode, onModeClick }: TimerProps) {
  const [isRunning, setIsRunning] = useState(false)
  const [time, setTime] = useState(0)
  const [laps, setLaps] = useState<number[]>([])
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isRunning])

  const handleStartStop = () => {
    setIsRunning(!isRunning)
  }

  const handleReset = () => {
    setIsRunning(false)
    setTime(0)
    setLaps([])
  }

  const handleLap = () => {
    if (isRunning) {
      setLaps([...laps, time])
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000)
    const seconds = Math.floor((time % 60000) / 1000)
    const milliseconds = Math.floor((time % 1000) / 10)
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="timer-container">
      <div className="timer-display">
        <h2>{formatTime(time)}</h2>
      </div>

      <div className="timer-controls">
        <button className={`control-button start-stop ${isRunning ? "running" : ""}`} onClick={handleStartStop}>
          {isRunning ? (
            <>
              <Pause className="button-icon" />
              <span>STOP</span>
            </>
          ) : (
            <>
              <Play className="button-icon" />
              <span>START</span>
            </>
          )}
        </button>

        <button className="control-button reset" onClick={handleReset}>
          <RotateCcw className="button-icon" />
          <span>RESET</span>
        </button>
      </div>

      {mode === "relay" && (
        <div className="laps-container">
          <button className="lap-button" onClick={handleLap} disabled={!isRunning}>
            LAP
          </button>

          <div className="laps-list">
            {laps.map((lap, index) => (
              <div key={index} className="lap-item">
                <span>Lap {index + 1}</span>
                <span>{formatTime(lap)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <button className="settings-button" onClick={onModeClick}>
        <Settings size={20} />
      </button>
    </div>
  )
}

