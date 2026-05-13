import type { Metadata } from 'next'
import Link from 'next/link'
import { buildBreadcrumb, serializeSchemas } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'About — hplaptop.co Gaming Tools',
  description: 'Learn about hplaptop.co — free gaming tools built for gamers. No ads, no sign-up, no tracking.',
  alternates: { canonical: 'https://hplaptop.co/about' },
}

const jsonLd = serializeSchemas(
  buildBreadcrumb([{ name: 'About', path: '/about' }])
)

const TOOLS = [
  {
    href: '/username-generator',
    name: 'Gaming Username Generator',
    desc: 'Unique gamertags for Xbox, PS5, Roblox, Discord, and Steam.',
    color: 'text-accent-purple',
  },
  {
    href: '/sensitivity-calculator',
    name: 'FPS Sensitivity Calculator',
    desc: 'Convert mouse sensitivity between CS2, Valorant, Apex, OW2, and R6.',
    color: 'text-accent-cyan',
  },
  {
    href: '/can-i-run',
    name: 'Can I Run This Game',
    desc: 'Check if your PC meets minimum or recommended requirements for 15+ games.',
    color: 'text-emerald-400',
  },
]

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 tag-purple mb-4">
            <span>🎮</span>
            <span>About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Built for Gamers
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            hplaptop.co is a collection of free gaming tools — no account required, no ads, no nonsense.
          </p>
        </div>

        {/* Mission */}
        <div className="card mb-8">
          <h2 className="text-xl font-bold text-slate-100 mb-3">What we do</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            We build lightweight, fast tools that solve real problems for everyday gamers. Every calculator and generator on this site is completely free to use and works instantly in your browser — nothing to install, nothing to sign up for.
          </p>
          <p className="text-slate-400 leading-relaxed">
            We believe the best gaming utilities shouldn't be locked behind paywalls or buried under ads. Everything here is free, permanent, and built to work well.
          </p>
        </div>

        {/* Tools */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-slate-100 mb-4">Our Tools</h2>
          <div className="space-y-3">
            {TOOLS.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="card-sm flex items-start gap-4 hover:border-border-light transition-all group"
              >
                <span className={`flex-shrink-0 mt-0.5 text-xl ${tool.color}`}>→</span>
                <div>
                  <div className={`font-semibold text-slate-200 group-hover:${tool.color} transition-colors`}>
                    {tool.name}
                  </div>
                  <div className="text-slate-500 text-sm mt-0.5">{tool.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="card mb-8">
          <h2 className="text-xl font-bold text-slate-100 mb-4">Our principles</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: '🆓', title: 'Always free', desc: 'Every tool on this site is free and will stay free.' },
              { icon: '⚡', title: 'No sign-up', desc: 'Open the page, use the tool. No account, no email required.' },
              { icon: '🚫', title: 'No tracking', desc: 'We only collect basic anonymous usage analytics.' },
              { icon: '📱', title: 'Works everywhere', desc: 'All tools are mobile-friendly and work in any browser.' },
            ].map((v) => (
              <div key={v.title} className="flex gap-3">
                <span className="text-xl flex-shrink-0">{v.icon}</span>
                <div>
                  <div className="font-medium text-slate-200 text-sm">{v.title}</div>
                  <div className="text-slate-500 text-sm mt-0.5">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-500 text-sm mb-4">Have a question or suggestion?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-purple/15 text-accent-purple-light border border-accent-purple/30 hover:bg-accent-purple/25 transition-all text-sm font-medium"
          >
            Contact us →
          </Link>
        </div>

      </div>
    </>
  )
}
