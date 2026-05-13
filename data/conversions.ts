export interface ConversionMeta {
  from: string     // game key (cs2, valorant, apex, overwatch2, r6siege, pubg)
  to: string
  fromName: string
  toName: string
  slug: string
  title: string
  description: string
  h1: string
  intro: string
  faqs: { q: string; a: string }[]
}

const GAME_NAMES: Record<string, string> = {
  cs2: 'CS2',
  valorant: 'Valorant',
  apex: 'Apex Legends',
  overwatch2: 'Overwatch 2',
  r6siege: 'Rainbow Six Siege',
  pubg: 'PUBG',
}

// slug segment → game key
export const SLUG_TO_KEY: Record<string, string> = {
  cs2: 'cs2',
  valorant: 'valorant',
  apex: 'apex',
  overwatch: 'overwatch2',
  r6: 'r6siege',
  pubg: 'pubg',
}

export const KEY_TO_SLUG: Record<string, string> = {
  cs2: 'cs2',
  valorant: 'valorant',
  apex: 'apex',
  overwatch2: 'overwatch',
  r6siege: 'r6',
  pubg: 'pubg',
}

// All pairs worth targeting (ordered by search volume estimate)
const PAIRS: [string, string][] = [
  ['valorant', 'cs2'],
  ['cs2', 'valorant'],
  ['apex', 'valorant'],
  ['valorant', 'apex'],
  ['cs2', 'apex'],
  ['apex', 'cs2'],
  ['overwatch2', 'valorant'],
  ['valorant', 'overwatch2'],
  ['overwatch2', 'cs2'],
  ['cs2', 'overwatch2'],
  ['r6siege', 'cs2'],
  ['cs2', 'r6siege'],
  ['r6siege', 'valorant'],
  ['valorant', 'r6siege'],
  ['apex', 'overwatch2'],
  ['overwatch2', 'apex'],
  ['pubg', 'valorant'],
  ['valorant', 'pubg'],
  ['pubg', 'cs2'],
  ['cs2', 'pubg'],
]

function makeConversion(from: string, to: string): ConversionMeta {
  const fn = GAME_NAMES[from]
  const tn = GAME_NAMES[to]
  const slug = `${KEY_TO_SLUG[from]}-to-${KEY_TO_SLUG[to]}`

  return {
    from,
    to,
    fromName: fn,
    toName: tn,
    slug,
    title: `${fn} to ${tn} Sensitivity Converter`,
    description: `Convert your ${fn} mouse sensitivity to ${tn}. Enter your sensitivity and DPI to get the exact equivalent in ${tn}. Free, instant, accurate.`,
    h1: `${fn} to ${tn} Sensitivity Converter`,
    intro: `Convert your ${fn} sensitivity to ${tn} and keep the exact same feel. Enter your current ${fn} sensitivity and DPI below — the calculator automatically applies each game's yaw value to match your cm/360° distance in ${tn}.`,
    faqs: [
      {
        q: `How do I convert ${fn} sensitivity to ${tn}?`,
        a: `Enter your ${fn} sensitivity and mouse DPI. The calculator divides your cm/360° distance (derived from ${fn}'s yaw value) by ${tn}'s yaw value to find the equivalent sensitivity. The formula is: ${tn} sens = (${fn} sens × ${fn} yaw) / ${tn} yaw.`,
      },
      {
        q: `Is ${fn} sensitivity the same as ${tn}?`,
        a: `No. Each game uses a different internal multiplier (yaw) to map mouse movement to camera rotation. The same number in ${fn} and ${tn} will feel completely different. This converter matches the physical mouse distance per 360° turn instead.`,
      },
      {
        q: 'What DPI should I use for this conversion?',
        a: 'Use whatever DPI you actually play at — the conversion result will be correct regardless of DPI. Most players use 400, 800, or 1600 DPI.',
      },
      {
        q: `What is the ${fn} yaw value?`,
        a: `The yaw value is the degrees of camera rotation per unit of in-game sensitivity per count of mouse movement. Different games use different yaw values, which is why sensitivities are not directly comparable between titles.`,
      },
    ],
  }
}

export const CONVERSIONS: ConversionMeta[] = PAIRS.map(([from, to]) => makeConversion(from, to))

export function getConversionBySlug(slug: string): ConversionMeta | undefined {
  return CONVERSIONS.find(c => c.slug === slug)
}

export function parseConversionSlug(slug: string): { from: string; to: string } | null {
  const parts = slug.split('-to-')
  if (parts.length !== 2) return null
  const from = SLUG_TO_KEY[parts[0]]
  const to = SLUG_TO_KEY[parts[1]]
  if (!from || !to || from === to) return null
  return { from, to }
}
