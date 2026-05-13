import {
  SiPlaystation,
  SiRoblox,
  SiDiscord,
  SiSteam,
} from 'react-icons/si'

interface IconProps {
  className?: string
  size?: number
}

// Custom Xbox SVG — not in Simple Icons
export function XboxIcon({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M4.102 20.202C5.794 21.816 8.041 23 12 23s6.206-1.184 7.898-2.798c1.406-1.338-2.632-6.22-7.898-11.887-5.266 5.668-9.304 10.549-7.898 11.887zM12 1C7.697 1 4 3.25 2.133 6.602c-.75 1.317 1.554 3.955 4.109 6.67C8.28 11.025 10.164 9.155 12 7.587c1.836 1.568 3.72 3.438 5.758 5.685 2.555-2.715 4.859-5.353 4.109-6.67C19.999 3.25 16.303 1 12 1z" />
    </svg>
  )
}

export function PlayStationIcon({ className, size = 20 }: IconProps) {
  return <SiPlaystation size={size} className={className} aria-hidden="true" />
}

export function RobloxIcon({ className, size = 20 }: IconProps) {
  return <SiRoblox size={size} className={className} aria-hidden="true" />
}

export function DiscordIcon({ className, size = 20 }: IconProps) {
  return <SiDiscord size={size} className={className} aria-hidden="true" />
}

export function SteamIcon({ className, size = 20 }: IconProps) {
  return <SiSteam size={size} className={className} aria-hidden="true" />
}
