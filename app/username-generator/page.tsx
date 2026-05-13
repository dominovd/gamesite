import type { Metadata } from 'next'
import UsernameGenerator from '@/components/username-generator/UsernameGenerator'

export const metadata: Metadata = {
  title: 'Gaming Username Generator — Xbox, PS5, Roblox, Discord, Steam',
  description: 'Generate unique gaming usernames and gamertags for Xbox, PS5, Roblox, Discord, and Steam. Free, instant, no sign-up required.',
  keywords: ['gaming username generator', 'gamertag generator', 'gamertag maker', 'gaming name generator', 'xbox gamertag generator', 'roblox username generator'],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Gaming Username Generator',
  url: 'https://hplaptop.co/username-generator',
  applicationCategory: 'GameApplication',
  operatingSystem: 'Any',
  description: 'Generate unique gaming usernames for Xbox, PS5, Roblox, Discord and Steam',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function UsernameGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 tag-purple mb-4">
            <span>🎮</span>
            <span>Free Username Generator</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Gaming Username Generator
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Generate unique, cool gamertags and usernames for Xbox, PS5, Roblox, Discord, and Steam.
            Hundreds of combinations instantly — no sign-up needed.
          </p>
        </div>

        {/* Tool */}
        <div className="card mb-12">
          <UsernameGenerator />
        </div>

        {/* SEO Content */}
        <div className="prose-custom space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">How to Use the Gaming Username Generator</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { step: '1', title: 'Choose your platform', desc: 'Select Xbox, PS5, Roblox, Discord, or Steam. Each has different rules for valid usernames.' },
                { step: '2', title: 'Add a word (optional)', desc: 'Type a word you like — a name, theme, or concept — and we\'ll build names around it.' },
                { step: '3', title: 'Generate & Copy', desc: 'Hit Generate for 12 unique suggestions. Click the copy icon to grab any username instantly.' },
              ].map((s) => (
                <div key={s.step} className="card-sm">
                  <div className="text-accent-purple font-bold text-xl mb-2">Step {s.step}</div>
                  <h3 className="font-semibold text-slate-200 mb-1">{s.title}</h3>
                  <p className="text-slate-400 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">Platform-Specific Generators</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: '/username-generator/xbox', name: 'Xbox Gamertag Generator', emoji: '🟢', desc: 'Max 12 chars, spaces allowed' },
                { href: '/username-generator/ps5', name: 'PS5 Username Generator', emoji: '🔵', desc: 'Max 16 chars, start with a letter' },
                { href: '/username-generator/roblox', name: 'Roblox Username Generator', emoji: '🔴', desc: 'Max 20 chars, letters & numbers' },
                { href: '/username-generator/discord', name: 'Discord Username Generator', emoji: '🟣', desc: 'Max 32 chars, any letters & numbers' },
                { href: '/username-generator/steam', name: 'Steam Username Generator', emoji: '⚫', desc: 'Max 32 chars, URL-safe characters' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="card-sm flex items-start gap-3 hover:border-border-light transition-all group"
                >
                  <span className="text-2xl">{link.emoji}</span>
                  <div>
                    <div className="font-medium text-slate-200 text-sm group-hover:text-accent-purple-light transition-colors">{link.name}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{link.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">Tips for Choosing the Perfect Gaming Username</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-400">
              {[
                { title: 'Keep it short and memorable', desc: 'Shorter names are easier to remember, type in chat, and recognize on leaderboards. Aim for 8-12 characters.' },
                { title: 'Make it unique', desc: 'Avoid adding random numbers at the end (like "Player12345"). They look like auto-generated accounts.' },
                { title: 'Think long-term', desc: 'Your username will stick with you for years. Avoid references to specific games, ages, or trends that may date you.' },
                { title: 'Check availability', desc: 'After generating, check if the name is available on your platform. Popular names go fast.' },
                { title: 'Stay consistent', desc: 'Using the same username (or a variation) across platforms makes you easier to find by friends.' },
                { title: 'Avoid special characters', desc: 'Many platforms restrict special chars. Stick to letters, numbers, and underscores for max compatibility.' },
              ].map((tip) => (
                <div key={tip.title} className="flex gap-3">
                  <span className="text-accent-purple flex-shrink-0 mt-0.5">→</span>
                  <div>
                    <strong className="text-slate-300">{tip.title}:</strong> {tip.desc}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
