import type { Metadata } from 'next'
import SensCalculator from '@/components/sensitivity-calculator/SensCalculator'

export const metadata: Metadata = {
  title: 'FPS Sensitivity Calculator — CS2, Valorant, Apex, OW2, R6',
  description: 'Convert your FPS mouse sensitivity between CS2, Valorant, Apex Legends, Overwatch 2 and Rainbow Six Siege. Free sensitivity calculator with eDPI and cm/360° conversion.',
  keywords: ['fps sensitivity calculator', 'sensitivity converter', 'valorant to cs2 sensitivity', 'apex sensitivity converter', 'edpi calculator', 'mouse sensitivity converter'],
  alternates: { canonical: 'https://hplaptop.co/sensitivity-calculator' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'FPS Sensitivity Calculator',
  url: 'https://hplaptop.co/sensitivity-calculator',
  applicationCategory: 'GameApplication',
  operatingSystem: 'Any',
  description: 'Convert mouse sensitivity between CS2, Valorant, Apex Legends, Overwatch 2 and R6 Siege',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function SensCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 tag-cyan mb-4">
            <span>🖱️</span>
            <span>Free Sensitivity Calculator</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            FPS Sensitivity Calculator
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Convert your mouse sensitivity between CS2, Valorant, Apex Legends, Overwatch 2, and Rainbow Six Siege.
            Keep the same physical feel across every game.
          </p>
        </div>

        {/* Tool */}
        <div className="card mb-12">
          <SensCalculator />
        </div>

        {/* SEO Content */}
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">How to Convert Sensitivity Between FPS Games</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { step: '1', title: 'Select source game', desc: 'Choose the game you\'re converting from and enter your current sensitivity.' },
                { step: '2', title: 'Enter your DPI', desc: 'Type your mouse DPI (check your mouse software). Common values: 400, 800, 1600.' },
                { step: '3', title: 'See the conversion', desc: 'Instantly get your equivalent sensitivity in every other supported game.' },
              ].map((s) => (
                <div key={s.step} className="card-sm">
                  <div className="text-accent-cyan font-bold text-xl mb-2">Step {s.step}</div>
                  <h3 className="font-semibold text-slate-200 mb-1">{s.title}</h3>
                  <p className="text-slate-400 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">Popular Sensitivity Conversions</h2>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                'Valorant to CS2 sensitivity',
                'CS2 to Apex Legends sensitivity',
                'Overwatch 2 to Valorant sensitivity',
                'R6 Siege to CS2 sensitivity',
                'Apex Legends to Valorant sensitivity',
                'CS2 to Overwatch 2 sensitivity',
              ].map((conv) => (
                <div key={conv} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-bg-card border border-border text-slate-400">
                  <span className="text-accent-cyan">🖱️</span>
                  {conv}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">What is eDPI?</h2>
            <div className="bg-bg-card border border-border rounded-xl p-6 space-y-3 text-slate-400 text-sm leading-relaxed">
              <p>
                <strong className="text-slate-200">eDPI (effective DPI)</strong> is the most useful way to compare sensitivity across players and setups.
                It's calculated as: <code className="bg-bg-tertiary px-2 py-0.5 rounded text-accent-cyan-light">eDPI = DPI × In-game Sensitivity</code>
              </p>
              <p>
                For example, a player using 400 DPI with 2.0 sensitivity has the same eDPI (800) as someone using 800 DPI with 1.0 sensitivity.
                Both players move their camera at exactly the same rate — the physical mouse movement required is identical.
              </p>
              <p>
                Most pro FPS players use an eDPI between <strong className="text-slate-200">200 and 800</strong>.
                High eDPI (above 1000) makes precise aiming difficult. Very low eDPI (below 200) requires large, slow sweeping movements.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
