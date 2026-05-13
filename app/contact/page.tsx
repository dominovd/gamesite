import type { Metadata } from 'next'
import { buildBreadcrumb, serializeSchemas } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Contact — hplaptop.co',
  description: 'Get in touch with the hplaptop.co team. Suggestions, feedback, or partnerships — we read every message.',
  alternates: { canonical: 'https://hplaptop.co/contact' },
}

const jsonLd = serializeSchemas(
  buildBreadcrumb([{ name: 'Contact', path: '/contact' }])
)

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 tag-cyan mb-4">
            <span>✉️</span>
            <span>Contact</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-400">
            Have a question, idea, or found a bug? We'd love to hear from you.
          </p>
        </div>

        {/* Email card */}
        <div className="card mb-6 text-center">
          <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center mx-auto mb-4">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-accent-cyan">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-slate-100 mb-1">Email us</h2>
          <p className="text-slate-500 text-sm mb-4">
            We read every message and typically reply within a day or two.
          </p>
          <a
            href="mailto:info@hplaptop.co"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-cyan/10 text-accent-cyan-light border border-accent-cyan/25 hover:bg-accent-cyan/20 transition-all text-sm font-medium"
          >
            info@hplaptop.co
          </a>
        </div>

        {/* Topics */}
        <div className="card">
          <h2 className="text-base font-semibold text-slate-200 mb-4">What we can help with</h2>
          <div className="space-y-3">
            {[
              { icon: '🐛', title: 'Bug report', desc: 'Something not working correctly? Let us know.' },
              { icon: '💡', title: 'Feature request', desc: 'Got an idea for a new tool or improvement?' },
              { icon: '🤝', title: 'Partnership', desc: 'Want to collaborate or explore sponsorship?' },
              { icon: '❓', title: 'General question', desc: 'Anything else — just say hi.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 py-2">
                <span className="text-lg flex-shrink-0">{item.icon}</span>
                <div>
                  <span className="text-slate-300 text-sm font-medium">{item.title}</span>
                  <span className="text-slate-500 text-sm"> — {item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}
