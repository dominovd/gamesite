import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SensCalculator from '@/components/sensitivity-calculator/SensCalculator'
import { buildWebApplication, buildBreadcrumb, buildFAQ, serializeSchemas } from '@/lib/schema'
import { CONVERSIONS, getConversionBySlug } from '@/data/conversions'

interface Props {
  params: { conversion: string }
}

export function generateStaticParams() {
  return CONVERSIONS.map(c => ({ conversion: c.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const conv = getConversionBySlug(params.conversion)
  if (!conv) return {}
  return {
    title: `${conv.title} — Free Sens Calculator`,
    description: conv.description,
    keywords: [
      `${conv.fromName.toLowerCase()} to ${conv.toName.toLowerCase()} sensitivity`,
      `${conv.fromName.toLowerCase()} sensitivity converter`,
      `convert ${conv.fromName.toLowerCase()} sens to ${conv.toName.toLowerCase()}`,
      `${conv.fromName.toLowerCase()} ${conv.toName.toLowerCase()} mouse sensitivity`,
    ],
    alternates: { canonical: `https://hplaptop.co/sensitivity-calculator/${conv.slug}` },
  }
}

// Companion: all other conversions from the same source game
function RelatedConversions({ currentSlug, fromKey }: { currentSlug: string; fromKey: string }) {
  const related = CONVERSIONS.filter(c => c.from === fromKey && c.slug !== currentSlug)
  if (!related.length) return null
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-100 mb-4">More {CONVERSIONS.find(c => c.from === fromKey)?.fromName} Converters</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {related.map(c => (
          <a
            key={c.slug}
            href={`/sensitivity-calculator/${c.slug}`}
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-bg-card border border-border text-slate-400 hover:border-border-light hover:text-slate-200 transition-all text-sm"
          >
            <span className="text-accent-cyan">🖱️</span>
            {c.fromName} → {c.toName}
          </a>
        ))}
      </div>
    </section>
  )
}

export default function ConversionPage({ params }: Props) {
  const conv = getConversionBySlug(params.conversion)
  if (!conv) notFound()

  const jsonLd = serializeSchemas(
    buildWebApplication({
      name: conv.title,
      url: `https://hplaptop.co/sensitivity-calculator/${conv.slug}`,
      description: conv.description,
    }),
    buildBreadcrumb([
      { name: 'Sensitivity Calculator', path: '/sensitivity-calculator' },
      { name: `${conv.fromName} to ${conv.toName}`, path: `/sensitivity-calculator/${conv.slug}` },
    ]),
    buildFAQ(conv.faqs)
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 tag-cyan mb-4">
            <span>🖱️</span>
            <span>Free Sensitivity Converter</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            {conv.h1}
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {conv.intro}
          </p>
        </div>

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8" aria-label="Breadcrumb">
          <a href="/sensitivity-calculator" className="hover:text-accent-cyan-light transition-colors">
            Sensitivity Calculator
          </a>
          <span>›</span>
          <span className="text-slate-300">{conv.fromName} to {conv.toName}</span>
        </nav>

        {/* Tool — pre-selected games */}
        <div className="card mb-12">
          <SensCalculator defaultFrom={conv.from} defaultTo={conv.to} />
        </div>

        {/* SEO Content */}
        <div className="space-y-10">

          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">
              How to Convert {conv.fromName} Sensitivity to {conv.toName}
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { step: '1', title: 'Enter your sensitivity', desc: `Type your current ${conv.fromName} in-game sensitivity into the Source field.` },
                { step: '2', title: 'Set your DPI', desc: 'Enter your mouse DPI. Check your mouse software if unsure. Common values: 400, 800, 1600.' },
                { step: '3', title: 'Read the result', desc: `Your exact ${conv.toName} sensitivity equivalent is calculated instantly below.` },
              ].map(s => (
                <div key={s.step} className="card-sm">
                  <div className="text-accent-cyan font-bold text-xl mb-2">Step {s.step}</div>
                  <h3 className="font-semibold text-slate-200 mb-1">{s.title}</h3>
                  <p className="text-slate-400 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">
              {conv.fromName} vs {conv.toName} — Why Sensitivity Differs
            </h2>
            <div className="bg-bg-card border border-border rounded-xl p-6 text-slate-400 text-sm leading-relaxed space-y-3">
              <p>
                Both {conv.fromName} and {conv.toName} use different internal <strong className="text-slate-200">yaw values</strong> — the multiplier that converts your mouse movement into camera rotation degrees. Because of this, the same sensitivity number results in different physical mouse travel distances per 360° turn.
              </p>
              <p>
                This converter calculates your <strong className="text-slate-200">cm/360°</strong> (the physical distance your mouse moves for one full rotation) from your {conv.fromName} settings, then finds the sensitivity in {conv.toName} that produces the exact same physical feel.
              </p>
              <p>
                After converting, your muscle memory transfers directly — the same wrist flick, the same arm sweep, the same aim.
              </p>
            </div>
          </section>

          <RelatedConversions currentSlug={conv.slug} fromKey={conv.from} />

          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {conv.faqs.map(faq => (
                <div key={faq.q} className="bg-bg-card border border-border rounded-xl p-5">
                  <h3 className="font-semibold text-slate-200 mb-2">{faq.q}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  )
}
