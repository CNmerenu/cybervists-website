export default function TermsOfService() {
  return (
    <main className="min-h-screen w-full md:w-[1440px] bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent mb-8">
          Terms of Service
        </h1>

        <div className="text-gray-300 space-y-6">
          <p className="text-lg">
            <strong>Effective Date:</strong> January 1, 2025
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website, you accept and agree to be
              bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Use License
            </h2>
            <p>
              Permission is granted to temporarily download one copy of the
              materials on Cybervists&apos; website for personal, non-commercial
              transitory viewing only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Disclaimer
            </h2>
            <p>
              The materials on Cybervists&apos; website are provided on an &apos;as is&apos;
              basis. Cybervists makes no warranties, expressed or implied, and
              hereby disclaims and negates all other warranties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Limitations
            </h2>
            <p>
              In no event shall Cybervists or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at{" "}
              <a
                href="mailto:legal@cybervists.org"
                className="text-blue-400 hover:text-blue-300"
              >
                legal@cybervists.org
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
