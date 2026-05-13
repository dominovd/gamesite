'use client'

import { useState, useMemo } from 'react'
import { games, gpus } from '@/data/games'
import { GAME_ICON_MAP } from '@/components/icons/GameIcons'

type Result = 'recommended' | 'minimum' | 'below'

interface CheckResult {
  overall: Result
  gpu: Result
  ram: Result
  details: {
    gpu: { status: Result; userScore: number; minScore: number; recScore: number }
    ram: { status: Result; userRam: number; minRam: number; recRam: number }
  }
}

function checkRequirements(gpuScore: number, ram: number, gameId: string): CheckResult {
  const game = games.find((g) => g.id === gameId)
  if (!game) return { overall: 'below', gpu: 'below', ram: 'below', details: { gpu: { status: 'below', userScore: 0, minScore: 0, recScore: 0 }, ram: { status: 'below', userRam: 0, minRam: 0, recRam: 0 } } }

  const gpuStatus: Result =
    gpuScore >= game.recommended.gpuScore ? 'recommended' :
    gpuScore >= game.minimum.gpuScore ? 'minimum' : 'below'

  const ramStatus: Result =
    ram >= game.recommended.ram ? 'recommended' :
    ram >= game.minimum.ram ? 'minimum' : 'below'

  const scores = [gpuStatus, ramStatus]
  const overall: Result =
    scores.every((s) => s === 'recommended') ? 'recommended' :
    scores.every((s) => s !== 'below') ? 'minimum' : 'below'

  return {
    overall,
    gpu: gpuStatus,
    ram: ramStatus,
    details: {
      gpu: { status: gpuStatus, userScore: gpuScore, minScore: game.minimum.gpuScore, recScore: game.recommended.gpuScore },
      ram: { status: ramStatus, userRam: ram, minRam: game.minimum.ram, recRam: game.recommended.ram },
    }
  }
}

const STATUS_CONFIG = {
  recommended: { label: '✅ Recommended', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/30', desc: 'Your PC exceeds recommended requirements' },
  minimum: { label: '⚠️ Minimum', color: 'text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/30', desc: 'Your PC meets minimum requirements' },
  below: { label: '❌ Below Minimum', color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/30', desc: 'Your PC doesn\'t meet minimum requirements' },
}

export default function CanIRun() {
  const [selectedGame, setSelectedGame] = useState('')
  const [selectedGPU, setSelectedGPU] = useState('')
  const [ram, setRam] = useState(16)
  const [checked, setChecked] = useState(false)

  const selectedGPUData = useMemo(() => gpus.find((g) => g.name === selectedGPU), [selectedGPU])
  const selectedGameData = useMemo(() => games.find((g) => g.id === selectedGame), [selectedGame])

  const result = useMemo(() => {
    if (!checked || !selectedGPUData || !selectedGame) return null
    return checkRequirements(selectedGPUData.score, ram, selectedGame)
  }, [checked, selectedGPUData, ram, selectedGame])

  const handleCheck = () => {
    if (!selectedGame || !selectedGPU) return
    setChecked(true)
  }

  const handleReset = () => {
    setChecked(false)
  }

  const nvidiaGPUs = gpus.filter((g) => g.brand === 'nvidia').sort((a, b) => b.score - a.score)
  const amdGPUs = gpus.filter((g) => g.brand === 'amd').sort((a, b) => b.score - a.score)
  const intelGPUs = gpus.filter((g) => g.brand === 'intel').sort((a, b) => b.score - a.score)

  return (
    <div className="space-y-8">
      {/* Form */}
      <div className="grid md:grid-cols-3 gap-5">
        {/* Game Select */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Select Game</label>
          <div className="relative">
            <select
              value={selectedGame}
              onChange={(e) => { setSelectedGame(e.target.value); setChecked(false) }}
              className="select-field pr-10"
            >
              <option value="">— Choose a game —</option>
              {games.map((g) => (
                <option key={g.id} value={g.id}>{g.emoji} {g.name} ({g.releaseYear})</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* GPU Select */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Your GPU</label>
          <div className="relative">
            <select
              value={selectedGPU}
              onChange={(e) => { setSelectedGPU(e.target.value); setChecked(false) }}
              className="select-field pr-10"
            >
              <option value="">— Choose your GPU —</option>
              <optgroup label="🟢 NVIDIA GeForce">
                {nvidiaGPUs.map((g) => <option key={g.name} value={g.name}>{g.name}</option>)}
              </optgroup>
              <optgroup label="🔴 AMD Radeon">
                {amdGPUs.map((g) => <option key={g.name} value={g.name}>{g.name}</option>)}
              </optgroup>
              <optgroup label="🔵 Intel Arc">
                {intelGPUs.map((g) => <option key={g.name} value={g.name}>{g.name}</option>)}
              </optgroup>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* RAM */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">RAM</label>
          <div className="relative">
            <select
              value={ram}
              onChange={(e) => { setRam(parseInt(e.target.value)); setChecked(false) }}
              className="select-field pr-10"
            >
              {[4, 6, 8, 12, 16, 24, 32, 64].map((r) => (
                <option key={r} value={r}>{r} GB RAM</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleCheck}
        disabled={!selectedGame || !selectedGPU}
        className="btn-cyan w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        💻 Check My PC
      </button>

      {/* Result */}
      {result && selectedGameData && (
        <div className="animate-fade-in space-y-6">
          {/* Overall Result */}
          <div className={`border rounded-2xl p-6 ${STATUS_CONFIG[result.overall].bg}`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className={`text-2xl font-bold ${STATUS_CONFIG[result.overall].color} mb-1`}>
                  {STATUS_CONFIG[result.overall].label}
                </div>
                <p className="text-slate-400">
                  <strong className="text-slate-200">{selectedGPU}</strong> + {ram}GB RAM
                  {' '}with <strong className="text-slate-200">{selectedGameData.name}</strong>
                </p>
                <p className="text-sm text-slate-500 mt-1">{STATUS_CONFIG[result.overall].desc}</p>
              </div>
              <div className="text-4xl flex-shrink-0 text-slate-300">
                {(() => { const Icon = GAME_ICON_MAP[selectedGameData.id]; return Icon ? <Icon size={44} /> : <span className="text-5xl">{selectedGameData.emoji}</span> })()}
              </div>
            </div>
          </div>

          {/* Component breakdown */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* GPU */}
            <div className="card-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-200">GPU Performance</h3>
                <span className={`text-sm font-medium ${STATUS_CONFIG[result.details.gpu.status].color}`}>
                  {STATUS_CONFIG[result.details.gpu.status].label}
                </span>
              </div>
              <div className="space-y-3">
                <ProgressBar
                  label="Your GPU"
                  value={result.details.gpu.userScore}
                  max={result.details.gpu.recScore * 1.3}
                  color={getBarColor(result.details.gpu.status)}
                />
                <ProgressBar
                  label="Minimum"
                  value={result.details.gpu.minScore}
                  max={result.details.gpu.recScore * 1.3}
                  color="bg-red-500/40"
                />
                <ProgressBar
                  label="Recommended"
                  value={result.details.gpu.recScore}
                  max={result.details.gpu.recScore * 1.3}
                  color="bg-green-500/40"
                />
              </div>
            </div>

            {/* RAM */}
            <div className="card-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-200">RAM</h3>
                <span className={`text-sm font-medium ${STATUS_CONFIG[result.details.ram.status].color}`}>
                  {STATUS_CONFIG[result.details.ram.status].label}
                </span>
              </div>
              <div className="space-y-3">
                <ProgressBar
                  label={`Your RAM (${ram}GB)`}
                  value={result.details.ram.userRam}
                  max={Math.max(result.details.ram.recRam, ram) * 1.2}
                  color={getBarColor(result.details.ram.status)}
                />
                <ProgressBar
                  label={`Minimum (${result.details.ram.minRam}GB)`}
                  value={result.details.ram.minRam}
                  max={Math.max(result.details.ram.recRam, ram) * 1.2}
                  color="bg-red-500/40"
                />
                <ProgressBar
                  label={`Recommended (${result.details.ram.recRam}GB)`}
                  value={result.details.ram.recRam}
                  max={Math.max(result.details.ram.recRam, ram) * 1.2}
                  color="bg-green-500/40"
                />
              </div>
            </div>
          </div>

          {/* Full requirements table */}
          <div>
            <h3 className="text-slate-300 font-semibold mb-4">Full System Requirements — {selectedGameData.name}</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-3 pr-4 text-slate-500 font-medium">Component</th>
                    <th className="pb-3 pr-4 text-slate-500 font-medium">Minimum</th>
                    <th className="pb-3 text-slate-500 font-medium">Recommended</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'OS', min: selectedGameData.minimum.os, rec: selectedGameData.recommended.os },
                    { label: 'CPU', min: selectedGameData.minimum.cpu, rec: selectedGameData.recommended.cpu },
                    { label: 'RAM', min: `${selectedGameData.minimum.ram} GB`, rec: `${selectedGameData.recommended.ram} GB` },
                    { label: 'GPU', min: selectedGameData.minimum.gpu, rec: selectedGameData.recommended.gpu },
                    { label: 'Storage', min: `${selectedGameData.minimum.storage} GB`, rec: `${selectedGameData.recommended.storage} GB` },
                    ...(selectedGameData.minimum.directx ? [{ label: 'DirectX', min: selectedGameData.minimum.directx, rec: selectedGameData.recommended.directx ?? '' }] : []),
                  ].map((row) => (
                    <tr key={row.label} className="border-b border-border/50 hover:bg-bg-tertiary/40">
                      <td className="py-3 pr-4 font-medium text-slate-300">{row.label}</td>
                      <td className="py-3 pr-4 text-slate-400 text-xs">{row.min}</td>
                      <td className="py-3 text-slate-400 text-xs">{row.rec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <button onClick={handleReset} className="btn-secondary">
            Check Another Game
          </button>
        </div>
      )}

      {/* Game list (when no result) */}
      {!result && (
        <div>
          <h3 className="text-slate-400 font-medium mb-4 text-sm">Supported games ({games.length})</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {games.map((g) => {
              const Icon = GAME_ICON_MAP[g.id]
              return (
                <button
                  key={g.id}
                  onClick={() => setSelectedGame(g.id)}
                  className={`card-sm flex flex-col items-center gap-2 text-center cursor-pointer hover:border-border-light transition-all text-sm ${selectedGame === g.id ? 'border-accent-cyan/40 bg-accent-cyan/5' : ''}`}
                >
                  {Icon
                    ? <span className={`text-xl ${selectedGame === g.id ? 'text-accent-cyan' : 'text-slate-400'}`}><Icon size={24} /></span>
                    : <span className="text-2xl">{g.emoji}</span>
                  }
                  <span className="text-slate-300 text-xs leading-tight">{g.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

function ProgressBar({ label, value, max, color }: { label: string; value: number; max: number; color: string }) {
  const pct = Math.min(100, Math.round((value / max) * 100))
  return (
    <div>
      <div className="flex justify-between text-xs text-slate-500 mb-1">
        <span>{label}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-2 bg-bg-tertiary rounded-full overflow-hidden">
        <div className={`h-full rounded-full transition-all duration-500 ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

function getBarColor(status: Result): string {
  if (status === 'recommended') return 'bg-green-500'
  if (status === 'minimum') return 'bg-yellow-500'
  return 'bg-red-500'
}
