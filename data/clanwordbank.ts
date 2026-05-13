export type ClanTheme = 'all' | 'military' | 'mythic' | 'cyber' | 'shadow' | 'fire'

interface ThemeWords {
  prefixes: string[]
  nouns: string[]
  suffixes: string[]
}

export const clanThemes: Record<ClanTheme, ThemeWords> = {
  all: {
    prefixes: [
      'Iron', 'Steel', 'Shadow', 'Dark', 'Silent', 'Ghost', 'Crimson', 'Neon',
      'Cyber', 'Frozen', 'Storm', 'Thunder', 'Alpha', 'Omega', 'Elite', 'Royal',
      'Ancient', 'Eternal', 'Sacred', 'Infernal', 'Void', 'Blazing', 'Savage',
    ],
    nouns: [
      'Legion', 'Wolves', 'Ravens', 'Dragons', 'Titans', 'Vipers', 'Phantoms',
      'Reapers', 'Falcons', 'Knights', 'Hunters', 'Warriors', 'Guardians',
      'Predators', 'Shadows', 'Ghosts', 'Sentinels', 'Outlaws', 'Raiders',
      'Vikings', 'Samurai', 'Templars', 'Assassins', 'Serpents', 'Cobras',
      'Wraiths', 'Specters', 'Demons', 'Angels', 'Slayers',
    ],
    suffixes: ['', '', '', '', 'GG', 'X', 'Elite', 'Pro', 'Official', 'Rising', 'Reborn', 'Reloaded'],
  },
  military: {
    prefixes: [
      'Iron', 'Steel', 'Alpha', 'Bravo', 'Delta', 'Echo', 'Foxtrot', 'Ghost',
      'Ranger', 'Omega', 'Sigma', 'Titan', 'Unit', 'Strike', 'Special', 'Elite',
    ],
    nouns: [
      'Legion', 'Squad', 'Division', 'Battalion', 'Brigade', 'Regiment', 'Unit',
      'Force', 'Corps', 'Company', 'Platoon', 'Recon', 'Rangers', 'Commandos',
      'Snipers', 'Marksmen', 'Operatives', 'Soldiers', 'Vanguard', 'Wardens',
    ],
    suffixes: ['', '', '', 'Ops', 'Task Force', 'Unit', 'Division', 'Command'],
  },
  mythic: {
    prefixes: [
      'Ancient', 'Eternal', 'Sacred', 'Divine', 'Celestial', 'Infernal', 'Astral',
      'Mystic', 'Legendary', 'Golden', 'Silver', 'Crystal', 'Obsidian', 'Arcane',
    ],
    nouns: [
      'Dragons', 'Titans', 'Hydras', 'Wyverns', 'Phoenixes', 'Leviathans', 'Krakens',
      'Cerberus', 'Chimeras', 'Manticores', 'Basilisks', 'Griffins', 'Valkyries',
      'Paladins', 'Templars', 'Oracles', 'Shamans', 'Warlocks', 'Sorcerers',
    ],
    suffixes: ['', '', '', 'Order', 'Brotherhood', 'Covenant', 'Conclave', 'Vanguard'],
  },
  cyber: {
    prefixes: [
      'Neon', 'Cyber', 'Digital', 'Binary', 'Glitch', 'Pixel', 'Data', 'Turbo',
      'Hyper', 'Ultra', 'Mega', 'Quantum', 'Atomic', 'Nuclear', 'Surge', 'Volt',
    ],
    nouns: [
      'Hackers', 'Coders', 'Nodes', 'Circuits', 'Signals', 'Bytes', 'Pixels',
      'Vectors', 'Matrices', 'Phantoms', 'Ghosts', 'Specters', 'Glitches', 'Cores',
      'Drones', 'Bots', 'Androids', 'Synths', 'Relays', 'Protocols',
    ],
    suffixes: ['', '', '', '.exe', 'v2', 'OS', 'Net', 'Tech', 'Sys', 'IO'],
  },
  shadow: {
    prefixes: [
      'Shadow', 'Dark', 'Silent', 'Hidden', 'Hollow', 'Void', 'Phantom', 'Ghost',
      'Fallen', 'Lost', 'Broken', 'Cursed', 'Grim', 'Dusk', 'Midnight', 'Lunar',
    ],
    nouns: [
      'Wolves', 'Ravens', 'Phantoms', 'Wraiths', 'Specters', 'Shadows', 'Ghosts',
      'Reapers', 'Stalkers', 'Rogues', 'Outlaws', 'Bandits', 'Thieves', 'Rogues',
      'Assassins', 'Hunters', 'Predators', 'Vipers', 'Serpents', 'Cobras',
    ],
    suffixes: ['', '', '', 'Syndicate', 'Cartel', 'Circle', 'Order', 'Cult', 'Pact'],
  },
  fire: {
    prefixes: [
      'Blazing', 'Crimson', 'Infernal', 'Scarlet', 'Ember', 'Magma', 'Solar',
      'Burning', 'Scorching', 'Flaming', 'Volcanic', 'Smoldering', 'Searing',
    ],
    nouns: [
      'Dragons', 'Phoenixes', 'Infernos', 'Flames', 'Embers', 'Torches', 'Blazes',
      'Firestorms', 'Hellhounds', 'Salamanders', 'Hydras', 'Titans', 'Warriors',
      'Demons', 'Hellions', 'Scorpions', 'Serpents', 'Wyverns', 'Drakes',
    ],
    suffixes: ['', '', '', 'Rising', 'Reborn', 'Unleashed', 'Fury', 'Wrath'],
  },
}

export function generateClanTag(name: string): string {
  const words = name.replace(/[^a-zA-Z\s]/g, '').trim().split(/\s+/)
  if (words.length >= 2) {
    // First letters of first 2-4 words
    return words.slice(0, 4).map(w => w[0]).join('').toUpperCase().slice(0, 4)
  }
  // Single word: first 3-4 consonants or chars
  return words[0].replace(/[aeiou]/gi, '').toUpperCase().slice(0, 4) ||
    words[0].toUpperCase().slice(0, 4)
}

export function generateClanNames(theme: ClanTheme, count = 12): Array<{ name: string; tag: string }> {
  const words = theme === 'all'
    ? clanThemes.all
    : {
        prefixes: [...clanThemes[theme].prefixes, ...clanThemes.all.prefixes.slice(0, 5)],
        nouns: [...clanThemes[theme].nouns, ...clanThemes.all.nouns.slice(0, 5)],
        suffixes: clanThemes[theme].suffixes,
      }

  const pick = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)]

  const results: Array<{ name: string; tag: string }> = []
  const seen = new Set<string>()

  let attempts = 0
  while (results.length < count && attempts < 200) {
    attempts++
    const prefix = pick(words.prefixes)
    const noun = pick(words.nouns)
    const suffix = pick(words.suffixes)
    const name = suffix ? `${prefix} ${noun} ${suffix}` : `${prefix} ${noun}`
    if (!seen.has(name)) {
      seen.add(name)
      results.push({ name, tag: generateClanTag(name) })
    }
  }

  return results
}
