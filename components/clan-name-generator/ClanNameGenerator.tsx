'use client'

import { useState, useCallback } from 'react'
import { generateClanNames, type ClanTheme } from '@/data/clanwordbank'

const THEMES: { id: ClanTheme; label: string; emoji: string; color: string }[] = [
  { id: 'all',      label: 'All Themes',  emoji: '🎮', color: 'text-accent-purple' },
  { id: 'military', label: 'Military',    emoji: '⚔️',  color: 'text-slate-300' },
  { id: 'mythic',   label: 'Mythic',      emoji: '🐉', color: 'text-yellow-400' },
  { id: 'cyber',    label: 'Cyber',       emoji: '🤖', color: 'text-accent-cyan' },
  { id: 'shadow',   label: 'Shadow',      emoji: '👁️',  color: 'text-slate-400' },
  { id: 'fire',     label: 'Fire',        emoji: '🔥', color: 'text-orange-400' },
]

export default function ClanNameGenerator() {
  const [theme, setTheme] = useState<ClanTheme>('all')
  const [results, setResults] = useState<Array<{ name: string; tag: string }>>(() => generateClanNames('all'))
  const [copied, setCopied] = useState<string | null>(null)

  const generate = useCallback((t: ClanTheme) => {
    setResults(generateClanNames(t))
    setCopied(null)
  }, [])

  const handleTheme = (t: ClanTheme) => {
    setTheme(t)
    generate(t)
  }

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(text)
      setTimeout(() => setCopied(null), 1500)
    })
  }

  const activeTheme = THEMES.find(t => t.id === theme)!

  return (
    <div>
      {/* Theme tabs */}
      <div className="mb-6">
        <div className="text-xs text-slate-500 uppercase tracking-wider mb-3 font-medium">Theme</div>
        <div className="flex flex-wrap gap-2">
          {THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => handleTheme(t.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                theme === t.id
                  ? 'bg-accent-purple/20 text-accent-purple-light border border-accent-purple/40'
                  : 'text-slate-400 border border-border hover:border-border-light hover:text-slate-200'
              }`}
            >
              <span>{t.emoji}</span>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Generate button */}
      <button
        onClick={() => generate(theme)}
        className="w-full mb-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 bg-gradient-to-r from-accent-purple to-accent-cyan hover:opacity-90 active:scale-[0.99]"
      >
        ⚡ Generate Clan Names
      </button>

      {/* Results grid */}
      <div className="grid sm:grid-cols-2 gap-3">
        {results.map(({ name, tag }) => (
          <div
            key={name}
            className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-bg-tertiary border border-border hover:border-border-light transition-all group"
          >
            <div className="min-w-0">
              <div className="text-slate-200 font-medium text-sm truncate">{name}</div>
              <div className="text-slate-600 text-xs mt-0.5">
                Tag: <span className={`font-mono font-bold ${activeTheme.color}`}>[{tag}]</span>
              </div>
            </div>
            <div className="flex gap-1.5 flex-shrink-0">
              {/* Copy tag */}
              <button
                onClick={() => copyText(`[${tag}]`)}
                title="Copy tag"
                className="p-1.5 rounded-lg text-slate-600 hover:text-accent-cyan hover:bg-accent-cyan/10 transition-all"
              >
                {copied === `[${tag}]` ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <text x="4" y="16" fontSize="12" fill="currentColor" stroke="none" fontFamily="monospace" fontWeight="bold">[ ]</text>
                  </svg>
                )}
              </button>
              {/* Copy name */}
              <button
                onClick={() => copyText(name)}
                title="Copy name"
                className="p-1.5 rounded-lg text-slate-600 hover:text-accent-purple hover:bg-accent-purple/10 transition-all"
              >
                {copied === name ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-slate-600 text-xs mt-4">
        Click ⚡ to regenerate · Copy the tag <span className="font-mono">[TAG]</span> or full name separately
      </p>
    </div>
  )
}
