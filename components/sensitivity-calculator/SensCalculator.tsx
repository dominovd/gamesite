'use client'

import { useState, useMemo } from 'react'
import {
  CS2Icon,
  ValorantIcon,
  ApexIcon,
  OverwatchIcon,
  WarzoneIcon,
} from '@/components/icons/GameIcons'

// PUBG & R6 don't have brand icons — use inline SVG
function R6Icon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h4v2H7V7zm6 0h4v2h-4V7zm-6 4h4v2H7v-2zm6 0h4v2h-4v-2zm-6 4h4v2H7v-2zm6 0h4v2h-4v-2z" />
    </svg>
  )
}
function PUBGIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
    </svg>
  )
}

interface GameConfig {
  name: string
  icon: React.FC<{ size?: number; className?: string }>
  yaw: number
  sensMin: number
  sensMax: number
  sensStep: number
  sensDecimals: number
  defaultSens: number
  color: string
  description: string
}

const GAMES: Record<string, GameConfig> = {
  cs2: {
    name: 'CS2 / CSGO',
    icon: CS2Icon,
    yaw: 0.022,
    sensMin: 0.1,
    sensMax: 10,
    sensStep: 0.01,
    sensDecimals: 2,
    defaultSens: 1.0,
    color: '#F5A623',
    description: 'Counter-Strike 2',
  },
  valorant: {
    name: 'Valorant',
    icon: ValorantIcon,
    yaw: 0.07,
    sensMin: 0.01,
    sensMax: 10,
    sensStep: 0.01,
    sensDecimals: 2,
    defaultSens: 0.35,
    color: '#FF4655',
    description: 'Valorant',
  },
  apex: {
    name: 'Apex Legends',
    icon: ApexIcon,
    yaw: 0.022,
    sensMin: 1,
    sensMax: 20,
    sensStep: 0.1,
    sensDecimals: 1,
    defaultSens: 3.0,
    color: '#CD4220',
    description: 'Apex Legends',
  },
  overwatch2: {
    name: 'Overwatch 2',
    icon: OverwatchIcon,
    yaw: 0.0066,
    sensMin: 1,
    sensMax: 100,
    sensStep: 1,
    sensDecimals: 0,
    defaultSens: 7,
    color: '#F99E1A',
    description: 'Overwatch 2',
  },
  r6siege: {
    name: 'R6 Siege',
    icon: R6Icon,
    yaw: 0.00572957795,
    sensMin: 1,
    sensMax: 100,
    sensStep: 1,
    sensDecimals: 0,
    defaultSens: 20,
    color: '#1B9AC4',
    description: 'Rainbow Six Siege (Uniform Aiming)',
  },
  pubg: {
    name: 'PUBG',
    icon: PUBGIcon,
    yaw: 0.04762,
    sensMin: 1,
    sensMax: 100,
    sensStep: 1,
    sensDecimals: 0,
    defaultSens: 50,
    color: '#C6A951',
    description: 'PUBG: Battlegrounds (General Sensitivity)',
  },
}

const PRO_PLAYERS = [
  { name: 's1mple', game: 'cs2', dpi: 400, sens: 3.09, team: 'NAVI' },
  { name: 'ZywOo', game: 'cs2', dpi: 400, sens: 2.0, team: 'Vitality' },
  { name: 'NiKo', game: 'cs2', dpi: 400, sens: 1.18, team: 'G2' },
  { name: 'TenZ', game: 'valorant', dpi: 800, sens: 0.408, team: 'Sentinels' },
  { name: 'yay', game: 'valorant', dpi: 800, sens: 0.44, team: 'CLOUD9' },
  { name: 'Shroud', game: 'apex', dpi: 450, sens: 2.4, team: 'Retired' },
  { name: 'Aceu', game: 'apex', dpi: 800, sens: 1.0, team: 'Retired' },
]

function calculateEDPI(dpi: number, sens: number): number {
  return Math.round(dpi * sens * 100) / 100
}

function calculateCM360(dpi: number, sens: number, yaw: number): number {
  return Math.round((360 / (dpi * sens * yaw)) * 100) / 100
}

function convertSens(
  fromGame: string,
  toGame: string,
  sens: number,
  dpi: number
): number {
  const from = GAMES[fromGame]
  const to = GAMES[toGame]
  const cm360 = calculateCM360(dpi, sens, from.yaw)
  const newSens = 360 / (dpi * cm360 * to.yaw)
  const decimals = to.sensDecimals
  return Math.round(newSens * Math.pow(10, decimals)) / Math.pow(10, decimals)
}

export default function SensCalculator() {
  const [fromGame, setFromGame] = useState('cs2')
  const [toGame, setToGame] = useState('valorant')
  const [sens, setSens] = useState(1.0)
  const [dpi, setDpi] = useState(800)

  const fromConfig = GAMES[fromGame]
  const toConfig = GAMES[toGame]

  const converted = useMemo(() => convertSens(fromGame, toGame, sens, dpi), [fromGame, toGame, sens, dpi])
  const cm360 = useMemo(() => calculateCM360(dpi, sens, fromConfig.yaw), [dpi, sens, fromConfig])
  const edpi = useMemo(() => calculateEDPI(dpi, sens), [dpi, sens])

  const handleSwap = () => {
    const prev = fromGame
    setFromGame(toGame)
    setToGame(prev)
    setSens(converted)
  }

  return (
    <div className="space-y-8">
      {/* Main Calculator */}
      <div className="grid md:grid-cols-5 gap-4 items-end">
        {/* From */}
        <div className="md:col-span-2 space-y-3">
          <label className="block text-sm font-medium text-slate-300">Source game</label>
          <div className="relative">
            <select
              value={fromGame}
              onChange={(e) => { setFromGame(e.target.value); setSens(GAMES[e.target.value].defaultSens) }}
              className="select-field pr-10"
            >
              {Object.entries(GAMES).map(([key, g]) => (
                <option key={key} value={key}>{g.name}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1.5">
              Sensitivity ({fromConfig.sensMin}–{fromConfig.sensMax})
            </label>
            <input
              type="number"
              value={sens}
              onChange={(e) => setSens(parseFloat(e.target.value) || 0)}
              min={fromConfig.sensMin}
              max={fromConfig.sensMax}
              step={fromConfig.sensStep}
              className="input-field"
            />
          </div>
        </div>

        {/* Swap button */}
        <div className="flex justify-center md:col-span-1">
          <button
            onClick={handleSwap}
            className="btn-secondary p-3 rounded-full"
            title="Swap games"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </button>
        </div>

        {/* To */}
        <div className="md:col-span-2 space-y-3">
          <label className="block text-sm font-medium text-slate-300">Target game</label>
          <div className="relative">
            <select
              value={toGame}
              onChange={(e) => setToGame(e.target.value)}
              className="select-field pr-10"
            >
              {Object.entries(GAMES).map(([key, g]) => (
                <option key={key} value={key}>{g.name}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {/* Result box */}
          <div className="bg-accent-purple/10 border border-accent-purple/30 rounded-xl px-4 py-3">
            <div className="text-xs text-slate-400 mb-1">Converted sensitivity</div>
            <div className="text-3xl font-bold gradient-text">
              {converted}
            </div>
          </div>
        </div>
      </div>

      {/* DPI Input */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Mouse DPI
        </label>
        <div className="flex gap-3 items-center">
          <input
            type="number"
            value={dpi}
            onChange={(e) => setDpi(parseInt(e.target.value) || 400)}
            min={100}
            max={25600}
            step={100}
            className="input-field w-40"
          />
          <div className="flex gap-2 flex-wrap">
            {[400, 800, 1600, 3200].map((d) => (
              <button
                key={d}
                onClick={() => setDpi(d)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-200 ${
                  dpi === d
                    ? 'bg-accent-purple/20 text-accent-purple-light border-accent-purple/40'
                    : 'text-slate-500 border-border hover:text-slate-300 hover:border-border-light'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card-sm text-center">
          <div className="text-xs text-slate-500 mb-1 uppercase tracking-wider">eDPI</div>
          <div className="text-2xl font-bold text-slate-100">{edpi}</div>
          <div className="text-xs text-slate-500 mt-1">DPI × Sensitivity</div>
        </div>
        <div className="card-sm text-center">
          <div className="text-xs text-slate-500 mb-1 uppercase tracking-wider">cm/360°</div>
          <div className="text-2xl font-bold text-slate-100">{cm360}</div>
          <div className="text-xs text-slate-500 mt-1">Physical distance per turn</div>
        </div>
        <div className="card-sm text-center">
          <div className="text-xs text-slate-500 mb-1 uppercase tracking-wider">Classification</div>
          <div className={`text-xl font-bold ${getSensClass(cm360).color}`}>
            {getSensClass(cm360).label}
          </div>
          <div className="text-xs text-slate-500 mt-1">{getSensClass(cm360).desc}</div>
        </div>
      </div>

      {/* All Games Conversion */}
      <div>
        <h3 className="text-slate-300 font-semibold mb-4">Your sensitivity in all games</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {Object.entries(GAMES).map(([key, g]) => {
            const conv = key === fromGame ? sens : convertSens(fromGame, key, sens, dpi)
            const Icon = g.icon
            return (
              <div key={key} className={`card-sm flex items-center justify-between ${key === fromGame ? 'border-accent-purple/30 bg-accent-purple/5' : ''}`}>
                <div className="flex items-center gap-2.5">
                  <span className="text-slate-400">
                    <Icon size={18} />
                  </span>
                  <span className="text-sm text-slate-300">{g.name}</span>
                </div>
                <span className={`font-mono font-bold text-sm ${key === fromGame ? 'text-accent-purple-light' : 'text-slate-100'}`}>
                  {conv}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Pro Players */}
      <div>
        <h3 className="text-slate-300 font-semibold mb-4">Pro Player Sensitivity Reference</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-border">
                <th className="pb-3 text-slate-500 font-medium pr-4">Player</th>
                <th className="pb-3 text-slate-500 font-medium pr-4">Game</th>
                <th className="pb-3 text-slate-500 font-medium pr-4">DPI</th>
                <th className="pb-3 text-slate-500 font-medium pr-4">Sensitivity</th>
                <th className="pb-3 text-slate-500 font-medium">eDPI</th>
              </tr>
            </thead>
            <tbody>
              {PRO_PLAYERS.map((p) => (
                <tr key={p.name} className="border-b border-border/50 hover:bg-bg-tertiary/40 transition-colors">
                  <td className="py-3 pr-4 font-medium text-slate-200">{p.name}</td>
                  <td className="py-3 pr-4 text-slate-400">
                    <span className="flex items-center gap-2">
                      {GAMES[p.game] && (() => { const Icon = GAMES[p.game].icon; return <Icon size={15} className="opacity-70" /> })()}
                      {GAMES[p.game]?.name}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-slate-400 font-mono">{p.dpi}</td>
                  <td className="py-3 pr-4 text-slate-400 font-mono">{p.sens}</td>
                  <td className="py-3 text-accent-cyan-light font-mono font-medium">
                    {calculateEDPI(p.dpi, p.sens)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Explanation */}
      <div className="bg-bg-tertiary/50 border border-border rounded-xl p-5">
        <h3 className="text-slate-300 font-semibold mb-3">How sensitivity conversion works</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          Every FPS game maps your mouse movement to camera rotation differently. The conversion uses
          each game's internal <strong className="text-slate-300">yaw value</strong> (degrees of rotation per unit of sensitivity)
          to calculate a common metric: <strong className="text-slate-300">cm/360°</strong> — the physical distance your mouse
          travels for a full 360° turn. By matching this value across games, you get the same physical feel regardless of the title.
        </p>
        <p className="text-slate-400 text-sm leading-relaxed mt-3">
          <strong className="text-slate-300">eDPI</strong> (effective DPI) = DPI × in-game sensitivity.
          Pro players typically use eDPI between 200–800 for precision aiming.
        </p>
      </div>
    </div>
  )
}

function getSensClass(cm360: number): { label: string; color: string; desc: string } {
  if (cm360 < 15) return { label: 'Very High', color: 'text-red-400', desc: 'Twitchy — great for flicking' }
  if (cm360 < 25) return { label: 'High', color: 'text-orange-400', desc: 'Aggressive playstyle' }
  if (cm360 < 40) return { label: 'Medium', color: 'text-green-400', desc: 'Balanced — most common' }
  if (cm360 < 60) return { label: 'Low', color: 'text-blue-400', desc: 'Precise — for accuracy' }
  return { label: 'Very Low', color: 'text-purple-400', desc: 'Requires large mousepad' }
}
