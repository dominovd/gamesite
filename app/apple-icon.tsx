import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          fontWeight: 700,
          fontSize: 100,
          color: 'white',
          letterSpacing: '-2px',
        }}
      >
        G
      </div>
    ),
    { ...size }
  )
}
