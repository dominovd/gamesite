import type { Metadata } from 'next'
import UsernameGenerator from '@/components/username-generator/UsernameGenerator'

const PLATFORM_META: Record<string, { title: string; description: string; keywords: string[] }> = {
  roblox: {
    title: 'Roblox Username Generator — Free Random Roblox Names',
    description: 'Generate unique Roblox usernames instantly. Get hundreds of cool, funny and creative username ideas for your Roblox account. Free, no sign-up.',
    keywords: ['roblox username generator', 'roblox name generator', 'roblox usernames', 'roblox name ideas', 'random roblox username', 'roblox display name generator'],
  },
  xbox: {
    title: 'Xbox Gamertag Generator — Free Xbox Name Ideas',
    description: 'Generate unique Xbox gamertags instantly. Cool, funny, and creative gamertag ideas for Xbox. Free gamertag maker with hundreds of combinations.',
    keywords: ['xbox gamertag generator', 'gamertag generator', 'gamertag maker', 'xbox name generator', 'gamertag creator', 'xbox gamertag ideas'],
  },
  ps5: {
    title: 'PS5 Username Generator — Free PlayStation Name Ideas',
    description: 'Generate unique PSN usernames for your PlayStation account. Cool PS5 name ideas that follow PSN rules. Free, instant, no sign-up.',
    keywords: ['ps5 username generator', 'psn name generator', 'playstation username generator', 'ps5 name ideas', 'psn id generator'],
  },
  discord: {
    title: 'Discord Username Generator — Free Discord Name Ideas',
    description: 'Generate unique Discord usernames instantly. Cool, creative Discord name ideas that follow Discord rules. Free username generator.',
    keywords: ['discord username generator', 'discord name generator', 'discord names', 'discord username ideas', 'discord display name generator'],
  },
  steam: {
    title: 'Steam Username Generator — Free Steam Name Ideas',
    description: 'Generate unique Steam usernames and profile names. Cool Steam name ideas for your gaming profile. Free, instant.',
    keywords: ['steam username generator', 'steam name generator', 'steam profile name ideas', 'steam display name generator'],
  },
}

export function generateMetadata({ params }: { params: { platform: string } }): Metadata {
  const meta = PLATFORM_META['steam']
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: 'https://hplaptop.co/username-generator/steam' },
  }
}

const PLATFORM_CONTENT: Record<string, { heading: string; subheading: string; faq: { q: string; a: string }[] }> = {
  roblox: {
    heading: 'Roblox Username Generator',
    subheading: 'Generate unique, cool, and creative Roblox usernames instantly. Hundreds of combinations — totally free.',
    faq: [
      { q: 'How long can a Roblox username be?', a: 'Roblox usernames can be 3 to 20 characters long. They can contain letters, numbers, and underscores, but must start with a letter.' },
      { q: 'Can I change my Roblox username?', a: 'Yes, you can change your Roblox username, but it costs 1,000 Robux each time. Your display name can be changed for free.' },
      { q: 'What characters are allowed in Roblox usernames?', a: 'Only letters (a-z, A-Z), numbers (0-9), and underscores (_). No spaces, hyphens, or other special characters.' },
      { q: 'Are Roblox usernames case-sensitive?', a: 'Roblox usernames are not case-sensitive for searching, but the capitalization you chose will display on your profile.' },
    ],
  },
  xbox: {
    heading: 'Xbox Gamertag Generator',
    subheading: 'Generate the perfect Xbox gamertag. Unique, cool, and available — get hundreds of ideas instantly for free.',
    faq: [
      { q: 'How long can an Xbox gamertag be?', a: 'Xbox gamertags can be up to 12 characters long (for English-language gamertags). Some special characters add to this count.' },
      { q: 'Can I use spaces in my Xbox gamertag?', a: 'Yes! Unlike most platforms, Xbox gamertags allow spaces. You can also have up to 3 spaces.' },
      { q: 'How much does it cost to change an Xbox gamertag?', a: 'Your first gamertag change is free. After that, it costs .99 (USD) per change on Xbox.' },
      { q: 'What makes a good Xbox gamertag?', a: 'A good gamertag is short, memorable, and unique. Avoid offensive terms as Microsoft may suspend accounts with inappropriate gamertags.' },
    ],
  },
  ps5: {
    heading: 'PS5 Username Generator',
    subheading: 'Generate a unique PlayStation Network username. Cool PSN ID ideas for your PS5 account — free and instant.',
    faq: [
      { q: 'How long can a PSN username be?', a: 'PSN usernames (Online IDs) must be 3 to 16 characters. They can contain letters, numbers, hyphens, and underscores, but must start with a letter.' },
      { q: 'Can I change my PSN username?', a: 'Yes. PlayStation allows you to change your online ID. The first change is free, subsequent changes cost .99 (or .99 for non-PS Plus members).' },
      { q: 'What characters are not allowed in PSN usernames?', a: 'Spaces are not allowed. You also cannot have two or more consecutive special characters (like double underscore or hyphen).' },
      { q: 'Will changing my PSN ID break my games?', a: 'Most PS4 and PS5 games support online ID changes. Some older PS3 and early PS4 games may have issues. Always review the list on PlayStation\'s website first.' },
    ],
  },
  discord: {
    heading: 'Discord Username Generator',
    subheading: 'Generate a unique Discord username. Creative name ideas that follow Discord\'s rules — free, instant.',
    faq: [
      { q: 'How long can a Discord username be?', a: 'Discord usernames must be between 2 and 32 characters. Allowed characters include letters, numbers, underscores, periods, and hyphens.' },
      { q: 'Are Discord usernames unique?', a: 'Since Discord\'s 2023 update, all usernames are unique globally. Display names (nicknames) can be set per-server and can repeat.' },
      { q: 'Can I use spaces in a Discord username?', a: 'No, spaces are not allowed in Discord usernames. Use underscores or periods as separators instead.' },
      { q: 'How often can I change my Discord username?', a: 'Discord allows you to change your username twice within a 30-day period for free.' },
    ],
  },
  steam: {
    heading: 'Steam Username Generator',
    subheading: 'Generate a unique Steam username (Steam URL name). Profile name ideas for your Steam account — free and instant.',
    faq: [
      { q: 'What is a Steam username vs Steam display name?', a: 'Your Steam username (custom URL) is your unique profile identifier (e.g., steamcommunity.com/id/yourusername). Your display name is separate and visible in games and chat.' },
      { q: 'How long can a Steam username be?', a: 'Steam custom URLs (usernames) are 2 to 32 characters. Only letters, numbers, underscores, and hyphens are allowed.' },
      { q: 'Can I change my Steam username?', a: 'Yes, you can change your Steam profile custom URL anytime for free in your account settings. Your display name can also be changed freely.' },
      { q: 'Are Steam usernames case-sensitive?', a: 'Steam profile URLs are not case-sensitive. However, your display name can use any capitalization you like.' },
    ],
  },
}

export default function PlatformGeneratorPage() {
  const content = PLATFORM_CONTENT['steam']

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          {content.heading}
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          {content.subheading}
        </p>
      </div>

      <div className="card mb-12">
        <UsernameGenerator defaultPlatform="steam" />
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold text-slate-100 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {content.faq.map((item, i) => (
            <div key={i} className="card-sm">
              <h3 className="font-semibold text-slate-200 mb-2">{item.q}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
