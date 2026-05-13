import type { Metadata } from 'next'
import { buildBreadcrumb, serializeSchemas } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Terms of Service — hplaptop.co',
  description: 'Terms of Service for hplaptop.co gaming tools.',
  alternates: { canonical: 'https://hplaptop.co/terms' },
}

const jsonLd = serializeSchemas(
  buildBreadcrumb([{ name: 'Terms of Service', path: '/terms' }])
)

export default function TermsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-100 mb-3">Terms of Service</h1>
          <p className="text-slate-500 text-sm">Last updated: May 2025</p>
        </div>

        <div className="space-y-8 text-slate-400 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using hplaptop.co ("the Site"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">2. Use of the Site</h2>
            <p className="mb-3">
              hplaptop.co provides free gaming tools including username generators, sensitivity calculators, and PC compatibility checkers. All tools are provided for personal, non-commercial use.
            </p>
            <p>
              You agree not to misuse the Site, attempt to overload our servers, scrape content in bulk, or use automated tools to abuse the services provided.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">3. Intellectual Property</h2>
            <p>
              All content on this Site — including text, graphics, tool designs, and code — is owned by hplaptop.co or its licensors. You may not reproduce, distribute, or create derivative works without our written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">4. Disclaimer of Warranties</h2>
            <p>
              The Site and its tools are provided "as is" without warranty of any kind. We do not guarantee that the tools are error-free, up-to-date, or suitable for any particular purpose. Game system requirements, GPU scores, and sensitivity values are approximate and may not reflect the latest official specifications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">5. Limitation of Liability</h2>
            <p>
              hplaptop.co shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Site or reliance on any information provided. Use all tools at your own discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">6. Third-Party Links</h2>
            <p>
              The Site may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites. Links are provided for convenience only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">7. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. Continued use of the Site after changes are posted constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">8. Contact</h2>
            <p>
              Questions about these Terms? Contact us at{' '}
              <a href="mailto:info@hplaptop.co" className="text-accent-cyan-light hover:underline">info@hplaptop.co</a>.
            </p>
          </section>

        </div>
      </div>
    </>
  )
}
