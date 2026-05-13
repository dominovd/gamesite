'use client'

import { useState, useCallback } from 'react'
import { adjectives, nouns, suffixes, prefixes, platforms, type Platform } from '@/data/wordbank'
import {
  XboxIcon,
  PlayStationIcon,
  RobloxIcon,
  DiscordIcon,
  SteamIcon,
} from '@/components/icons/PlatformIcons'

const PLATFORM_ICON_MAP: Record<Platform, React.FC<{ size?: number; className?: string }>> = {
  xbox:    XboxIcon,
  ps5:     PlayStationIcon,
  roblox:  RobloxIcon,
  discord: DiscordIcon,
  steam:   SteamIcon,
}

const PLATFORM_COLORS: Record<Platform, string> = {
  xbox: 'from-green-600 to-green-500',
  ps5: 'from-blue-700 to-blue-500',
  roblox: 'from-red-600 to-red-500',
  discord: 'from-indigo-600 to-violet-500',
  steam: 'from-slate-600 to-slate-500',
}

function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function slugify(str: string): string {
  return str.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_.-]/g, '')
}

function generateOne(platform: Platform, seed?: string): string {
  const adj = randomFrom(adjectives)
  const noun = randomFrom(nouns)
  const suf = randomFrom(suffixes)
  const pre = randomFrom(prefixes)
  const p = platforms[platform]

  const seedWord = seed ? seed.replace(/\s+/g, '') : ''

  const patterns = [
    `${adj}${noun}`,
    `${adj}${noun}`,
    `${adj}_${noun}`,
    `${noun}${adj}`,
    `${seedWord || adj}${noun}`,
    `${adj}${noun}${suf}`,
    `${pre}${adj}${noun}`,
    `${adj}${noun}${suf}`,
    `x${adj}${noun}x`,
    `${noun}_${adj}`,
    `${adj}${noun}GG`,
    `Real${adj}${noun}`,
  ]

  let result = randomFrom(patterns)

  if (!p.allowSpaces) {
    result = result.replace(/\s+/g, '_')
  }
  result = slugify(result)
  if (result.length > p.maxLength) {
    result = result.slice(0, p.maxLength)
  }
  if (result.length < p.minLength) {
    result = result + 'x'
  }
  return result
}

function generateBatch(platform: Platform, seed?: string, count = 12): string[] {
  const results = new Set<string>()
  let attempts = 0
  while (results.size < count && attempts < 100) {
    results.add(generateOne(platform, seed))
    attempts++
  }
  return Array.from(results)
}

interface Props {
  defaultPlatform?: Platform
}

export default function UsernameGenerator({ defaultPlatform = 'xbox' }: Props) {
  const [activePlatform, setActivePlatform] = useState<Platform>(defaultPlatform)
  const [seed, setSeed] = useState('')
  const [usernames, setUsernames] = useState<string[]>(() =>
    generateBatch(defaultPlatform, undefined, 12)
  )
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null)
  const [generating, setGenerating] = useState(false)

  const handleGenerate = useCallback(() => {
    setGenerating(true)
    setTimeout(() => {
      setUsernames(generateBatch(activePlatform, seed, 12))
      setGenerating(false)
    }, 150)
  }, [activePlatform, seed])

  const handlePlatformChange = useCallback((platform: Platform) => {
    setActivePlatform(platform)
    setUsernames(generateBatch(platform, seed, 12))
  }, [seed])

  const copyToClipboard = (text: string, idx: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIdx(idx)
      setTimeout(() => setCopiedIdx(null), 2000)
    })
  }

  const p = platforms[activePlatform]

  return (
    <div className="space-y-6">
      {/* Platform Tabs */}
      <div className="flex flex-wrap gap-2">
        {(Object.keys(platforms) as Platform[]).map((platform) => {
          const Icon = PLATFORM_ICON_MAP[platform]
          return (
            <button
              key={platform}
              onClick={() => handlePlatformChange(platform)}
              className={`platform-tab ${
                activePlatform === platform
                  ? 'platform-tab-active'
                  : 'platform-tab-inactive'
              }`}
            >
              <Icon size={16} />
              {platforms[platform].name}
            </button>
          )
        })}
      </div>

      {/* Platform info */}
      <div className="bg-bg-tertiary/60 border border-border rounded-xl px-4 py-3 flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${PLATFORM_COLORS[activePlatform]}`} />
        <p className="text-slate-400 text-sm">{p.description}</p>
      </div>

      {/* Input + Button */}
      <div className="flex gap-3">
        <input
          type="text"
          value={seed}
          onChange={(e) => setSeed(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
          placeholder="Add a word (optional, e.g. Shadow)"
          className="input-field flex-1"
          maxLength={20}
        />
        <button
          onClick={handleGenerate}
          disabled={generating}
          className="btn-primary whitespace-nowrap flex items-center gap-2 disabled:opacity-70"
        >
          {generating ? (
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          )}
          Generate
        </button>
      </div>

      {/* Results Grid */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 transition-opacity duration-150 ${generating ? 'opacity-50' : 'opacity-100'}`}>
        {usernames.map((name, idx) => (
          <div
            key={idx}
            className="group flex items-center justify-between bg-bg-tertiary/80 border border-border rounded-xl px-4 py-3.5 hover:border-border-light hover:bg-bg-tertiary transition-all duration-200"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-accent-purple-light font-mono text-sm opacity-50 flex-shrink-0 w-5 text-right">
                {idx + 1}
              </span>
              <span className="text-slate-100 font-medium text-sm font-mono truncate">
                {name}
              </span>
            </div>
            <button
              onClick={() => copyToClipboard(name, idx)}
              className="flex-shrink-0 ml-2 p-1.5 rounded-lg text-slate-500 hover:text-accent-purple-light hover:bg-accent-purple/10 transition-all duration-200"
              aria-label={`Copy ${name}`}
            >
              {copiedIdx === idx ? (
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center justify-between pt-2">
        <p className="text-slate-500 text-sm">
          Click any username to copy it to your clipboard
        </p>
        <button
          onClick={handleGenerate}
          className="btn-secondary text-sm flex items-center gap-2"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          More names
        </button>
      </div>

      {/* Tips */}
      <div className="border-t border-border pt-6">
        <h3 className="text-slate-300 font-semibold mb-4">Tips for a great {p.name} username</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {getPlatformTips(activePlatform).map((tip, i) => (
            <div key={i} className="flex gap-3 text-sm">
              <span className="text-accent-purple flex-shrink-0 mt-0.5">✓</span>
              <span className="text-slate-400">{tip}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function getPlatformTips(platform: Platform): string[] {
  const tips: Record<Platform, string[]> = {
    xbox: [
      'Xbox Gamertags can be up to 12 characters',
      'Spaces are allowed — use them for readability',
      'Letters and numbers only — no special characters',
      'Your gamertag is shown to other Xbox players',
      'You can change it once for free, then it costs',
      'Make it memorable — you\'ll use it for years',
    ],
    ps5: [
      'PSN IDs can be 3–16 characters long',
      'Must start with a letter, not a number',
      'Underscores and hyphens are allowed',
      'Cannot have consecutive special characters',
      'PSN IDs are visible in all PlayStation games',
      'Choose wisely — changes cost real money',
    ],
    roblox: [
      'Roblox usernames are 3–20 characters',
      'Only letters, numbers, and underscores allowed',
      'Must start with a letter',
      'Cannot contain offensive words',
      'Username is permanent — choose carefully',
      'Display name can be changed more freely',
    ],
    discord: [
      'Discord usernames are 2–32 characters',
      'Allowed: letters, numbers, underscores, periods',
      'No spaces — use underscores instead',
      'Username is case-insensitive when searching',
      'Your display name can be different per server',
      'Keep it recognizable for friends to find you',
    ],
    steam: [
      'Steam usernames (profile URLs) are 2–32 characters',
      'Allowed: letters, numbers, underscores, hyphens',
      'Your username appears in your profile URL',
      'You can set a separate display name anytime',
      'Choose something you won\'t regret long-term',
      'Shorter is often more memorable',
    ],
  }
  return tips[platform]
}
