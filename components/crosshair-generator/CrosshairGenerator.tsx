'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

interface CrosshairSettings {
  color: string
  size: number
  thickness: number
  gap: number
  outline: boolean
  outlineThickness: number
  dot: boolean
  dotSize: number
  style: 'classic' | 'cross' | 'circle' | 'dot'
  opacity: number
}

const DEFAULT: CrosshairSettings = {
  color: '#00ff88',
  size: 10,
  thickness: 2,
  gap: 4,
  outline: true,
  outlineThickness: 1,
  dot: false,
  dotSize: 2,
  style: 'classic',
  opacity: 100,
}

const PRESETS: { name: string; game: string; settings: Partial<CrosshairSettings> }[] = [
  { name: 'Default', game: 'CS2', settings: { color: '#00ff00', size: 10, thickness: 2, gap: 4, outline: true, dot: false, style: 'classic' } },
  { name: 'Small Static', game: 'CS2', settings: { color: '#00ff00', size: 5, thickness: 1, gap: 2, outline: true, dot: true, dotSize: 1, style: 'classic' } },
  { name: 'Pro - s1mple', game: 'CS2', settings: { color: '#ffffff', size: 3, thickness: 1, gap: 1, outline: false, dot: false, style: 'classic' } },
  { name: 'Default', game: 'Valorant', settings: { color: '#ffffff', size: 8, thickness: 2, gap: 3, outline: true, outlineThickness: 1, dot: false, style: 'classic' } },
  { name: 'Circle', game: 'Valorant', settings: { color: '#00ffff', size: 12, thickness: 2, gap: 0, outline: false, dot: true, dotSize: 2, style: 'circle' } },
  { name: 'Dot Only', game: 'Any', settings: { color: '#ff4444', size: 0, thickness: 0, gap: 0, outline: false, dot: true, dotSize: 4, style: 'dot' } },
]

const COLORS = ['#00ff88', '#00ffff', '#ffffff', '#ff4444', '#ffff00', '#ff8800', '#ff00ff', '#00ff00']

function drawCrosshair(canvas: HTMLCanvasElement, s: CrosshairSettings, scale = 1) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  const w = canvas.width
  const h = canvas.height
  const cx = w / 2
  const cy = h / 2

  ctx.clearRect(0, 0, w, h)

  // Background
  ctx.fillStyle = '#0f1117'
  ctx.fillRect(0, 0, w, h)

  // Grid lines for reference
  ctx.strokeStyle = 'rgba(255,255,255,0.04)'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(cx, 0); ctx.lineTo(cx, h)
  ctx.moveTo(0, cy); ctx.lineTo(w, cy)
  ctx.stroke()

  const alpha = s.opacity / 100
  const size = s.size * scale
  const thick = Math.max(1, s.thickness * scale)
  const gap = s.gap * scale
  const outThick = s.outlineThickness * scale

  if (s.style === 'dot') {
    // Just a dot
    if (s.dot) {
      const r = s.dotSize * scale
      if (s.outline) {
        ctx.fillStyle = `rgba(0,0,0,${alpha})`
        ctx.beginPath(); ctx.arc(cx, cy, r + outThick, 0, Math.PI * 2); ctx.fill()
      }
      ctx.fillStyle = s.color + Math.round(alpha * 255).toString(16).padStart(2, '0')
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill()
    }
    return
  }

  if (s.style === 'circle') {
    const r = size + gap
    if (r > 0) {
      if (s.outline) {
        ctx.strokeStyle = `rgba(0,0,0,${alpha})`
        ctx.lineWidth = thick + outThick * 2
        ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke()
      }
      ctx.strokeStyle = s.color + Math.round(alpha * 255).toString(16).padStart(2, '0')
      ctx.lineWidth = thick
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke()
    }
    if (s.dot) {
      const dr = s.dotSize * scale
      if (s.outline) {
        ctx.fillStyle = `rgba(0,0,0,${alpha})`
        ctx.beginPath(); ctx.arc(cx, cy, dr + outThick, 0, Math.PI * 2); ctx.fill()
      }
      ctx.fillStyle = s.color + Math.round(alpha * 255).toString(16).padStart(2, '0')
      ctx.beginPath(); ctx.arc(cx, cy, dr, 0, Math.PI * 2); ctx.fill()
    }
    return
  }

  // Classic / Cross: 4 lines from gap outward
  const lines = s.style === 'cross'
    ? [
        [cx + gap, cy, cx + gap + size, cy],
        [cx - gap, cy, cx - gap - size, cy],
        [cx, cy + gap, cx, cy + gap + size],
        [cx, cy - gap, cx, cy - gap - size],
      ]
    : [
        [cx + gap, cy, cx + gap + size, cy],
        [cx - gap, cy, cx - gap - size, cy],
        [cx, cy + gap, cx, cy + gap + size],
        [cx, cy - gap, cx, cy - gap - size],
      ]

  if (size > 0) {
    // Outline pass
    if (s.outline) {
      ctx.strokeStyle = `rgba(0,0,0,${alpha})`
      ctx.lineWidth = thick + outThick * 2
      ctx.lineCap = 'square'
      lines.forEach(([x1, y1, x2, y2]) => {
        ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke()
      })
    }
    // Color pass
    ctx.strokeStyle = s.color + Math.round(alpha * 255).toString(16).padStart(2, '0')
    ctx.lineWidth = thick
    ctx.lineCap = 'square'
    lines.forEach(([x1, y1, x2, y2]) => {
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke()
    })
  }

  // Center dot
  if (s.dot) {
    const dr = s.dotSize * scale
    if (s.outline) {
      ctx.fillStyle = `rgba(0,0,0,${alpha})`
      ctx.beginPath(); ctx.arc(cx, cy, dr + outThick, 0, Math.PI * 2); ctx.fill()
    }
    ctx.fillStyle = s.color + Math.round(alpha * 255).toString(16).padStart(2, '0')
    ctx.beginPath(); ctx.arc(cx, cy, dr, 0, Math.PI * 2); ctx.fill()
  }
}

function Slider({ label, value, min, max, step = 1, onChange }: {
  label: string; value: number; min: number; max: number; step?: number
  onChange: (v: number) => void
}) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-slate-400 text-xs">{label}</span>
        <span className="text-slate-300 text-xs font-mono">{value}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-purple-500"
        style={{ accentColor: '#a855f7' }}
      />
    </div>
  )
}

export default function CrosshairGenerator() {
  const [s, setS] = useState<CrosshairSettings>(DEFAULT)
  const [copied, setCopied] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const update = (patch: Partial<CrosshairSettings>) => setS(prev => ({ ...prev, ...patch }))

  useEffect(() => {
    if (canvasRef.current) drawCrosshair(canvasRef.current, s, 3)
  }, [s])

  const cs2Code = [
    `cl_crosshaircolor_r ${parseInt(s.color.slice(1, 3), 16)}`,
    `cl_crosshaircolor_g ${parseInt(s.color.slice(3, 5), 16)}`,
    `cl_crosshaircolor_b ${parseInt(s.color.slice(5, 7), 16)}`,
    `cl_crosshairsize ${s.size}`,
    `cl_crosshairthickness ${s.thickness}`,
    `cl_crosshairgap ${s.gap - 4}`,
    `cl_crosshairdot ${s.dot ? 1 : 0}`,
    `cl_crosshair_drawoutline ${s.outline ? 1 : 0}`,
    `cl_crosshair_outlinethickness ${s.outlineThickness}`,
    `cl_crosshairalpha ${Math.round(s.opacity / 100 * 255)}`,
  ].join('; ')

  const copyCode = () => {
    navigator.clipboard.writeText(cs2Code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Left: Preview */}
      <div className="space-y-4">
        <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Preview</div>
        <div className="relative rounded-xl overflow-hidden border border-border" style={{ background: '#0f1117' }}>
          <canvas
            ref={canvasRef}
            width={300}
            height={300}
            className="w-full"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>

        {/* Style picker */}
        <div>
          <div className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-medium">Style</div>
          <div className="grid grid-cols-4 gap-2">
            {(['classic', 'cross', 'circle', 'dot'] as const).map(st => (
              <button
                key={st}
                onClick={() => update({ style: st })}
                className={`py-1.5 rounded-lg text-xs font-medium transition-all capitalize ${
                  s.style === st
                    ? 'bg-accent-purple/20 text-accent-purple-light border border-accent-purple/40'
                    : 'text-slate-400 border border-border hover:border-border-light'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Color */}
        <div>
          <div className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-medium">Color</div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5 flex-wrap">
              {COLORS.map(c => (
                <button
                  key={c}
                  onClick={() => update({ color: c })}
                  className={`w-6 h-6 rounded-full transition-all ${s.color === c ? 'ring-2 ring-white ring-offset-1 ring-offset-bg-primary scale-110' : 'hover:scale-105'}`}
                  style={{ background: c }}
                  title={c}
                />
              ))}
            </div>
            <input
              type="color"
              value={s.color}
              onChange={e => update({ color: e.target.value })}
              className="w-8 h-6 rounded cursor-pointer border-0 bg-transparent"
              title="Custom color"
            />
          </div>
        </div>

        {/* Presets */}
        <div>
          <div className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-medium">Presets</div>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map(p => (
              <button
                key={p.name + p.game}
                onClick={() => setS(prev => ({ ...prev, ...p.settings }))}
                className="px-2.5 py-1 rounded-lg text-xs border border-border text-slate-400 hover:border-border-light hover:text-slate-200 transition-all"
              >
                {p.game}: {p.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Controls */}
      <div className="space-y-5">
        <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Settings</div>

        <div className="space-y-4">
          <Slider label="Size" value={s.size} min={0} max={20} onChange={v => update({ size: v })} />
          <Slider label="Thickness" value={s.thickness} min={1} max={8} onChange={v => update({ thickness: v })} />
          <Slider label="Gap" value={s.gap} min={0} max={16} onChange={v => update({ gap: v })} />
          <Slider label="Opacity" value={s.opacity} min={10} max={100} onChange={v => update({ opacity: v })} />
        </div>

        <div className="space-y-3 pt-2 border-t border-border">
          {/* Outline toggle */}
          <div className="flex items-center justify-between">
            <span className="text-slate-400 text-sm">Outline</span>
            <button
              onClick={() => update({ outline: !s.outline })}
              className={`relative w-10 h-5 rounded-full transition-colors ${s.outline ? 'bg-accent-purple' : 'bg-bg-tertiary border border-border'}`}
            >
              <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all ${s.outline ? 'left-5' : 'left-0.5'}`} />
            </button>
          </div>
          {s.outline && (
            <Slider label="Outline thickness" value={s.outlineThickness} min={1} max={4} onChange={v => update({ outlineThickness: v })} />
          )}

          {/* Dot toggle */}
          <div className="flex items-center justify-between">
            <span className="text-slate-400 text-sm">Center dot</span>
            <button
              onClick={() => update({ dot: !s.dot })}
              className={`relative w-10 h-5 rounded-full transition-colors ${s.dot ? 'bg-accent-purple' : 'bg-bg-tertiary border border-border'}`}
            >
              <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all ${s.dot ? 'left-5' : 'left-0.5'}`} />
            </button>
          </div>
          {s.dot && (
            <Slider label="Dot size" value={s.dotSize} min={1} max={8} onChange={v => update({ dotSize: v })} />
          )}
        </div>

        {/* CS2 Config export */}
        <div className="pt-2 border-t border-border">
          <div className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-medium">CS2 Console Commands</div>
          <div className="bg-bg-tertiary rounded-lg p-3 text-xs font-mono text-slate-400 leading-relaxed break-all mb-3">
            {cs2Code}
          </div>
          <button
            onClick={copyCode}
            className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all ${
              copied
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-accent-purple/15 text-accent-purple-light border border-accent-purple/30 hover:bg-accent-purple/25'
            }`}
          >
            {copied ? '✓ Copied!' : 'Copy CS2 Config'}
          </button>
        </div>
      </div>
    </div>
  )
}
