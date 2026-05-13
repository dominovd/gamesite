export const adjectives = [
  'Shadow', 'Dark', 'Silent', 'Void', 'Storm', 'Neon', 'Cyber', 'Ghost',
  'Steel', 'Iron', 'Phantom', 'Chaos', 'Venom', 'Frost', 'Thunder',
  'Electric', 'Savage', 'Wild', 'Swift', 'Rogue', 'Crimson', 'Azure',
  'Obsidian', 'Blazing', 'Frozen', 'Ancient', 'Legendary', 'Eternal',
  'Deadly', 'Fierce', 'Ruthless', 'Furious', 'Toxic', 'Fearless', 'Elite',
  'Ultra', 'Hyper', 'Alpha', 'Omega', 'Prime', 'Apex', 'Raging', 'Stealth',
  'Wicked', 'Cursed', 'Sacred', 'Mystic', 'Lunar', 'Solar', 'Cosmic',
  'Infernal', 'Celestial', 'Hollow', 'Broken', 'Fallen', 'Lost', 'Hidden',
  'Turbo', 'Nuclear', 'Atomic', 'Binary', 'Digital', 'Glitch', 'Error',
  'Void', 'Rift', 'Surge', 'Blaze', 'Drift', 'Burst', 'Flash', 'Bolt',
  'Claw', 'Blade', 'Edge', 'Spike', 'Omen', 'Dusk', 'Dawn', 'Midnight',
  'Bloody', 'Grim', 'Gloomy', 'Shattered', 'Twisted', 'Corrupt', 'Pure',
  'Crystal', 'Diamond', 'Golden', 'Silver', 'Bronze', 'Rusty', 'Sharp',
  'Rapid', 'Sonic', 'Hyper', 'Mega', 'Ultra', 'Super', 'Extreme', 'Brutal',
]

export const nouns = [
  'Blade', 'Wolf', 'Fox', 'Dragon', 'Hawk', 'Storm', 'Raven', 'Phoenix',
  'Titan', 'Ghost', 'Viper', 'Shark', 'Knight', 'Hunter', 'Sniper', 'Ninja',
  'Warrior', 'Reaper', 'Demon', 'Angel', 'Specter', 'Wraith', 'Slayer',
  'Crusher', 'Destroyer', 'Predator', 'Assassin', 'Mercenary', 'Sentinel',
  'Scorpion', 'Falcon', 'Eagle', 'Cobra', 'Panther', 'Lynx', 'Tiger',
  'Legend', 'Champion', 'Ace', 'Ranger', 'Guardian', 'Paladin', 'Berserker',
  'Shaman', 'Oracle', 'Rogue', 'Duelist', 'Marksman', 'Rifleman', 'Scout',
  'Specter', 'Stalker', 'Bandit', 'Outlaw', 'Raider', 'Pirate', 'Viking',
  'Samurai', 'Templar', 'Bishop', 'Bishop', 'Baron', 'Overlord', 'Emperor',
  'Shadow', 'Phantom', 'Wraith', 'Spirit', 'Soul', 'Void', 'Abyss', 'Rift',
  'Storm', 'Surge', 'Thunder', 'Lightning', 'Blaze', 'Inferno', 'Glacier',
  'Titan', 'Golem', 'Colossus', 'Behemoth', 'Leviathan', 'Hydra', 'Wyvern',
  'Basilisk', 'Manticore', 'Chimera', 'Cerberus', 'Kraken', 'Hellion',
  'Cipher', 'Vector', 'Nexus', 'Matrix', 'Pixel', 'Byte', 'Code', 'Core',
  'Node', 'Pulse', 'Signal', 'Circuit', 'Quantum', 'Photon', 'Neutron',
]

export const suffixes = [
  '', '', '', '', '', // empty suffix most common
  'x', 'X', 'XL', 'Pro', 'God', 'GG', 'TV',
  '1', '2', '7', '9', '11', '13', '99',
  '_1', '_x', '_gg', '_pro',
  '777', '007', '404', '360', '1337',
]

export const prefixes = [
  '', '', '', '', '', // empty prefix most common
  'the', 'The', 'xX', 'i', 'Real', 'Official', 'its',
  'im', 'Iam', 'pro', 'og', 'og_',
]

export const gamingWords = [
  'Clutch', 'Frag', 'Ace', 'MVP', 'Pro', 'God', 'Beast', 'Monster',
  'King', 'Lord', 'Master', 'Elite', 'Noob', 'Bot', 'Grind', 'Sweat',
  'Carry', 'Feed', 'Rush', 'Camp', 'Snipe', 'Nade', 'Flash', 'Smoke',
  'Peek', 'Spray', 'Tap', 'Burst', 'AWP', 'Rifle', 'Pistol', 'Knife',
]

export const platforms = {
  xbox: {
    name: 'Xbox',
    emoji: '🟢',
    maxLength: 12,
    minLength: 1,
    allowedChars: /^[a-zA-Z0-9 ]+$/,
    allowSpaces: true,
    description: 'Xbox Gamertag: up to 12 characters, letters and numbers, spaces allowed',
    color: '#107C10',
  },
  ps5: {
    name: 'PlayStation',
    emoji: '🔵',
    maxLength: 16,
    minLength: 3,
    allowedChars: /^[a-zA-Z][a-zA-Z0-9_-]*$/,
    allowSpaces: false,
    description: 'PSN ID: 3–16 characters, must start with a letter, underscores and hyphens allowed',
    color: '#00439C',
  },
  roblox: {
    name: 'Roblox',
    emoji: '🔴',
    maxLength: 20,
    minLength: 3,
    allowedChars: /^[a-zA-Z][a-zA-Z0-9_]*$/,
    allowSpaces: false,
    description: 'Roblox: 3–20 characters, letters, numbers, and underscores only',
    color: '#E53E3E',
  },
  discord: {
    name: 'Discord',
    emoji: '🟣',
    maxLength: 32,
    minLength: 2,
    allowedChars: /^[a-zA-Z0-9_.]+$/,
    allowSpaces: false,
    description: 'Discord: 2–32 characters, letters, numbers, underscores, periods',
    color: '#5865F2',
  },
  steam: {
    name: 'Steam',
    emoji: '⚫',
    maxLength: 32,
    minLength: 2,
    allowedChars: /^[a-zA-Z0-9_-]+$/,
    allowSpaces: false,
    description: 'Steam: 2–32 characters, letters, numbers, underscores, hyphens',
    color: '#1b2838',
  },
}

export type Platform = keyof typeof platforms
