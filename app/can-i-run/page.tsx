import type { Metadata } from 'next'
import CanIRun from '@/components/can-i-run/CanIRun'
import { buildWebApplication, buildBreadcrumb, buildFAQ, serializeSchemas } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Can I Run This Game — PC Requirements Checker',
  description: 'Check if your PC can run any game. Enter your GPU and RAM to instantly see if you meet minimum or recommended requirements for 15+ popular games.',
  keywords: ['can i run this game', 'pc requirements checker', 'can my pc run', 'game system requirements', 'pc game compatibility check'],
  alternates: { canonical: 'https://hplaptop.co/can-i-run' },
}

const jsonLd = serializeSchemas(
  buildWebApplication({
    name: 'Can I Run This Game',
    url: 'https://hplaptop.co/can-i-run',
    description: 'Check if your PC meets minimum or recommended requirements for 15+ popular games. Select your GPU and RAM for instant results.',
  }),
  buildBreadcrumb([{ name: 'Can I Run This Game', path: '/can-i-run' }]),
  buildFAQ([
    { q: 'How does the PC requirements checker work?', a: 'Select a game and your GPU from the list. The tool compares your GPU performance score and RAM against the game\'s minimum and recommended requirements and shows you the result instantly.' },
    { q: 'What games are supported?', a: 'The checker supports 15+ popular games including Fortnite, CS2, Valorant, Cyberpunk 2077, Elden Ring, GTA V, Minecraft, Apex Legends, Baldur\'s Gate 3, and more.' },
    { q: 'How do I find my GPU model?', a: 'On Windows: right-click Desktop → Display Settings → Advanced Display. Or press Windows + R, type dxdiag, press Enter, then check the Display tab.' },
    { q: 'My GPU is not in the list — what do I do?', a: 'Find a GPU in the list with a similar performance tier. For example, if you have an RX 6600, compare it to the RX 6700 XT which has a slightly higher score.' },
  ])
)

export default function CanIRunPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4" style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', color: '#34d399', padding: '4px 12px', borderRadius: '999px', fontSize: '13px' }}>
            <span>💻</span>
            <span>Free PC Checker</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Can I Run This Game?
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Select a game and your GPU to instantly check if your PC meets the minimum
            or recommended system requirements. No downloads needed.
          </p>
        </div>

        {/* Tool */}
        <div className="card mb-12">
          <CanIRun />
        </div>

        {/* SEO Content */}
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">How to Check PC Game Requirements</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { step: '1', title: 'Select your game', desc: 'Choose from 15+ popular games including Fortnite, CS2, Elden Ring, Cyberpunk 2077 and more.' },
                { step: '2', title: 'Enter your specs', desc: 'Select your GPU from the list and choose your RAM amount. That\'s all we need.' },
                { step: '3', title: 'Get your result', desc: 'Instantly see if you meet minimum, recommended, or exceed requirements — with a detailed breakdown.' },
              ].map((s) => (
                <div key={s.step} className="card-sm">
                  <div className="text-emerald-400 font-bold text-xl mb-2">Step {s.step}</div>
                  <h3 className="font-semibold text-slate-200 mb-1">{s.title}</h3>
                  <p className="text-slate-400 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">How to Find Your GPU</h2>
            <div className="bg-bg-card border border-border rounded-xl p-6 space-y-3 text-slate-400 text-sm leading-relaxed">
              <p><strong className="text-slate-200">On Windows:</strong> Right-click Desktop → Display Settings → Advanced Display → scroll to GPU. Or open Task Manager → Performance tab → GPU.</p>
              <p><strong className="text-slate-200">Keyboard shortcut:</strong> Press <code className="bg-bg-tertiary px-2 py-0.5 rounded text-accent-cyan-light">Windows + R</code>, type <code className="bg-bg-tertiary px-2 py-0.5 rounded text-accent-cyan-light">dxdiag</code>, press Enter → Display tab.</p>
              <p><strong className="text-slate-200">GPU-Z:</strong> Download the free GPU-Z tool for the most detailed GPU information.</p>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
