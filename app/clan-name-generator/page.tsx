import type { Metadata } from 'next'
import ClanNameGenerator from '@/components/clan-name-generator/ClanNameGenerator'
import { buildWebApplication, buildBreadcrumb, buildFAQ, serializeSchemas } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Clan Name Generator — Gaming Clan Names & Tags',
  description: 'Generate unique gaming clan names and clan tags for any game. Military, mythic, cyber, shadow and fire themes. Free, instant, no sign-up.',
  keywords: ['clan name generator', 'gaming clan names', 'clan tag generator', 'clan name ideas', 'gaming team name generator'],
  alternates: { canonical: 'https://hplaptop.co/clan-name-generator' },
}

const jsonLd = serializeSchemas(
  buildWebApplication({
    name: 'Clan Name Generator',
    url: 'https://hplaptop.co/clan-name-generator',
    description: 'Generate unique gaming clan names and clan tags. Military, mythic, cyber, shadow and fire themes. Free and instant.',
  }),
  buildBreadcrumb([{ name: 'Clan Name Generator', path: '/clan-name-generator' }]),
  buildFAQ([
    { q: 'What is a clan name generator?', a: 'A clan name generator creates unique names and short clan tags for gaming teams and clans. It combines themed words to suggest names that fit your squad\'s identity.' },
    { q: 'What themes are available?', a: 'There are 5 themes: Military (tactical squad names), Mythic (fantasy and legendary names), Cyber (tech and hacker vibes), Shadow (stealth and dark names), and Fire (aggressive flame-themed names). You can also mix all themes.' },
    { q: 'What is a clan tag?', a: 'A clan tag is a short 2–4 character abbreviation shown next to your name in-game, usually in brackets like [APEX] or [SHD]. It identifies your clan to other players.' },
    { q: 'Can I use these names in any game?', a: 'Yes. These names work for any game with clan or guild systems — Call of Duty, CS2, Fortnite, Rainbow Six Siege, Valorant, World of Warcraft, and more.' },
  ])
)

const POPULAR_NAMES = [
  'Iron Legion', 'Shadow Wolves', 'Neon Phantoms', 'Blazing Dragons',
  'Silent Reapers', 'Cyber Titans', 'Dark Ravens', 'Eternal Knights',
]

export default function ClanNameGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 tag-purple mb-4">
            <span>⚔️</span>
            <span>Free Clan Name Generator</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Clan Name Generator
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Generate unique clan names and tags for any game. Choose a theme and get 12 name ideas with ready-to-use clan tags — instantly.
          </p>
        </div>

        {/* Tool */}
        <div className="card mb-12">
          <ClanNameGenerator />
        </div>

        {/* SEO Content */}
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">How to Pick a Great Clan Name</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { step: '1', title: 'Choose a theme', desc: 'Pick Military, Mythic, Cyber, Shadow, or Fire — or mix all themes for maximum variety.', color: 'text-accent-purple' },
                { step: '2', title: 'Generate names', desc: 'Click Generate for 12 unique clan name suggestions, each with an auto-generated clan tag.', color: 'text-accent-purple' },
                { step: '3', title: 'Copy and use', desc: 'Copy the full clan name or just the short tag. Use them in any game that supports clans.', color: 'text-accent-purple' },
              ].map((s) => (
                <div key={s.step} className="card-sm">
                  <div className={`${s.color} font-bold text-xl mb-2`}>Step {s.step}</div>
                  <h3 className="font-semibold text-slate-200 mb-1">{s.title}</h3>
                  <p className="text-slate-400 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">Popular Clan Name Examples</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {POPULAR_NAMES.map((name) => (
                <div
                  key={name}
                  className="px-4 py-3 rounded-xl bg-bg-card border border-border text-slate-300 text-sm text-center font-medium"
                >
                  {name}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">Tips for Naming Your Clan</h2>
            <div className="bg-bg-card border border-border rounded-xl p-6 space-y-3 text-slate-400 text-sm leading-relaxed">
              <p><strong className="text-slate-200">Keep it short and punchy.</strong> The best clan names are 2–3 words max. They need to look good as a clan tag and be easy to say in voice chat.</p>
              <p><strong className="text-slate-200">Match your playstyle.</strong> A stealth-oriented squad might choose Shadow Wolves, while an aggressive rush team could go with Blazing Titans.</p>
              <p><strong className="text-slate-200">Check uniqueness.</strong> Search your clan name on the game's platform before committing. Unique names are easier to find and look more professional.</p>
              <p><strong className="text-slate-200">Test the tag.</strong> Your clan tag will appear in brackets next to every member's name. Make sure it looks clean: [SHD] works better than [SHDW].</p>
            </div>
          </section>
        </div>

      </div>
    </>
  )
}
