import {
  SiValorant,
  SiCounterstrike,
  SiEpicgames,
  SiLeagueoflegends,
  SiRockstargames,
  SiBattledotnet,
} from 'react-icons/si'

interface IconProps {
  className?: string
  size?: number
}

// ── Brand icons from Simple Icons ──────────────────────────────────────

export function ValorantIcon({ className, size = 20 }: IconProps) {
  return <SiValorant size={size} className={className} aria-hidden="true" />
}

export function CS2Icon({ className, size = 20 }: IconProps) {
  return <SiCounterstrike size={size} className={className} aria-hidden="true" />
}

export function EpicGamesIcon({ className, size = 20 }: IconProps) {
  return <SiEpicgames size={size} className={className} aria-hidden="true" />
}

export function LeagueIcon({ className, size = 20 }: IconProps) {
  return <SiLeagueoflegends size={size} className={className} aria-hidden="true" />
}

export function RockstarIcon({ className, size = 20 }: IconProps) {
  return <SiRockstargames size={size} className={className} aria-hidden="true" />
}

export function BattleNetIcon({ className, size = 20 }: IconProps) {
  return <SiBattledotnet size={size} className={className} aria-hidden="true" />
}

// ── Custom SVG icons ───────────────────────────────────────────────────

// Minecraft — pixelated grass block silhouette
export function MinecraftIcon({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M2 2h20v20H2V2zm2 2v16h16V4H4zm2 2h4v4H6V6zm8 0h4v4h-4V6zM6 14h4v4H6v-4zm8 0h4v4h-4v-4zm-4-4h4v4h-4v-4z" />
    </svg>
  )
}

// Apex Legends — diamond / apex shape
export function ApexIcon({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2L2 19.5h4.5L12 8.5l5.5 11H22L12 2zM7.5 19.5H16.5L12 11.5l-4.5 8z" />
    </svg>
  )
}

// Overwatch 2 — stylised wing / OW symbol
export function OverwatchIcon({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
    </svg>
  )
}

// Elden Ring — ring / rune symbol
export function EldenRingIcon({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8zm0 2c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 2c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </svg>
  )
}

// Cyberpunk — circuit/triangle
export function CyberpunkIcon({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 3h8v2H5v14h14v-6h2v8H3V3zm10 0h8v8h-2V6.83l-9.59 9.58-1.41-1.41L17.17 5H13V3z" />
    </svg>
  )
}

// Warzone / COD — crosshair / target
export function WarzoneIcon({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v4h4v2h-4v4h-2v-4H7v-2h4V7z" />
    </svg>
  )
}

// Fortnite — lightning bolt / storm
export function FortniteIcon({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 2l10 10h-5l3 10L5 12h5L7 2z" />
    </svg>
  )
}

// Starfield / space — star shape
export function StarfieldIcon({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" />
    </svg>
  )
}

// Hogwarts Legacy — magic wand
export function HogwartsIcon({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.71 3.29a1 1 0 00-1.42 0L4 18.59V20h1.41L20.71 4.71a1 1 0 000-1.42zM5 17.59l9-9 .71.71-9 9L5 17.59zM16 5l1-1 2 2-1 1-2-2z" />
    </svg>
  )
}

// Palworld — paw / creature
export function PalworldIcon({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C8 2 6 5 6 8c0 2.5 1.5 4.5 3 5.5L8 22h8l-1-8.5c1.5-1 3-3 3-5.5 0-3-2-6-6-6zm-3 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-3 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
    </svg>
  )
}

// Baldur's Gate 3 — d20 die
export function BG3Icon({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2L3 7v10l9 5 9-5V7L12 2zm0 2.3l7 3.9v7.6l-7 3.9-7-3.9V8.2l7-3.9zm0 3.2L8 9.5l4 2.3 4-2.3-4-2zm-5 2.5v4.5l5 2.8V12.5l-5-2.5zm10 0l-5 2.5v4.5l5-2.8v-4.2z" />
    </svg>
  )
}

// ── Game icon map (by game id) ─────────────────────────────────────────

export type GameIconComponent = React.FC<IconProps>

export const GAME_ICON_MAP: Record<string, GameIconComponent> = {
  fortnite:        FortniteIcon,
  valorant:        ValorantIcon,
  cs2:             CS2Icon,
  apex:            ApexIcon,
  cyberpunk2077:   CyberpunkIcon,
  eldenring:       EldenRingIcon,
  gtav:            RockstarIcon,
  minecraft:       MinecraftIcon,
  warzone:         WarzoneIcon,
  baldursgate3:    BG3Icon,
  starfield:       StarfieldIcon,
  hogwartslegacy:  HogwartsIcon,
  lol:             LeagueIcon,
  overwatch2:      OverwatchIcon,
  palworld:        PalworldIcon,
}
