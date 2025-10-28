import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
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
              Datenschutzerklärung
            </h1>
            <p className="text-lg font-light leading-relaxed text-stone-600">
              Privacy Policy for SpeedCalculator.com
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-12 text-sm font-light leading-relaxed text-stone-600">
          {/* Introduction */}
          <section>
            <h2 className="mb-4 text-2xl font-light text-stone-900">1. Datenschutz auf einen Blick</h2>

            <h3 className="mb-3 mt-6 text-lg font-medium text-stone-900">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
              Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="mb-3 mt-6 text-lg font-medium text-stone-900">Datenerfassung auf dieser Website</h3>
            <p className="mb-3">
              <strong className="font-medium text-stone-900">
                Wer ist verantwortlich für die Datenerfassung auf dieser Website?
              </strong>
            </p>
            <p className="mb-6">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
              können Sie dem Impressum dieser Website entnehmen.
            </p>

            <p className="mb-3">
              <strong className="font-medium text-stone-900">Wie erfassen wir Ihre Daten?</strong>
            </p>
            <p className="mb-6">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B.
              um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach
              Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
              technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>

            <p className="mb-3">
              <strong className="font-medium text-stone-900">Wofür nutzen wir Ihre Daten?</strong>
            </p>
            <p className="mb-6">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
              Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <p className="mb-3">
              <strong className="font-medium text-stone-900">
                Welche Rechte haben Sie bezüglich Ihrer Daten?
              </strong>
            </p>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung
              oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt
              haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das
              Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
              zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
          </section>

          {/* Hosting */}
          <section>
            <h2 className="mb-4 text-2xl font-light text-stone-900">2. Hosting</h2>

            <p className="mb-3">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>

            <h3 className="mb-3 mt-6 text-lg font-medium text-stone-900">Externes Hosting</h3>
            <p>
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden,
              werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v.a. um IP-Adressen,
              Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe
              und sonstige Daten, die über eine Website generiert werden, handeln.
            </p>
            <p className="mt-4">
              Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
              bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und
              effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1
              lit. f DSGVO).
            </p>
          </section>

          {/* Data Collection */}
          <section>
            <h2 className="mb-4 text-2xl font-light text-stone-900">3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3 className="mb-3 mt-6 text-lg font-medium text-stone-900">Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
              dieser Datenschutzerklärung.
            </p>
            <p className="mt-4">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene
              Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende
              Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch,
              wie und zu welchem Zweck das geschieht.
            </p>

            <h3 className="mb-3 mt-6 text-lg font-medium text-stone-900">Hinweis zur verantwortlichen Stelle</h3>
            <p className="mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="rounded-sm border border-stone-200 bg-stone-50 p-6">
              <p className="font-medium text-stone-900">comnect UG (haftungsbeschränkt)</p>
              <p className="mt-1">Max Baumgarten</p>
              <p className="mt-1">Torstraße 177</p>
              <p className="mt-1">10115 Berlin</p>
              <p className="mt-1">Deutschland</p>
              <p className="mt-3">
                E-Mail: <a href="mailto:hello@speedcalculator.com" className="text-stone-900 underline">hello@speedcalculator.com</a>
              </p>
            </div>
            <p className="mt-4">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen
              über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.)
              entscheidet.
            </p>

            <h3 className="mb-3 mt-6 text-lg font-medium text-stone-900">Speicherdauer</h3>
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
              Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
              berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden
              Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
              personenbezogenen Daten haben (z.B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
              letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
            </p>

            <h3 className="mb-3 mt-6 text-lg font-medium text-stone-900">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
              bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
              Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3 className="mb-3 mt-6 text-lg font-medium text-stone-900">
              Auskunft, Löschung und Berichtigung
            </h3>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
              Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
              der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu
              weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
            </p>
          </section>

          {/* Server Log Files */}
          <section>
            <h2 className="mb-4 text-2xl font-light text-stone-900">4. Datenerfassung auf dieser Website</h2>

            <h3 className="mb-3 mt-6 text-lg font-medium text-stone-900">Server-Log-Dateien</h3>
            <p className="mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien,
              die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="mb-4 ml-6 list-disc space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser
              Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
              Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die
              Server-Log-Files erfasst werden.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="mb-4 text-2xl font-light text-stone-900">5. Kontakt</h2>

            <p>
              Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail an:
            </p>
            <p className="mt-2">
              <a href="mailto:hello@speedcalculator.com" className="font-medium text-stone-900 underline">
                hello@speedcalculator.com
              </a>
            </p>
          </section>

          {/* Footer note */}
          <div className="mt-16 rounded-sm border-l-2 border-stone-900 bg-stone-50 px-6 py-5">
            <p className="text-xs font-light text-stone-600">
              Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
