import type { Metadata } from 'next'
import { buildBreadcrumb, serializeSchemas } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Privacy Policy — hplaptop.co',
  description: 'Privacy Policy for hplaptop.co gaming tools. Learn how we handle your data.',
  alternates: { canonical: 'https://hplaptop.co/privacy-policy' },
}

const jsonLd = serializeSchemas(
  buildBreadcrumb([{ name: 'Privacy Policy', path: '/privacy-policy' }])
)

export default function PrivacyPolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-100 mb-3">Privacy Policy</h1>
          <p className="text-slate-500 text-sm">Last updated: May 2025</p>
        </div>

        <div className="space-y-8 text-slate-400 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">1. Overview</h2>
            <p>
              hplaptop.co ("we", "our", "us") operates the website at hplaptop.co. This Privacy Policy explains what information we collect, how we use it, and your rights regarding that information. We take your privacy seriously and collect only the minimum data necessary to operate the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">2. Information We Collect</h2>
            <p className="mb-3">
              <strong className="text-slate-300">We do not collect personal information.</strong> You do not need to create an account or provide any personal details to use any tool on this site.
            </p>
            <p className="mb-3">
              <strong className="text-slate-300">Usage analytics.</strong> We use Vercel Analytics to collect anonymous, aggregated usage data. This includes page views, general geographic region (country level), and browser/device type. This data cannot be used to identify individual users and is not shared with third parties.
            </p>
            <p>
              <strong className="text-slate-300">No cookies.</strong> We do not set tracking cookies or use any third-party advertising or tracking scripts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">3. How We Use Information</h2>
            <p>
              Anonymous analytics data is used solely to understand which tools are used most, improve site performance, and decide which features to build next. We do not sell, rent, or share any data with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">4. Third-Party Services</h2>
            <p className="mb-3">
              <strong className="text-slate-300">Vercel.</strong> Our site is hosted on Vercel. Vercel may process certain technical data (such as IP addresses in server logs) as part of providing hosting services. See <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent-cyan-light hover:underline">Vercel's Privacy Policy</a> for details.
            </p>
            <p>
              <strong className="text-slate-300">Google Fonts.</strong> We load fonts from Google Fonts. Google may collect limited data as part of this service. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent-cyan-light hover:underline">Google's Privacy Policy</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">5. Children's Privacy</h2>
            <p>
              Our site is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">6. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of the site after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">7. Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:info@hplaptop.co" className="text-accent-cyan-light hover:underline">info@hplaptop.co</a>.
            </p>
          </section>

        </div>
      </div>
    </>
  )
}
