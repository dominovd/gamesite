import Link from 'next/link'

const TOOLS = [
  { href: '/username-generator', label: 'Username Generator' },
  { href: '/username-generator/roblox', label: 'Roblox Username Generator' },
  { href: '/username-generator/xbox', label: 'Xbox Gamertag Generator' },
  { href: '/username-generator/ps5', label: 'PS5 Username Generator' },
  { href: '/sensitivity-calculator', label: 'FPS Sensitivity Calculator' },
  { href: '/can-i-run', label: 'Can I Run This Game' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-purple to-accent-cyan flex items-center justify-center text-white font-bold text-sm">
                H
              </div>
              <span className="font-bold text-slate-100 text-lg">
                hplaptop<span className="text-accent-purple">.co</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Free gaming tools built for gamers. Generate usernames, calculate sensitivity, check PC compatibility and more.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-slate-300 font-semibold text-sm mb-4 uppercase tracking-wider">Tools</h3>
            <ul className="space-y-2.5">
              {TOOLS.map((tool) => (
                <li key={tool.href}>
                  <Link
                    href={tool.href}
                    className="text-slate-500 hover:text-accent-purple-light text-sm transition-colors duration-200"
                  >
                    {tool.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-slate-300 font-semibold text-sm mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5 mb-4">
              <li>
                <Link href="/about" className="text-slate-500 hover:text-accent-purple-light text-sm transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-500 hover:text-accent-purple-light text-sm transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <a href="mailto:info@hplaptop.co" className="text-slate-500 hover:text-accent-cyan-light text-sm transition-colors duration-200">
                  info@hplaptop.co
                </a>
              </li>
            </ul>
            <div className="flex gap-3">
              <span className="tag-purple">Free</span>
              <span className="tag-cyan">No Ads</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} hplaptop.co — Gaming Tools
          </p>
          <p className="text-slate-600 text-sm">
            Made for gamers, by gamers
          </p>
        </div>
      </div>
    </footer>
  )
}
