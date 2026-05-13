import type { Metadata } from 'next'
import CrosshairGenerator from '@/components/crosshair-generator/CrosshairGenerator'
import { buildWebApplication, buildBreadcrumb, buildFAQ, serializeSchemas } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Crosshair Generator — CS2 & Valorant Crosshair Maker',
  description: 'Create and customize your gaming crosshair for CS2 and Valorant. Adjust color, size, gap, thickness, dot and outline. Copy CS2 console commands instantly.',
  keywords: ['crosshair generator', 'cs2 crosshair', 'valorant crosshair', 'crosshair maker', 'custom crosshair', 'crosshair creator'],
  alternates: { canonical: 'https://hplaptop.co/crosshair-generator' },
}

const jsonLd = serializeSchemas(
  buildWebApplication({
    name: 'Crosshair Generator',
    url: 'https://hplaptop.co/crosshair-generator',
    description: 'Create and customize your gaming crosshair for CS2 and Valorant. Adjust color, size, gap, thickness, dot and outline. Free crosshair maker.',
  }),
  buildBreadcrumb([{ name: 'Crosshair Generator', path: '/crosshair-generator' }]),
  buildFAQ([
    { q: 'What is a crosshair generator?', a: 'A crosshair generator lets you design and preview a custom crosshair for FPS games. You can adjust size, thickness, gap, color, dot, and outline, then export the settings to use in-game.' },
    { q: 'How do I use the CS2 crosshair config?', a: 'Click "Copy CS2 Config" to copy the console commands. Then open CS2, go to Settings → Game → Crosshair and disable any conflicting settings, or open the developer console (~) and paste the commands.' },
    { q: 'What crosshair style should I use?', a: 'Most pro CS2 players use a small classic crosshair with low size (3–6), low gap (0–2), and no dot. In Valorant, many pros use a small static crosshair. Ultimately, use what feels comfortable and doesn\'t obstruct your view.' },
    { q: 'What is crosshair gap?', a: 'Gap is the space between the center of the screen and where each crosshair line begins. A gap of 0 means the lines meet in the center. Higher gap values create an open center, which is preferred by many pros.' },
  ])
)

export default function CrosshairGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 tag-cyan mb-4">
            <span>🎯</span>
            <span>Free Crosshair Generator</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Crosshair Generator
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Design your perfect crosshair for CS2 and Valorant. Adjust every setting, preview in real time, and copy the config directly to your game.
          </p>
        </div>

        {/* Tool */}
        <div className="card mb-12">
          <CrosshairGenerator />
        </div>

        {/* SEO Content */}
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">What Each Setting Does</h2>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                { name: 'Size', desc: 'The length of each crosshair line from the gap outward. Smaller is more precise.' },
                { name: 'Thickness', desc: 'The width of each crosshair line. Thinner lines are less obstructive.' },
                { name: 'Gap', desc: 'Space between the center and where the lines begin. 0 = lines meet in center.' },
                { name: 'Outline', desc: 'A dark border around each line for visibility on any background.' },
                { name: 'Center Dot', desc: 'A dot in the exact center of the crosshair for precise point-of-aim reference.' },
                { name: 'Opacity', desc: 'How transparent the crosshair is. Lower opacity can be easier on the eyes.' },
              ].map(item => (
                <div key={item.name} className="bg-bg-card border border-border rounded-xl px-4 py-3">
                  <span className="text-slate-200 font-semibold">{item.name}: </span>
                  <span className="text-slate-400">{item.desc}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">Pro Player Crosshair Tips</h2>
            <div className="bg-bg-card border border-border rounded-xl p-6 space-y-3 text-slate-400 text-sm leading-relaxed">
              <p><strong className="text-slate-200">Keep it small.</strong> Most pro CS2 players use size 2–6 with thickness 1. Large crosshairs block the area you're aiming at, reducing accuracy.</p>
              <p><strong className="text-slate-200">Use outline.</strong> A 1px outline ensures your crosshair is visible on white walls, bright maps, and any environment.</p>
              <p><strong className="text-slate-200">Disable dynamic crosshair.</strong> In CS2, make sure to disable the dynamic crosshair (cl_crosshairdynamic 0) — the static crosshair is more reliable for consistent aim.</p>
              <p><strong className="text-slate-200">Color matters less than you think.</strong> Any high-contrast color works. Green and cyan are most popular. Avoid colors that blend with in-game environments.</p>
            </div>
          </section>
        </div>

      </div>
    </>
  )
}
