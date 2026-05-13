import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Gaming Tools | Username Generator, Sensitivity Calculator | hplaptop.co',
  description: 'Free gaming tools: generate gamertags and usernames for Xbox, PS5, Roblox, Discord. Calculate FPS sensitivity. Check if your PC can run any game.',
  alternates: { canonical: 'https://hplaptop.co' },
}

const TOOLS = [
  {
    href: '/username-generator',
    iconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />,
    iconBg: 'bg-accent-purple/15 text-accent-purple-light',
    title: 'Gaming Username Generator',
    description: 'Generate unique gamertags and usernames for Xbox, PS5, Roblox, Discord, and Steam in seconds.',
    badge: 'Most Popular',
    badgeColor: 'text-accent-purple-light bg-accent-purple/10 border-accent-purple/30',
    accent: 'purple',
    platforms: ['Xbox', 'PS5', 'Roblox', 'Discord', 'Steam'],
    cta: 'Generate Username',
  },
  {
    href: '/sensitivity-calculator',
    iconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />,
    iconBg: 'bg-accent-cyan/15 text-accent-cyan-light',
    title: 'FPS Sensitivity Calculator',
    description: 'Convert your mouse sensitivity between CS2, Valorant, Apex Legends, Overwatch 2 and R6 Siege instantly.',
    badge: 'Pro Tool',
    badgeColor: 'text-accent-cyan-light bg-accent-cyan/10 border-accent-cyan/30',
    accent: 'cyan',
    platforms: ['CS2', 'Valorant', 'Apex', 'OW2', 'R6'],
    cta: 'Calculate Sensitivity',
  },
  {
    href: '/can-i-run',
    iconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    iconBg: 'bg-emerald-500/15 text-emerald-400',
    title: 'Can I Run This Game',
    description: 'Check if your PC meets the minimum or recommended requirements for any game instantly.',
    badge: 'PC Gamer',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    accent: 'emerald',
    platforms: ['Steam', 'Epic', 'PC', 'All platforms'],
    cta: 'Check My PC',
  },
]

const STATS = [
  { value: '50+', label: 'Games Supported' },
  { value: '500+', label: 'Username Styles' },
  { value: '6', label: 'FPS Games' },
  { value: '100%', label: 'Free' },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 text-center">
          <div className="inline-flex items-center gap-2 tag-purple mb-6">
            <span>⚡</span>
            <span>Free Gaming Tools — No Sign-Up Required</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 mb-6 leading-tight">
            Gaming Tools for{' '}
            <span className="gradient-text">Every Gamer</span>
          </h1>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Generate the perfect username, convert your sensitivity between games, or check if your PC is ready to run the latest titles. All free, all instant.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/username-generator" className="btn-primary text-center inline-flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
              Generate Username
            </Link>
            <Link href="/sensitivity-calculator" className="btn-secondary text-center inline-flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" /></svg>
              Sensitivity Calc
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-bg-card/50 border border-border rounded-xl p-4">
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">All Gaming Tools</h2>
          <p className="text-slate-400 text-lg">Everything you need, in one place</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="card group hover:border-border-light hover:glow-purple transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${tool.iconBg}`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {tool.iconPath}
                  </svg>
                </div>
                <span className={`tag border ${tool.badgeColor} text-xs`}>
                  {tool.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-accent-purple-light transition-colors">
                {tool.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                {tool.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {tool.platforms.map((platform) => (
                  <span key={platform} className="text-xs px-2.5 py-1 rounded-lg bg-bg-tertiary border border-border text-slate-400">
                    {platform}
                  </span>
                ))}
              </div>

              <div className={`flex items-center gap-2 text-sm font-semibold ${
                tool.accent === 'purple' ? 'text-accent-purple-light' :
                tool.accent === 'cyan' ? 'text-accent-cyan-light' :
                'text-emerald-400'
              } group-hover:gap-3 transition-all`}>
                {tool.cta}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-t border-border">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">
              Why Use hplaptop.co Gaming Tools?
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Instant Results',
                  desc: 'No loading screens. All tools work client-side for instant results.',
                  color: 'text-accent-cyan bg-accent-cyan/10',
                  svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
                },
                {
                  title: 'Completely Free',
                  desc: 'Every tool is 100% free with no hidden fees or sign-up required.',
                  color: 'text-emerald-400 bg-emerald-500/10',
                  svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
                },
                {
                  title: 'Built for Gamers',
                  desc: 'Designed with real gamer needs in mind — accurate, fast, and useful.',
                  color: 'text-accent-purple-light bg-accent-purple/10',
                  svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />,
                },
                {
                  title: 'Works Everywhere',
                  desc: 'Fully responsive — use on desktop, tablet, or mobile.',
                  color: 'text-yellow-400 bg-yellow-500/10',
                  svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${item.color}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {item.svg}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-200 mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">
              Popular Gaming Tools
            </h2>
            <div className="space-y-3">
              {[
                { href: '/username-generator/roblox', label: 'Roblox Username Generator', vol: '4,400/mo' },
                { href: '/username-generator/xbox', label: 'Xbox Gamertag Generator', vol: '14,800/mo' },
                { href: '/username-generator/ps5', label: 'PS5 Username Generator', vol: '3,600/mo' },
                { href: '/username-generator/discord', label: 'Discord Username Generator', vol: '2,100/mo' },
                { href: '/sensitivity-calculator', label: 'Valorant to CS2 Sensitivity', vol: '5,400/mo' },
                { href: '/can-i-run', label: 'Can My PC Run This Game', vol: '8,100/mo' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between p-3 rounded-xl bg-bg-card border border-border hover:border-border-light hover:text-accent-purple-light transition-all group"
                >
                  <span className="text-slate-300 text-sm group-hover:text-accent-purple-light transition-colors">
                    {item.label}
                  </span>
                  <span className="text-xs text-slate-600">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
