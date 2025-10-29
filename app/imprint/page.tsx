import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Imprint() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            Back to Speed Calculator
          </Link>
          <div className="max-w-3xl">
            <h1 className="mb-5 text-5xl font-light tracking-tight text-stone-900 sm:text-6xl">
              Impressum
            </h1>
            <p className="text-lg font-light leading-relaxed text-stone-600">
              Legal notice according to § 5 TMG
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-12 text-sm font-light leading-relaxed text-stone-600">
          {/* Company Information */}
          <section>
            <h2 className="mb-4 text-2xl font-light text-stone-900">Company Information</h2>
            <div className="rounded-sm border border-stone-200 bg-stone-50 p-6">
              <p className="mb-2 text-base font-medium text-stone-900">comnect UG (haftungsbeschränkt)</p>
              <p>Immanuelkirch Str. 14a</p>
              <p>10405 Berlin</p>
              <p className="mt-3">Deutschland</p>
            </div>
          </section>

          {/* Legal Information */}
          <section>
            <h2 className="mb-4 text-2xl font-light text-stone-900">Legal Information</h2>
            <div className="space-y-2">
              <p>
                <span className="font-medium text-stone-900">Registered at:</span> Amtsgericht Berlin Charlottenburg
              </p>
              <p>
                <span className="font-medium text-stone-900">Registration number:</span> HRB 231194 B
              </p>
              <p>
                <span className="font-medium text-stone-900">VAT ID:</span> DE358558502
              </p>
            </div>
          </section>

          {/* Management */}
          <section>
            <h2 className="mb-4 text-2xl font-light text-stone-900">Management</h2>
            <p>
              <span className="font-medium text-stone-900">Managing Director:</span> Max Baumgarten
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="mb-4 text-2xl font-light text-stone-900">Contact</h2>
            <p>
              <span className="font-medium text-stone-900">Email:</span>{' '}
              <a href="mailto:hello@speedcalculator.com" className="text-stone-900 underline">
                hello@speedcalculator.com
              </a>
            </p>
          </section>

          {/* Disclaimer */}
          <section>
            <h2 className="mb-4 text-2xl font-light text-stone-900">Disclaimer</h2>

            <h3 className="mb-3 mt-6 text-lg font-medium text-stone-900">Liability for Content</h3>
            <p>
              As a service provider, we are responsible for our own content on these pages in accordance with § 7
              Para. 1 TMG (German Telemedia Act) and general laws. According to §§ 8 to 10 TMG, however, we are not
              obligated as a service provider to monitor transmitted or stored third-party information or to
              investigate circumstances that indicate illegal activity.
            </p>
            <p className="mt-4">
              Obligations to remove or block the use of information under general law remain unaffected. However,
              liability in this regard is only possible from the time of knowledge of a specific legal violation. Upon
              becoming aware of such violations, we will remove this content immediately.
            </p>

            <h3 className="mb-3 mt-6 text-lg font-medium text-stone-900">Liability for Links</h3>
            <p>
              Our website contains links to external third-party websites over whose content we have no influence.
              Therefore, we cannot accept any liability for this external content. The respective provider or operator
              of the pages is always responsible for the content of the linked pages. The linked pages were checked for
              possible legal violations at the time of linking. Illegal content was not recognizable at the time of
              linking.
            </p>
            <p className="mt-4">
              However, permanent monitoring of the content of the linked pages is not reasonable without concrete
              evidence of a legal violation. Upon becoming aware of legal violations, we will remove such links
              immediately.
            </p>

            <h3 className="mb-3 mt-6 text-lg font-medium text-stone-900">Copyright</h3>
            <p>
              The content and works created by the site operators on these pages are subject to German copyright law.
              Duplication, processing, distribution, and any kind of exploitation outside the limits of copyright
              require the written consent of the respective author or creator. Downloads and copies of this site are
              only permitted for private, non-commercial use.
            </p>
            <p className="mt-4">
              Insofar as the content on this site was not created by the operator, the copyrights of third parties are
              respected. In particular, third-party content is identified as such. Should you nevertheless become aware
              of a copyright infringement, please inform us accordingly. Upon becoming aware of legal violations, we
              will remove such content immediately.
            </p>
          </section>

          {/* Calculation Accuracy */}
          <section>
            <h2 className="mb-4 text-2xl font-light text-stone-900">Calculation Accuracy</h2>
            <p>
              All calculators and conversion tools on SpeedCalculator.com are provided for informational and
              educational purposes. While we strive for accuracy, we make no warranties, express or implied, regarding
              the completeness, accuracy, reliability, or suitability of the calculations provided.
            </p>
            <p className="mt-4">
              Users are advised to verify critical calculations independently. The operator assumes no liability for
              decisions made based on calculations performed using this website.
            </p>
          </section>

          {/* EU Dispute Resolution */}
          <section>
            <h2 className="mb-4 text-2xl font-light text-stone-900">EU Dispute Resolution</h2>
            <p>
              The European Commission provides a platform for online dispute resolution (OS):{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-900 underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p className="mt-4">
              We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer
              arbitration board.
            </p>
          </section>

          {/* Responsible for content */}
          <section>
            <h2 className="mb-4 text-2xl font-light text-stone-900">
              Responsible for content according to § 55 Abs. 2 RStV
            </h2>
            <div className="rounded-sm border border-stone-200 bg-stone-50 p-6">
              <p className="font-medium text-stone-900">Max Baumgarten</p>
              <p className="mt-2">Immanuelkirch Str. 14a</p>
              <p>10405 Berlin</p>
              <p className="mt-3">Deutschland</p>
            </div>
          </section>

          {/* Footer note */}
          <div className="mt-16 rounded-sm border-l-2 border-stone-900 bg-stone-50 px-6 py-5">
            <p className="text-xs font-light text-stone-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
